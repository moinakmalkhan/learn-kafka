const { kafka } = require("./client");
const { TOPIC_NAME } = require("./constants");


async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting....")
    await admin.connect()
    console.log("Admin connected!")
    await admin.createTopics({
        topics: [{
            topic: TOPIC_NAME,
            numPartitions: 2,

        }]
    })
    console.log("Topic Created!")
    console.log("Admin disconnecting....")
    await admin.disconnect()
    console.log("Admin disconnected!")
}
init().catch(console.error)