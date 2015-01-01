WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 webpack lab 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello webpack

hello:
	@echo "\n${WELCOME}\n"

webpack:
	@6to5-node scripts/server/server.js
