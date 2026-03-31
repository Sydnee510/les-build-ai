# Let's Build AI

A beginner-friendly AI chat app built with Node.js and the OpenAI API.

## Getting Started

Follow these steps to get the app running on your computer.

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd les-build-ai
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Set up your API key

```bash
cp .env.example .env
```

Now open the `.env` file and replace `your-api-key-here` with your actual OpenAI API key.

You can get an API key at https://platform.openai.com/api-keys

### 4. Start the server

```bash
npm start
```

### 5. Open the app

Go to [http://localhost:3000](http://localhost:3000) in your browser and start chatting!

## Project Structure

```
les-build-ai/
├── backend/
│   ├── src/
│   │   ├── chat/
│   │   │   ├── chat.controller.js  — Handles requests and responses
│   │   │   ├── chat.service.js     — Talks to the OpenAI API
│   │   │   └── chat.routes.js      — Registers the /chat route
│   │   ├── config/
│   │   │   └── env.js              — Manages environment variables
│   │   └── app.js                  — Sets up Express and middleware
│   ├── server.js                   — Entry point, starts the server
│   ├── package.json
│   └── .env.example
├── frontend/
│   └── public/
│       └── index.html              — The chat UI
├── .gitignore
└── README.md
```

## Challenges

Look for `CHALLENGE:` comments throughout the code. Here are some ideas:

- **Change the AI's personality** — Edit the system prompt in `chat.service.js`
- **Upgrade the model** — Try `gpt-5.4-mini` or `gpt-5.4` in `chat.service.js`
- **Rename your AI** — Update the title in `index.html`
- **Pick a new color scheme** — Change the purple accent color in `index.html`
- **Update the placeholder text** — Make the input placeholder say something fun
