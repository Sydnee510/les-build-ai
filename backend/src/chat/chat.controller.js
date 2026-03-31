const { getChatResponse } = require("./chat.service");

async function handleChat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const reply = await getChatResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error.message);
    res.status(500).json({ error: "Something went wrong talking to the AI." });
  }
}

module.exports = { handleChat };
