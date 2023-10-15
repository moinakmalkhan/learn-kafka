const { kafka } = require("./client");
const { TOPIC_NAME } = require("./constants");

async function init() {
    const producer = kafka.producer();
    console.log("Connecting to producer...");
    await producer.connect()
    console.log("Producer connected successfully!");
    console.log("Sending message...")
    await producer.send({
        topic: TOPIC_NAME,
        messages: [
            {
                partition: 0,
                key: "key-1",
                value: JSON.stringify({
                    name: "Moin Khan",
                    location: "Lahore",
                })
            },
            {
                partition: 1,
                key: "key-2",
                value: JSON.stringify({
                    name: "Momin Khan",
                    location: "Narowal"
                })
            }
        ]
    })
    console.log("Message sent!")
    console.log("Disconnecting producer...")
    await producer.disconnect()
    console.log("Producer Disconnected!")
}

init().catch(console.error)
