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

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-progression:
	npm run babel-node -- src/bin/brain-progression.js
start-prime:
	npm run babel-node -- src/bin/brain-prime.js
