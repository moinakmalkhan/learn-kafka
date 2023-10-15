CONTAINER_NAME=kafka-app

.DEFAULT_GOAL := help

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

ssh:
	docker exec -it $(CONTAINER_NAME) /bin/sh

topic:
	docker exec -it $(CONTAINER_NAME) node topic.js

producer:
	docker exec -it $(CONTAINER_NAME) node producer.js

consumer:
	docker exec -it $(CONTAINER_NAME) node consumer.js

help:
	@echo "up: Start docker-compose"
	@echo "ssh: SSH into container"
	@echo "topic: Create topic"
	@echo "producer: Start producer"
	@echo "consumer: Start consumer"
