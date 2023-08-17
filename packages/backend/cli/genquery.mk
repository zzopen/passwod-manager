include common.mk

MK_GEN_QUERY = genquery

GEN_QUERY_DIR_PATH = $(CURRENT_PATH)/genquery

.PHONY: help gen-query test

help:
		@echo "usage: make <option>"
		@echo "options and effects:"
		@echo "    help       : Show help"
		@echo "    gen-model  : Generate gorm query"
		@echo "    test       : Test"

gen: gen-query

## query 代码自动生成
gen-query:
		@cd $(GEN_QUERY_DIR_PATH) && $(GO) run main.go
		@echo "Generate gorm query success ..."
