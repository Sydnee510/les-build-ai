/*
 * ============================================================
 * CHAT.SERVICE.JS — The Brain of Your AI Chatbot
 * ============================================================
 *
 * This is the ONLY file that talks to the OpenAI API.
 * Everything about how your AI thinks, responds, and behaves
 * is controlled here.
 *
 * WHAT YOU CAN CUSTOMIZE:
 *   1. AI Model        — Which OpenAI model powers your bot
 *   2. System Prompt   — Your AI's personality, tone, and rules
 *   3. Temperature     — How creative vs. focused the responses are
 *   4. Max Tokens      — How long the AI's responses can be
 *   5. RAG Documents   — Give your AI knowledge about specific topics
 *   6. Document Routing — Auto-select documents based on user questions
 *
 * ============================================================
 */

const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const env = require("../config/env");

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

/*
 * ============================================================
 * CHALLENGE: RAG (Retrieval-Augmented Generation)
 * ============================================================
 *
 * RAG lets you give your AI specific knowledge by providing
 * documents as context. Without RAG, the AI only knows what
 * it was trained on. With RAG, it can answer questions about
 * YOUR specific content!
 *
 * HOW IT WORKS:
 *   1. You add .txt files to the /backend/documents/ folder
 *   2. Each document is registered below with keywords for matching
 *   3. When a user asks a question, we pick the best document
 *   4. We include that document in the prompt so the AI can reference it
 *
 * CHALLENGE: Add your own documents!
 *   1. Create a new .txt file in /backend/documents/
 *   2. Add an entry to the documents array below with a filename and keywords
 *   That's it! The service reads the file automatically.
 *
 * Ideas for documents:
 *   - A restaurant menu
 *   - A product catalog
 *   - An FAQ about your business
 *   - A study guide for a class
 *   - Info about your personal brand
 *   - A return/refund policy
 *
 * ============================================================
 */

// Path to the documents folder
const DOCUMENTS_DIR = path.join(__dirname, "../../documents");

/*
 * CHALLENGE: Register your documents here!
 *
 * Each document needs:
 *   - file: the filename in /backend/documents/
 *   - name: a friendly label (shown in logs)
 *   - keywords: words that help match this document to user questions
 *
 * CHALLENGE: Add more keywords for better matching accuracy!
 * CHALLENGE: Add a new .txt file to /backend/documents/ and register it below!
 */
const documents = [
  {
    file: "les-build-ai-community.txt",
    name: "Les Build AI — Community & Company Info",
    // CHALLENGE: Add more keywords to improve matching
    keywords: [
      "company", "about", "who", "mission", "community", "les build",
      "values", "amiellevia", "workshop", "mentor", "involved", "contact",
    ],
  },
  {
    file: "ai-beginner-guide.txt",
    name: "AI Beginner Guide",
    // CHALLENGE: Add more keywords to improve matching
    keywords: [
      "beginner", "new", "start", "learn", "what is", "how does",
      "explain", "help", "basics", "first", "api", "prompt", "model",
      "chatbot", "rag", "no experience", "never coded",
    ],
  },
  {
    file: "ai-startup-builder-guide.txt",
    name: "AI Startup Builder Guide",
    // CHALLENGE: Add more keywords to improve matching
    keywords: [
      "startup", "build", "production", "deploy", "claude", "anthropic",
      "advanced", "scale", "launch", "business", "monetize", "saas",
      "database", "auth", "mcp", "cowork", "claude code", "sdk",
    ],
  },
  // CHALLENGE: Add more documents! Create a .txt file in /backend/documents/ and add an entry here.
  // Example:
  // {
  //   file: "restaurant-menu.txt",
  //   name: "Restaurant Menu",
  //   keywords: ["menu", "food", "order", "eat", "drink", "price", "special"],
  // },
];

/*
 * ============================================================
 * LOAD DOCUMENTS — Reads .txt files from the documents folder
 * ============================================================
 *
 * This runs once when the server starts. It reads each file
 * and stores the content in memory so we don't re-read files
 * on every chat message.
 *
 * If a file is missing, it logs a warning but doesn't crash.
 *
 * ============================================================
 */
function loadDocuments() {
  for (const doc of documents) {
    const filePath = path.join(DOCUMENTS_DIR, doc.file);
    try {
      doc.content = fs.readFileSync(filePath, "utf-8");
      console.log(`Loaded document: ${doc.name} (${doc.file})`);
    } catch (error) {
      console.warn(`Warning: Could not load document "${doc.file}" — ${error.message}`);
      doc.content = "";
    }
  }
}

// Load all documents when the server starts
loadDocuments();

/*
 * ============================================================
 * DOCUMENT ROUTING — Automatically picks the right document
 * ============================================================
 *
 * This function looks at the user's message and finds the best
 * matching document based on keywords. This way, if someone asks
 * about the company, it pulls up the community doc. If they ask
 * about getting started, it pulls up the beginner guide.
 *
 * CHALLENGE: Improve the matching!
 *   - Add more keywords to each document above
 *   - Use more specific keywords for better accuracy
 *
 * ============================================================
 */
function findRelevantDocument(userMessage) {
  const messageLower = userMessage.toLowerCase();

  let bestMatch = null;
  let bestScore = 0;

  for (const doc of documents) {
    // Skip documents that failed to load
    if (!doc.content) continue;

    const score = doc.keywords.filter((keyword) =>
      messageLower.includes(keyword.toLowerCase())
    ).length;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = doc;
    }
  }

  return bestMatch;
}

/*
 * ============================================================
 * CHALLENGE: CONVERSATION HISTORY
 * ============================================================
 *
 * By default, each message is independent — the AI doesn't
 * remember what you said before. The conversationHistory array
 * stores previous messages so the AI can have a real conversation.
 *
 * CHALLENGE: Change maxHistoryLength to control how many messages
 * the AI remembers. More = better memory but costs more tokens.
 *
 * ============================================================
 */

// CHALLENGE: Change this number to control how many messages the AI remembers
// More messages = better context but uses more API tokens (costs more)
// Try: 6 for short memory, 20 for long conversations, 0 to disable
const maxHistoryLength = 10;
const conversationHistory = [];

/*
 * ============================================================
 * THE MAIN FUNCTION — Where the magic happens
 * ============================================================
 */
async function getChatResponse(userMessage) {
  // RAG DOCUMENT RETRIEVAL (commented out — chatbot uses system prompt only)
  // CHALLENGE: Uncomment the lines below to enable RAG so your AI can
  // answer questions using your documents in /backend/documents/
  //
  // const relevantDoc = findRelevantDocument(userMessage);
  // const ragContext = relevantDoc
  //   ? `\n\nUse the following document to help answer the user's question. ` +
  //     `Only reference this information if it's relevant:\n\n` +
  //     `--- ${relevantDoc.name} ---\n${relevantDoc.content}\n---`
  //   : "";
  const ragContext = "";

  /*
   * ============================================================
   * CHALLENGE: THE SYSTEM PROMPT — Your AI's Personality
   * ============================================================
   *
   * The system prompt is the MOST important thing you can customize.
   * It controls your AI's:
   *   - Personality (friendly, professional, funny, sarcastic)
   *   - Tone (casual, formal, enthusiastic, calm)
   *   - Rules (what topics to stay on, what to avoid)
   *   - Name and identity
   *   - Response style (short vs. long, bullet points vs. paragraphs)
   *
   * EXAMPLES TO TRY:
   *
   *   Friendly assistant:
   *   "You are a cheerful and helpful assistant named Sunny. You use
   *    casual language, occasional emojis, and always encourage the user."
   *
   *   Professional advisor:
   *   "You are a professional business consultant. You give structured,
   *    actionable advice. You always ask clarifying questions before
   *    making recommendations."
   *
   *   Restaurant host:
   *   "You are Maria, the virtual host at Bella's Italian Kitchen.
   *    You help customers with the menu, take reservations, and share
   *    the chef's recommendations. You are warm and speak with passion
   *    about Italian food."
   *
   *   Fitness coach:
   *   "You are Coach Alex, an energetic personal trainer. You motivate
   *    users, suggest workouts, and give nutrition tips. You use
   *    encouraging language and celebrate small wins."
   *
   *   Study buddy:
   *   "You are a patient tutor who helps students understand difficult
   *    concepts. You break things down step by step, use analogies,
   *    and check for understanding before moving on."
   *
   * ============================================================
   */
  const systemPrompt =
    // CHALLENGE: Replace this entire string with your AI's personality!
    "You are a yoga instructor named Tasha. You provide guidance on yoga poses, breathing techniques, and mindfulness practices. You are calm, encouraging, and supportive. Keep your responses brief — use no more than 5 bullet points. Be concise and avoid long paragraphs." +
    ragContext;

  // Add the user's message to conversation history
  conversationHistory.push({ role: "user", content: userMessage });

  // Trim history if it's too long
  while (conversationHistory.length > maxHistoryLength) {
    conversationHistory.shift();
  }

  const response = await openai.chat.completions.create({
    /*
     * CHALLENGE: Choose your AI model
     * Available models (as of 2026):
     *   - "gpt-4.1-mini"  — Fast and affordable, great for most chatbots
     *   - "gpt-5.4-mini"  — Newer and smarter, still affordable
     *   - "gpt-5.4"       — Most powerful, best for complex tasks (costs more)
     *
     * Start with gpt-4.1-mini, then upgrade if you want better responses!
     */
    model: "gpt-4.1-mini",

    messages: [
      { role: "system", content: systemPrompt },
      // Include conversation history for context
      ...conversationHistory,
    ],

    /*
     * CHALLENGE: Adjust the temperature (creativity level)
     *   0.0 = Very focused and deterministic (same question = same answer)
     *   0.5 = Balanced (good default for most chatbots)
     *   0.7 = More creative and varied responses
     *   1.0 = Very creative, sometimes unpredictable
     *
     * TIP: Use lower temperature for factual/support bots,
     *      higher for creative/fun bots
     */
    temperature: 0.7,

    /*
     * CHALLENGE: Set the maximum response length
     *   100  = Very short responses (1-2 sentences)
     *   300  = Medium responses (a short paragraph)
     *   500  = Longer responses (detailed explanations)
     *   1000 = Very detailed responses
     *
     * TIP: Shorter = faster responses and lower cost
     */
    max_tokens: 500,
  });

  const aiMessage = response.choices[0].message.content;

  // Save the AI's response to conversation history
  conversationHistory.push({ role: "assistant", content: aiMessage });

  return aiMessage;
}

module.exports = { getChatResponse };
