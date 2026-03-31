/*
 * ============================================================
 * ENV.JS — Environment Variable Configuration
 * ============================================================
 *
 * This file loads your secret keys and settings from the .env
 * file. All environment variables are accessed here so that
 * no other file needs to touch process.env directly.
 *
 * CHALLENGE: As you add features, add new environment variables
 * here! For example, if you switch to a different AI provider,
 * you'd add their API key here.
 *
 * ============================================================
 */

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const env = {
  // CHALLENGE: Change the default port by setting PORT in your .env file
  PORT: process.env.PORT || 3000,

  // Your OpenAI API key — set this in your .env file (never share it!)
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

if (!env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in .env file. See .env.example for setup instructions.");
  process.exit(1);
}

module.exports = env;
