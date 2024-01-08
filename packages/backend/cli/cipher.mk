include common.mk

MK_CIPHER=cipher

# path
CIPHER_PATH=$(ROOT_PATH)/cipher
CIPHER_OUT_PATH=$(CURRENT_PATH)/cipher-out
ETC_PATH=$(CIPHER_PATH)/etc

BIN_NAME=cipher
CIPHER_GO_FILE_NAME=cipher.go

PRODUCT_CONF_FILE_NAME=cipher-api.yaml
DEVELOP_CONF_FILE_NAME=cipher-api-dev.yaml

# platform
DARWIN_BIN_NAME=$(BIN_NAME)-darwin
WINDOWS_BIN_NAME=$(BIN_NAME).exe
LINUX_BIN_NAME=$(BIN_NAME)-linux

BUILD_BIN_PATH=$(CIPHER_OUT_PATH)/$(BIN_NAME)
DARWIN_BIN_PATH=$(CIPHER_OUT_PATH)/$(DARWIN_BIN_NAME)
WINDOWS_BIN_PATH=$(CIPHER_OUT_PATH)/$(WINDOWS_BIN_NAME)
LINUX_BIN_PATH=$(CIPHER_OUT_PATH)/$(LINUX_BIN_NAME)

# upx
IF_UPX= $(shell command -v upx)
BUILD_UPX=$(if $(IF_UPX), upx $(BUILD_BIN_PATH))
DARWIN_UPX=$(if $(IF_UPX), upx $(DARWIN_BIN_PATH))
WINDOWS_UPX=$(if $(IF_UPX), upx $(WINDOWS_BIN_PATH))
LINUX_UPX=$(if $(IF_UPX), upx $(LINUX_BIN_PATH))

.PHONY: help all build win linux darwin lint fmt gen-api clean dev

help:
		@echo "usage: make <option>"
		@echo "options and effects:"
		@echo "    help       : Show help"
		@echo "    all        : Build multiple binary of this project"
		@echo "    build      : Build the binary of this project"
		@echo "    win        : Build the windows binary of this project"
		@echo "    linux      : Build the linux binary of this project"
		@echo "    darwin     : Build the darwin binary of this project"
		@echo "    lint       : Code format and check"
		@echo "    clean      : Clean build"
		@echo "    test       : Test ..."
		@echo "    dev        : Run with dev mode"
		@echo "    gen-api    : Goctl api go"

all: win linux darwin
build:
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(BUILD_UPX) && \
    cp $(BUILD_BIN_PATH) $(DESKTOP_SERVER_OUT_PATH)
		@echo "Build success ..."

win:
		GOOS=windows
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(WINDOWS_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(WINDOWS_UPX) && \
    cp $(WINDOWS_BIN_PATH) $(DESKTOP_SERVER_OUT_PATH)
		@echo "Build windows success ..."

linux:
		GOOS=linux
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(LINUX_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(LINUX_UPX) && \
    cp $(LINUX_BIN_PATH) $(DESKTOP_SERVER_OUT_PATH)
		@echo "Build linux success ..."

darwin:
		GOOS=darwin
		@cd $(CIPHER_PATH) && $(GO_BUILD) -ldflags="-s -w" -o $(CIPHER_OUT_PATH)/$(DARWIN_BIN_NAME) ./$(CIPHER_GO_FILE_NAME) && \
		$(DARWIN_UPX) && \
		cp $(DARWIN_BIN_PATH) $(DESKTOP_SERVER_OUT_PATH)
		@echo "Build darwin success ..."


lint: fmt $(linters-install)
		@golangci-lint run

fmt:
		@$(GO_FMT) -s -w $(CIPHER_PATH)/...
		@$(GO_IMPORTS) -l -w $(CIPHER_PATH)/...
		@$(GO_VET) $(CIPHER_PATH)/...

## 代码自动生成
gen-api:
		@cd $(CIPHER_PATH) && $(GO_CTL) api go -api ./desc/cipher.api -dir .
		@echo "Generate api success ..."

## run
dev:
		@cd $(CIPHER_PATH) && $(GO) run $(CIPHER_GO_FILE_NAME) -f $(ETC_PATH)/$(DEVELOP_CONF_FILE_NAME)
		@echo "Dev start ..."

clean:
		@rm -rf $(CIPHER_OUT_PATH)
		@echo "Clean finish ..."

test:
		@echo "Test ..."
