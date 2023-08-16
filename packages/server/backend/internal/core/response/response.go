package response

import (
	"fmt"
	"github.com/zzopen/password-manager/backend/internal/types"
)

type ApiResponse = types.Reply

type ApiResponseOption func(*ApiResponse)

func WithData(value any) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Data = value
	}
}

func WithMsg(value string) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Msg = value
	}
}

func WithCode(value int) ApiResponseOption {
	return func(opts *ApiResponse) {
		opts.Code = value
	}
}

func NewApiResponse(opts ...ApiResponseOption) *ApiResponse {
	res := &ApiResponse{}
	for _, opt := range opts {
		opt(res)
	}

	return res
}

func Success() *ApiResponse {
	return NewApiResponse(WithCode(SuccessCode), WithMsg(SuccessMsg), WithData(nil))
}

func SuccessWithData(data any) *ApiResponse {
	return NewApiResponse(WithCode(SuccessCode), WithMsg(SuccessMsg), WithData(data))
}

func Fail() *ApiError {
	return NewApiError(ErrorCode, FailMsg)
}

func FailWithMsg(msg string) *ApiError {
	return NewApiError(ErrorCode, msg)
}

func RequestParameterInValidMsg(field string) string {
	return fmt.Sprintf("参数:%v 无效，请检查", field)
}

func SearchFailMsg() string {
	return fmt.Sprintf("查询失败，请重试")
}

func UpdateFailMsg() string {
	return fmt.Sprintf("更新失败，请重试")
}

func CreateFailMsg() string {
	return fmt.Sprintf("创建失败，请重试")
}

func DeleteFailMsg() string {
  return fmt.Sprintf("删除失败，请重试")
}
