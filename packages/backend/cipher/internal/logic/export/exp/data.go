package exp

import (
	"zz-cipher/common/core/model"
	"zz-cipher/common/core/tool"
)

type SecretBook struct {
	Id                 string `json:"id"`
	Title              string `json:"title"`
	Website            string `json:"website"`
	Username           string `json:"username"`
	Password           string `json:"password"`
	Email              string `json:"email"`
	Mobile             string `json:"mobile"`
	Remark             string `json:"remark"`
	CreatedAt          string `json:"created_at"`
	CreatedBy          string `json:"created_by"`
	UpdatedAt          string `json:"updated_at"`
	UpdatedBy          string `json:"updated_by"`
	DataUpdatedAt      string `json:"data_updated_at"`
	SecretCategoryId   string `json:"secret_category_id"`
	SecretCategoryName string `json:"secret_category_name"`
}

func BuildSecretBook(book *model.SecretBook) *SecretBook {
	if book == nil {
		return nil
	}

	res := &SecretBook{
		Id:               tool.Uint64ToString(book.Id),
		Title:            book.Title,
		Website:          book.Website,
		Username:         book.Username,
		Password:         book.Password,
		Email:            book.Email,
		Mobile:           book.Mobile,
		Remark:           book.Remark,
		CreatedAt:        book.CreatedAt.String(),
		CreatedBy:        book.CreatedBy,
		UpdatedAt:        book.UpdatedAt.String(),
		DataUpdatedAt:    book.DataUpdatedAt.String(),
		SecretCategoryId: tool.Uint64ToString(book.SecretCategoryId),
	}

	return res
}

type SecretCategory struct {
	Id            string `json:"id"`
	Name          string `json:"name"`
	Pid           string `json:"pid"`
	PidChain      string `json:"pid_chain"`
	CreatedAt     string `json:"created_at"`
	CreatedBy     string `json:"created_by"`
	UpdatedAt     string `json:"updated_at"`
	UpdatedBy     string `json:"updated_by"`
	DataUpdatedAt string `json:"data_updated_at"`
}

func BuildSecretCategory(category *model.SecretCategory) *SecretCategory {
	if category == nil {
		return nil
	}

	return &SecretCategory{
		Id:            tool.Uint64ToString(category.Id),
		Name:          category.Name,
		Pid:           tool.Uint64ToString(category.Pid),
		PidChain:      category.PidChain,
		CreatedAt:     category.CreatedAt.String(),
		CreatedBy:     category.CreatedBy,
		UpdatedAt:     category.UpdatedAt.String(),
		DataUpdatedAt: category.DataUpdatedAt.String(),
	}
}
