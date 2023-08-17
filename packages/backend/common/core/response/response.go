package response

type Reply struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data,omitempty"`
}

type ApiResponse = Reply

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

