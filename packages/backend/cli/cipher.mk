include common.mk

MK_CIPHER = cipher

# path
CIPHER_PATH= $(ROOT_PATH)/cipher
CIPHER_OUT_PATH = $(CURRENT_PATH)/cipher-out
ETC_PATH = $(CIPHER_PATH)/etc

BIN_NAME = pwd-manager
CIPHER_GO_FILE_NAME = cipher.go

PRODUCT_CONF_FILE_NAME = cipher-api.yaml
DEVELOP_CONF_FILE_NAME = cipher-api-dev.yaml

# platform
DARWIN_BIN_NAME=$(BIN_NAME)-darwin
WINDOWS_BIN_NAME=$(BIN_NAME).exe
LINUX_BIN_NAME=$(BIN_NAME)-linux

# upx
IF_UPX= $(shell command -v upx)
BUILD_UPX=$(if $(IF_UPX), upx $(CIPHER_OUT_PATH)/$(BIN_NAME))
DARWIN_UPX=$(if $(IF_UPX), upx $(CIPHER_OUT_PATH)/$(DARWIN_BIN_NAME))
WINDOWS_UPX=$(if $(IF_UPX), upx $(CIPHER_OUT_PATH)/$(WINDOWS_BIN_NAME))
LINUX_UPX=$(if $(IF_UPX), upx $(CIPHER_OUT_PATH)/$(LINUX_BIN_NAME))

.PHONY: help all build windows linux darwin lint fmt gen-api gen clean dev pro

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
		@echo "    test       : Test ..."
		@echo "    dev        : Run with dev mode"
		@echo "    pro        : Run with pro mode"
		@echo "    gen-api    : Goctl api go"

all: windows linux darwin
## build
build:
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(BUILD_UPX)
		@echo "build success ..."

windows:
		GOOS=windows && \
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(WINDOWS_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(UPX)
		@echo "windows success ..."

linux:
		GOOS=linux && \
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(LINUX_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(LINUX_UPX)
		@echo "linux success ..."

darwin:
		GOOS=darwin && \
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(DARWIN_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(DARWIN_UPX)
		@echo "darwin success ..."


lint: fmt $(linters-install)
		@golangci-lint run

fmt:
		@$(GO_FMT) -s -w $(CIPHER_PATH)/...
		@$(GO_IMPORTS) -l -w $(CIPHER_PATH)/...
		@$(GO_VET) $(CIPHER_PATH)/...

## 代码自动生成
gen-api:
		@cd $(CIPHER_PATH) && $(GO_CTL) api go -api ./api/cipher.api -dir .
		@echo "Generate api success ..."

## run
dev:
		@cd $(CIPHER_PATH) && $(GO) run $(CIPHER_GO_FILE_NAME) -f $(ETC_PATH)/$(DEVELOP_CONF_FILE_NAME)
		@echo "Dev start ..."

pro:
		@cd $(CIPHER_PATH) && $(GO) run $(CIPHER_GO_FILE_NAME) -f $(ETC_PATH)/$(PRODUCT_CONF_FILE_NAME)
		@echo "Pro start ..."

clean:
		@rm -rf $(CIPHER_OUT_PATH)
		@echo "Clean finish ..."

test:
		@echo "Test ..."
