const { kafka } = require("./client");
const { TOPIC_NAME, CONSUMER_GROUP_ID } = require("./constants");

async function init(){
    const consumer = kafka.consumer({groupId: CONSUMER_GROUP_ID})
    consumer.subscribe({topic: TOPIC_NAME, fromBeginning: true})
    consumer.run({
        eachMessage: async ({topic, partition, message, pause, heartbeat}) => {
            console.log(`
=========================
Topic: ${topic}
Partition: ${partition}
Message: ${message.value.toString()}
==========================
            `)
        }
    })
}
init().catch(console.error)