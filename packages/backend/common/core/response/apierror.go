package response

type ApiError struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
}

func NewApiError(code int, msg string) *ApiError {
	return &ApiError{Code: code, Msg: msg}
}

func (e *ApiError) Error() string {
	return e.Msg
}

func (e *ApiError) Data() *ApiErrorData {
	return NewApiErrorData(e.Code, e.Msg)
}
