package main

import (
	"flag"
	"github.com/zeromicro/go-zero/core/conf"
  "net/url"

  "gorm.io/driver/sqlite"
	"gorm.io/gen"
	"gorm.io/gorm"

	"github.com/zzopen/z-note/backend/internal/config"
	"github.com/zzopen/z-note/backend/internal/core/model"
)

// Dynamic SQL
type Querier interface {
	// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
	FilterWithNameAndRole(name, role string) ([]gen.T, error)
}

func main() {

	var configFile = flag.String("f", "../../etc/backend-api.yaml", "the config file")
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)

	g := gen.NewGenerator(gen.Config{
		OutPath: "../../internal/core/query",
		Mode:    gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface, // generate mode
	})

	// gormDb, _ := gorm.Open(mysql.Open("root:@(127.0.0.1:3306)/demo?charset=utf8mb4&parseTime=True&loc=Local"))
  dbPath, _ := url.JoinPath(c.Global.SqliteDirPath, c.Global.SqliteDbName+".db")
	gormDb, _ := gorm.Open(sqlite.Open(dbPath+"?mode=wal"), &gorm.Config{})
	g.UseDB(gormDb) // reuse your gorm db

	// Generate basic type-safe DAO API for struct `model.User` following conventions
	//g.ApplyBasic(model.User{})

	models := []interface{}{model.Account{}, model.Website{}, model.Category{}, model.AccountCategory{}}
	g.ApplyBasic(models...)

	// Generate Type Safe API with Dynamic SQL defined on Querier interface for `model.User` and `model.Company`
	//g.ApplyInterface(func(Querier) {}, model.User{}, model.Company{})
	g.ApplyInterface(func(Querier) {}, models...)

	// Generate the code
	g.Execute()
}
