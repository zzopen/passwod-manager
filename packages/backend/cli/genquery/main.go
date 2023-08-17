package main

import (
	"flag"
	"zz-cipher/common/core/model"

	"github.com/zeromicro/go-zero/core/conf"
	"gorm.io/driver/sqlite"
	"gorm.io/gen"
	"gorm.io/gorm"
)

type Config struct {
	QueryPath string
	Sqlite    struct {
		DbFilePath string
	}
}

type Querier interface{}

func main() {

	var configFile = flag.String("f", "conf.yaml", "the config file")
	flag.Parse()

	var c Config
	conf.MustLoad(*configFile, &c)

	g := gen.NewGenerator(gen.Config{
		OutPath:          c.QueryPath,
		Mode:             gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface, // generate mode
		FieldWithTypeTag: true,
		FieldCoverable:   true,
	})

	// gormDb, _ := gorm.Open(mysql.Open("root:@(127.0.0.1:3306)/demo?charset=utf8mb4&parseTime=True&loc=Local"))
	gormDb, _ := gorm.Open(sqlite.Open(c.Sqlite.DbFilePath+"?mode=wal"), &gorm.Config{})
	g.UseDB(gormDb) // reuse your gorm db

	// Generate basic type-safe DAO API for struct `model.User` following conventions
	//g.ApplyBasic(model.User{})

	models := model.GetModels()
	g.ApplyBasic(models...)

	// Generate Type Safe API with Dynamic SQL defined on Querier interface for `model.User` and `model.Company`
	//g.ApplyInterface(func(Querier) {}, model.User{}, model.Company{})
	g.ApplyInterface(func(Querier) {}, models...)

	// Generate the code
	g.Execute()
}
