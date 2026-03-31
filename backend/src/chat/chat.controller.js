/*
 * ============================================================
 * CHAT.CONTROLLER.JS — Handles Chat Requests & Responses
 * ============================================================
 *
 * This file is the middleman between the frontend and the AI.
 * It receives the user's message, passes it to the service,
 * and sends the AI's response back.
 *
 * CHALLENGE: Customize the error messages users see when
 * something goes wrong — make them match your AI's personality!
 *
 * ============================================================
 */

const { getChatResponse } = require("./chat.service");

async function handleChat(req, res) {
  const { message } = req.body;

  if (!message) {
    // CHALLENGE: Change this error message to match your AI's tone
    // Example: "Oops! Looks like you forgot to type something."
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const reply = await getChatResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error.message);
    // CHALLENGE: Change this error message to be more on-brand
    // Example: "Yikes! My brain glitched. Can you try again?"
    res.status(500).json({ error: "Something went wrong talking to the AI." });
  }
}

module.exports = { handleChat };
