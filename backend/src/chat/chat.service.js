const OpenAI = require("openai");
const env = require("../config/env");

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

async function getChatResponse(userMessage) {
  const response = await openai.chat.completions.create({
    // CHALLENGE: Try upgrading to "gpt-5.4-mini" or "gpt-5.4" for a more powerful model
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        // CHALLENGE: Change this system prompt to give your AI a unique personality!
        content:
          "You are a friendly and helpful AI assistant. You give clear, concise answers.",
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = { getChatResponse };
