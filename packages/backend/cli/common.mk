# command
GO = go
GO_CMD=GO111MODULE=on
GO_VET = $(GO) vet
GO_BUILD = $(GO) build
GO_IMPORTS = goimports
GO_FMT = gofmt
GO_CTL = goctl

# path
MAKEFILE_PATH = $(abspath $(lastword $(MAKEFILE_LIST)))
MAKEFILE_DIR = $(abspath $(dir $(MAKEFILE_PATH)))
CURRENT_PATH = $(MAKEFILE_DIR)
ROOT_PATH= $(abspath $(CURRENT_PATH)/../)


## 检查代码格式
linters-install:
	@golangci-lint --version >/dev/null 2>&1 || { \
		echo "installing linting tools..."; \
		curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.53.3; \
	}

color:
		$(info This is a coloured message: $(shell echo '\e[31;1m RED \e[0m'))
		$(info This is a coloured message: $(shell echo '\e[32;1m GREEN \e[0m')))
		$(info This is a coloured message: $(shell echo '\e[33;1m YELLOW \e[0m')))
		$(info This is a coloured message: $(shell echo '\e[34;1m BLUE \e[0m')))
		$(info This is a coloured message: $(shell echo '\e[35;1m PURPLE \e[0m')))
		$(info This is a coloured message: $(shell echo '\e[36;1m CYAN \e[0m')))
		$(info This is a coloured message: $(shell echo '\e[37;1m WHITE \e[0m')))
