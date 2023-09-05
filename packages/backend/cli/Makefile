include common.mk

CIPHER_MAKEFILE = cipher.mk
GEN_QUERY_MAKEFILE = genquery.mk

MAKE_CIPHER_MAKEFILE=$(MAKE) -f $(CIPHER_MAKEFILE)

.PHONY: gen dev test build
gen:
		@$(MAKE_CIPHER_MAKEFILE) gen-api
		@$(MAKE) -f $(GEN_QUERY_MAKEFILE) gen-query

dev:
		@$(MAKE_CIPHER_MAKEFILE) dev

build:
		@$(MAKE_CIPHER_MAKEFILE) darwin

test:
		@echo "Test ..."

