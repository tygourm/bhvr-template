init:
	bun i --frozen-lockfile

start: init
	bun run start

build: init
	bun run build

serve: build
	bun run serve

write: init
	bun run write

check: init
	bun run check

clean:
	find . -type d -name dist -prune -exec rm -rf {} +
	find . -type d -name node_modules -prune -exec rm -rf {} +
