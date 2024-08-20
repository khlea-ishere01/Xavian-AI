module.exports = {
    config: {
        name: "call",
        role: 0,
        author: "Micazhla",
        longDescription: "Not a command"
    },
    onStart: async function ({ message }) {
        message.reply("How can I help you?")
    },
    onChat: async function ({ message, event }) {
        if (event.body && event.body.toLowerCase() === "zion") {
            message.reply("Hello, how may I help?")
        }
    }
};
