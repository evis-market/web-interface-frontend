serve: ## Run server in developmet mode
	quasar dev

build: ## Build for production mode
	export BUILD_ENV="production" && quasar build

build-dev: ## Build for development mode
	export BUILD_ENV="development" && quasar build

help: ## This help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
