WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 webpack lab 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello webpack

hello:
	@echo "\n${WELCOME}\n"

webpack:
	@node server.js
