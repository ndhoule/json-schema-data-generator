#
# Binaries.
#

ESLINT=./node_modules/.bin/eslint
MOCHA=./node_modules/.bin/mocha

#
# Binary options.
#

GREP ?= .

#
# Files.
#

NODE_PACKAGES = package.json $(wildcard node_modules/*/package.json)
SRCS = index.js
TESTS = $(shell find test -type f -name "*.test.js")

#
# Tasks.
#

# Install node modules.
node_modules: $(NODE_PACKAGES)
	@npm install

# Delete local files.
clean:
	@rm -rf *.log
.PHONY: clean

# Delete local and vendor files.
distclean: clean
	rm -r node_modules
.PHONY: distclean

lint: node_modules
	@$(ESLINT) $(SRCS) $(TESTS)
.PHONY: lint

test:
	@$(MOCHA) \
		--ui bdd \
		--reporter spec \
		--grep "$(GREP)" \
		$(TESTS)
.PHONY: test
