const { Kafka } = require("kafkajs");
const { CLIENT_ID } = require("./constants");

module.exports.kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: [process.env.KAFKA_HOST]
});
