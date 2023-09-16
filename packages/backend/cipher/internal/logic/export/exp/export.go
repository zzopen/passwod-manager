package exp

import (
	"context"
	"encoding/csv"
	"github.com/duke-git/lancet/v2/convertor"
	"github.com/duke-git/lancet/v2/strutil"
	"os"
	"path/filepath"
	"zz-cipher/cipher/internal/svc"
	"zz-cipher/cipher/internal/types"
	"zz-cipher/common/core/crypt/aes"
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/query"
	"zz-cipher/common/core/repository"
)

const FormatJson = "json"
const FormatCsv = "csv"
const FormatExcel = "excel"

type Exporter struct {
	format                   string
	isEncrypt                bool
	filePath                 string
	ctx                      context.Context
	svcCtx                   *svc.ServiceContext
	secretCategoryMap        map[string]*model.SecretCategory
	secretBookRepository     *repository.SecretBookRepository
	secretCategoryRepository *repository.SecretCategoryRepository
}

func NewExporter(ctx context.Context, svcCtx *svc.ServiceContext, req *types.ExportDataReq) *Exporter {
	encrypt := false
	if req.Encrypt == "1" {
		encrypt = true
	} else if req.Encrypt == "2" {
		encrypt = false
	}

	absPath, _ := filepath.Abs(req.OutDir)
	filePath := absPath + "/" + req.FileName

	exporter := &Exporter{
		format:    req.Format,
		isEncrypt: encrypt,
		svcCtx:    svcCtx,
		ctx:       ctx,
	}

	exporter.secretBookRepository = repository.NewSecretBookRepository(ctx, query.Q)
	exporter.secretCategoryRepository = repository.NewSecretCategoryRepository(ctx, query.Q)
	exporter.filePath = filePath + exporter.fileExt()

	secretCategoryList, _ := exporter.secretCategoryRepository.GetAllNormal()
	secretCategoryMap := exporter.secretCategoryRepository.ToMap(secretCategoryList)
	exporter.secretCategoryMap = secretCategoryMap
	return exporter
}

func (exp *Exporter) isJsonFormat() bool {
	return exp.format == FormatJson
}

func (exp *Exporter) isCsvFormat() bool {
	return exp.format == FormatCsv
}

func (exp *Exporter) isExcelFormat() bool {
	return exp.format == FormatExcel
}

func (exp *Exporter) fileExt() string {
	if exp.format == FormatJson {
		return ".json"
	}
	if exp.format == FormatCsv {
		return ".csv"
	}

	if exp.format == FormatExcel {
		return ".xsl"
	}

	return ""
}

func (exp *Exporter) buildSecretBook(secretBook *model.SecretBook) *SecretBook {
	book := BuildSecretBook(secretBook)
	if _, ok := exp.secretCategoryMap[book.SecretCategoryId]; ok {
		book.SecretCategoryName = exp.secretCategoryMap[book.SecretCategoryId].Name
	}

	if !exp.isEncrypt {
		book.Username = aes.CbcDecrypt(book.Username, exp.svcCtx.Config.Custom.AesKey)
		book.Password = aes.CbcDecrypt(book.Password, exp.svcCtx.Config.Custom.AesKey)
	}

	return book
}

func (exp *Exporter) doJson() error {
	var err error
	startId := uint64(1)
	limit := 1000
	file, err := os.Create(exp.filePath)
	if err != nil {
		return err
	}

	defer file.Close()
	defer func(err error) {
		if err != nil {
			_ = os.Remove(exp.filePath)
		}
	}(err)

	var books []*SecretBook
	for {
		secretBookList, _ := exp.secretBookRepository.BatchGetSecretBookList(startId, limit)
		if secretBookList == nil {
			break
		}

		for _, secretBook := range secretBookList {
			if secretBook == nil {
				continue
			}

			if secretBook.Id > startId {
				startId = secretBook.Id
			}

			book := exp.buildSecretBook(secretBook)
			books = append(books, book)
		}

		if len(secretBookList) < limit {
			break
		}
	}

	content, _ := convertor.ToJson(books)
	if content == "" {
		return nil
	}

	_, err = file.Write(strutil.StringToBytes(content))
	if err != nil {
		return err
	}

	return err
}

func (exp *Exporter) doCsv() error {
	var err error
	startId := uint64(1)
	limit := 1000
	file, err := os.Create(exp.filePath)
	if err != nil {
		return err
	}

	defer file.Close()
	defer func(err error) {
		if err != nil {
			_ = os.Remove(exp.filePath)
		}
	}(err)

	writer := csv.NewWriter(file)
	defer writer.Flush()

	// 写入标题行
	header := []string{
		"Id", "Title", "Website", "Username", "Password", "Email", "Mobile", "Remark",
		"CreatedAt", "CreatedBy", "UpdatedAt", "UpdatedBy", "DataUpdatedAt", "SecretCategoryId",
		"SecretCategoryName",
	}
	err = writer.Write(header)
	if err != nil {
		return err
	}

	var records [][]string
	for {
		secretBookList, _ := exp.secretBookRepository.BatchGetSecretBookList(startId, limit)
		if secretBookList == nil {
			break
		}

		for _, secretBook := range secretBookList {
			if secretBook == nil {
				continue
			}

			if secretBook.Id > startId {
				startId = secretBook.Id
			}

			book := exp.buildSecretBook(secretBook)
			records = append(records, []string{
				book.Id, book.Title, book.Website, book.Username, book.Password,
				book.Email, book.Mobile, book.Remark, book.CreatedAt, book.CreatedBy,
				book.UpdatedAt, book.UpdatedBy, book.DataUpdatedAt,
			})
		}

		if len(secretBookList) < limit {
			break
		}
	}

	if records == nil {
		return nil
	}

	err = writer.WriteAll(records)
	if err != nil {
		return err
	}

	return err
}

func (exp *Exporter) Do() error {
	if exp.isJsonFormat() {
		return exp.doJson()
	}

	if exp.isCsvFormat() {
		return exp.doCsv()
	}

	return nil
}
