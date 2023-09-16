package kill

import (
	"fmt"
	"os"
	"syscall"
)

func main() {

	pid := 22838 // 替换为你要发送信号的进程ID

	// 创建一个os.Process对象表示进程
	_, err := os.FindProcess(pid)
	if err != nil {
		fmt.Println("无法找到进程:", err)
		return
	}

	fmt.Println("找到进程")

	if err := syscall.Kill(pid, syscall.SIGTERM); err != nil {
		fmt.Println("发送信号失败:", err)
	}

	fmt.Println("信号已发送给进程")
}
