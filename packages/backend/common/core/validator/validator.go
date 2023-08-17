package validator

import (
  "errors"
  "net/http"
  "reflect"

  "github.com/go-playground/locales/zh_Hans_CN"
  unTrans "github.com/go-playground/universal-translator"
  "github.com/go-playground/validator/v10"
  zhTrans "github.com/go-playground/validator/v10/translations/zh"
  "github.com/zeromicro/go-zero/rest/httpx"
)

type Validator struct {
  httpx.Validator
}

func (*Validator) Validate(r *http.Request, data any) error {
  validate := validator.New()
  uni := unTrans.New(zh_Hans_CN.New())
  trans, _ := uni.GetTranslator("zh_Hans_CN")
  err := zhTrans.RegisterDefaultTranslations(validate, trans)
  if err != nil {
    return errors.New(err.Error())
  }

  // 将验证法字段名 映射为中文名
  validate.RegisterTagNameFunc(func(field reflect.StructField) string {
    label := field.Tag.Get("label")
    return label
  })
  err = validate.Struct(data)
  if err == nil {
    return nil
  }

  // 如果是输入参数无效，则直接返回输入参数错误
  invalid, ok := err.(*validator.InvalidValidationError)
  if ok {
    return errors.New("输入参数错误：" + invalid.Error())
  }

  // 错误可能有多个 遍历 返回一个
  for _, v := range err.(validator.ValidationErrors) {
    return errors.New(v.Translate(trans))
  }

  return errors.New("")
}

func NewValidator() *Validator {
  return &Validator{}
}
