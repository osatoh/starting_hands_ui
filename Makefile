NEXT = nextjs

help:
	cat Makefile

init: build up

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down