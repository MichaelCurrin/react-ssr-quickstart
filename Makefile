default: install

h help:
	grep '^[a-z]' Makefile


install:
	npm install


clean:
	rm -rf dist/*

watch:
	npm run watch
dev:
	npm run dev

s serve: clean
	npm run build
	$(MAKE) -j 2 watch dev
