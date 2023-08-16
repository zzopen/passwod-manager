package response

// ApiErrorData go-zero全局错误处理器不能返回实现Error接口的结构体，否则以文本处理
type ApiErrorData struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

func NewApiErrorData(code int, msg string) *ApiErrorData {
	return &ApiErrorData{Code: code, Msg: msg}
}

func NewDefaultApiErrorData(msg string) *ApiErrorData {
	return &ApiErrorData{Code: ErrorCode, Msg: msg}
}
