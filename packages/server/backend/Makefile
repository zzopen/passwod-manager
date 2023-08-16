# command
GO = go
GO_CMD=GO111MODULE=on
GO_VET = $(GO) vet
GO_BUILD = $(GO) build
GO_IMPORTS = goimports
GO_FMT = gofmt
GO_CTL = goctl

BIN_NAME = pwd-manager

PRODUCT_CONF_FILE_NAME = backend-api.yaml
DEVELOP_CONF_FILE_NAME = backend-api-dev.yaml

# path
MAKEFILE_PATH = $(abspath $(lastword $(MAKEFILE_LIST)))
MAKEFILE_DIR = $(dir $(MAKEFILE_PATH))
SOURCE_PATH = $(MAKEFILE_DIR)
PROJECT_PATH= $(abspath $(SOURCE_PATH)../)
OUT_PATH = $(PROJECT_PATH)/out
ETC_PATH = $(SOURCE_PATH)etc

# windows linux darwin
DARWIN_BIN_NAME=$(BIN_NAME)-darwin
WINDOWS_BIN_NAME=$(BIN_NAME).exe
LINUX_BIN_NAME=$(BIN_NAME)-linux

IF_UPX= $(shell command -v upx)
BUILD_UPX=$(if $(IF_UPX), upx $(OUT_PATH)/$(BIN_NAME))
DARWIN_UPX=$(if $(IF_UPX), upx $(OUT_PATH)/$(DARWIN_BIN_NAME))
WINDOWS_UPX=$(if $(IF_UPX), upx $(OUT_PATH)/$(WINDOWS_BIN_NAME))
LINUX_UPX=$(if $(IF_UPX), upx $(OUT_PATH)/$(LINUX_BIN_NAME))

.PHONY: help all build windows linux darwin linters-install lint fmt gen-api gen-model gen clean dev pro

help:
		@echo "usage: make <option>"
		@echo "options and effects:"
		@echo "    help       : Show help"
		@echo "    all        : Build multiple binary of this project"
		@echo "    build      : Build the binary of this project for current platform"
		@echo "    windows    : Build the windows binary of this project"
		@echo "    linux      : Build the linux binary of this project"
		@echo "    darwin     : Build the darwin binary of this project"
		@echo "    lint       : Code format and check"
		@echo "    clean      : Clean build"
		@echo "    dev        : run with dev mode"
		@echo "    pro        : run with pro mode"
		@echo "    gen-api    : goctl api go"
		@echo "    gen-model  : generate gorm model"
		@echo "    gen        : generate model and api"

all: windows linux darwin
## build
build:
		@cd $(SOURCE_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(OUT_PATH)/$(BIN_NAME) ./backend.go && \
		$(BUILD_UPX)
		@echo "build success ..."

windows:
		GOOS=windows && \
		@cd $(SOURCE_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(OUT_PATH)/$(WINDOWS_BIN_NAME) ./backend.go && \
		$(UPX)
		@echo "windows success ..."

linux:
		GOOS=linux && \
		@cd $(SOURCE_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(OUT_PATH)/$(LINUX_BIN_NAME) ./backend.go && \
		$(LINUX_UPX)
		@echo "linux success ..."

darwin:
		GOOS=darwin && \
		@cd $(SOURCE_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(OUT_PATH)/$(DARWIN_BIN_NAME) ./backend.go && \
		$(DARWIN_UPX)
		@echo "darwin success ..."

## 检查代码格式
linters-install:
	@golangci-lint --version >/dev/null 2>&1 || { \
		echo "installing linting tools..."; \
		curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.53.3; \
	}


lint: fmt linters-install
		@golangci-lint run

fmt:
		@$(GO_FMT) -s -w $(SOURCE_PATH)/...
		@$(GO_IMPORTS) -l -w $(SOURCE_PATH)/...
		@$(GO_VET) $(SOURCE_PATH)/...

## 代码自动生成
gen: gen-api gen-model

gen-api:
		@cd $(SOURCE_PATH) && $(GO_CTL) api go -api ./api/backend.api -dir .
		@echo "gen api success ..."

gen-model:
		@cd $(SOURCE_PATH)api/genmodel && $(GO) run main.go
		@echo "gen model success ..."

## run
dev:
		@cd $(SOURCE_PATH) && $(GO) run backend.go -f $(ETC_PATH)/$(DEVELOP_CONF_FILE_NAME)
		@echo "dev start ..."

pro:
		@cd $(SOURCE_PATH) && $(GO) run backend.go -f $(ETC_PATH)/$(PRODUCT_CONF_FILE_NAME)
		@echo "dev start ..."

clean:
		@rm -rf $(OUT_PATH)
		@echo "clean finish ..."

test:
		@echo "test ..."
