const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const env = {
  PORT: process.env.PORT || 3000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

if (!env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in .env file. See .env.example for setup instructions.");
  process.exit(1);
}

module.exports = env;
