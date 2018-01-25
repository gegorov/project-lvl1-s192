install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
lint:
	npm run eslint .
delete-old:
	@echo Deletenig old install files and folders
	rm -rf dist
	rm -rf node_modules
	rm -f package-lock.json

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js
