<div align="center">

# Let's Build AI

### Build Your First AI-Powered Website — Tonight.

<br />

![Node.js](https://img.shields.io/badge/Node.js-1A1A1A?style=for-the-badge&logo=node.js&logoColor=E8C547)
![Express](https://img.shields.io/badge/Express-1A1A1A?style=for-the-badge&logo=express&logoColor=E8C547)
![OpenAI](https://img.shields.io/badge/OpenAI-1A1A1A?style=for-the-badge&logo=openai&logoColor=E8C547)
![Claude](https://img.shields.io/badge/Claude-1A1A1A?style=for-the-badge&logo=anthropic&logoColor=E8C547)
![VS Code](https://img.shields.io/badge/VS%20Code-1A1A1A?style=for-the-badge&logo=visualstudiocode&logoColor=E8C547)
![HTML](https://img.shields.io/badge/HTML%2FCSS%2FJS-1A1A1A?style=for-the-badge&logo=html5&logoColor=E8C547)

<br />

**No coding experience? No problem.**

You're about to build a real website with an AI chatbot built right into it — the same kind of chatbot you see on company websites everywhere. By the end of this project, you'll have a working app running on your computer, and the skills to customize it, make it yours, and put it on the internet for the world to see.

**You belong here. Let's build.**

<br />

---

</div>

<br />

## What Are We Building?

A full website with an **AI-powered chatbot** that pops up in the bottom-right corner (just like the ones on real company websites). When a visitor clicks the chat icon, they can ask questions and get instant AI-powered responses.

Here's what your app includes:

- A **marketing website** with a navigation bar, hero section, features, and footer
- A **floating chat widget** that opens and closes with a button click
- An **AI chatbot** powered by OpenAI that understands questions and responds intelligently
- **RAG (Retrieval-Augmented Generation)** — your chatbot reads from text documents so it can answer questions about YOUR specific content
- **Conversation memory** — the AI remembers what you said earlier in the chat

<br />

---

<br />

## Before You Start — Install These Tools

If you've never coded before, you'll need a few free tools on your computer first. Think of these like apps you download before you can play a game.

<br />

### 1. Install VS Code (Your Code Editor)

VS Code is where you'll write and edit code. It's like Google Docs, but for code.

**Download it here:** https://code.visualstudio.com

- Click the big download button for your computer
  - **Mac:** Click "Download for Mac"
  - **Windows:** Click "Download for Windows"
- Open the downloaded file and follow the install steps
  - **Mac:** Drag the VS Code icon into your Applications folder
  - **Windows:** Run the installer `.exe` and click through the prompts. Check the box that says **"Add to PATH"** if you see it — this is important!
- Once installed, open VS Code — you'll see a welcome screen

<br />

### 2. Install Node.js (Runs Your App)

Node.js is what makes your app actually run. Without it, your code is just text sitting on a screen.

**Download it here:** https://nodejs.org

- Download the **LTS** version (the one on the left — it's the most stable)
- Open the downloaded file and follow the install steps
  - **Mac:** Open the `.pkg` file and click through the installer
  - **Windows:** Run the `.msi` installer. Click through the prompts — the defaults are fine
- To verify it worked, open your terminal and type:
  - **Mac:** Open **Terminal** (press `Cmd + Space`, type "Terminal", hit Enter)
  - **Windows:** Open **Command Prompt** (press the Windows key, type "cmd", hit Enter)

```bash
node --version
```

If you see a version number like `v20.x.x` — you're good!

<br />

### 3. Install Git (Tracks Your Code)

Git is a tool that lets you download code, save your progress, and share your work. Every developer uses it.

**Download it here:** https://git-scm.com/downloads

- **Mac:** macOS often comes with Git pre-installed. Try running `git --version` in your Terminal first. If it's not there, download it from the link above (or install with Homebrew: `brew install git`)
- **Windows:** Download the installer from the link above. During setup, you'll see a lot of options — **just click "Next" on every screen.** The defaults are perfect.

To verify it worked, type this in your terminal:

```bash
git --version
```

If you see a version number — you're set!

<br />

### 4. Create a GitHub Account (Where Your Code Lives Online)

GitHub is like Google Drive for code. It stores your project online so you can access it from anywhere and share it with others.

**Sign up here:** https://github.com

- Create a free account
- You'll use this later to save your project and deploy it to the internet

<br />

### 5. Connect Git to GitHub (So Your Computer Can Talk to GitHub)

Right now Git is installed on your computer and you have a GitHub account online — but they don't know about each other yet. We need to connect them. Think of it like linking your phone to your email account.

#### Tell Git Who You Are

Open your terminal and type these two commands (replace with YOUR name and email):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

> Use the **same email** you signed up for GitHub with.

#### Set Up an SSH Key (Your Secure Connection)

An SSH key is like a digital handshake between your computer and GitHub. Instead of typing your password every time, your computer proves who you are automatically.

**Step 1: Check if you already have an SSH key**

```bash
ls ~/.ssh/id_ed25519.pub
```

- If you see a file path — you already have one! Skip to **Step 3**.
- If you see "No such file or directory" — keep going to Step 2.

> **Windows users:** If `ls` doesn't work, try `dir %USERPROFILE%\.ssh\id_ed25519.pub` instead.

**Step 2: Create a new SSH key**

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

- It will ask where to save the key — **just press Enter** to use the default location
- It will ask for a passphrase — **press Enter twice** to skip (or set one if you want extra security)

**Step 3: Copy your SSH key**

- **Mac:**
  ```bash
  pbcopy < ~/.ssh/id_ed25519.pub
  ```
  (This copies the key to your clipboard — you won't see anything happen, but it worked!)

- **Windows:**
  ```bash
  clip < %USERPROFILE%\.ssh\id_ed25519.pub
  ```
  (Same thing — copied to your clipboard!)

- **If those commands don't work**, you can also do it manually:
  ```bash
  cat ~/.ssh/id_ed25519.pub
  ```
  Then select all the text that appears and copy it (`Ctrl+C` or `Cmd+C`).

**Step 4: Add the key to GitHub**

1. Go to https://github.com/settings/keys
2. Click **"New SSH key"**
3. Give it a title (like "My Laptop")
4. Paste the key you just copied into the **"Key"** box
5. Click **"Add SSH key"**

**Step 5: Test your connection**

```bash
ssh -T git@github.com
```

- If it asks "Are you sure you want to continue connecting?" — type **yes** and press Enter
- If you see **"Hi username! You've successfully authenticated"** — you're connected!
- If you see an error, double-check that you copied the full key and added it to GitHub

<br />

### 6. Create an OpenAI Account (Powers Your AI)

OpenAI is the company that makes the AI your chatbot will use. You need an API key (like a password) that lets your app talk to their AI.

**Sign up here:** https://platform.openai.com

- Create an account
- Go to **API Keys**: https://platform.openai.com/api-keys
- Click **"Create new secret key"**
- Give it a name (like "les build chat bot")
- **Copy the key and save it somewhere safe** — you'll need it soon!

> **Important:** Your API key is like a password. Never share it, never post it online, and never put it in your code directly. We'll store it safely in a special file called `.env`.

<br />

### 7. Sign Up for Claude (Your AI Coding Assistant)

Claude is an AI made by Anthropic. While OpenAI powers the chatbot your users will talk to, Claude is the AI that helps **you** build and write code. Think of it as your personal coding tutor sitting right inside VS Code.

**Sign up here:** https://claude.ai

- Create a free account
- You'll use Claude to help you understand code, make changes, and debug problems

<br />

### 8. Install the Claude Extension in VS Code

This puts Claude right inside your code editor so you can ask it questions while you work.

1. Open **VS Code**
2. Click the **Extensions** icon in the left sidebar (it looks like 4 small squares)
   - Or press `Ctrl+Shift+X` (Windows) / `Cmd+Shift+X` (Mac)
3. In the search bar, type **"Claude"**
4. Find **"Claude" by Anthropic** and click **Install**
5. Once installed, you'll see a Claude icon in your left sidebar
6. Click it and sign in with the Claude account you just created

Now you can highlight any code, right-click, and ask Claude to explain it, fix it, or improve it — right inside VS Code!

<br />

### 9. Install Claude Code in Your Terminal (Optional but Powerful)

Claude Code is the command-line version of Claude. It can read your entire project, write code, run commands, and help you build features — all from your terminal.

**How to install:**

Open your terminal and type:
- **Mac:**
  ```bash
  npm install -g @anthropic-ai/claude-code
  ```
- **Windows (run Command Prompt as Administrator):**
  - Right-click on **Command Prompt** in the Start menu and select **"Run as administrator"**
  - Then type:
  ```bash
  npm install -g @anthropic-ai/claude-code
  ```

To verify it worked:

```bash
claude --version
```

To start using it, navigate to your project folder and type:

```bash
claude
```

Claude Code will read your project and you can ask it questions in plain English, like:
- "Explain what chat.service.js does"
- "Change the system prompt to be a fitness coach"
- "Add a new document for my restaurant menu"

> **Note:** Claude Code requires a Claude account. The free tier has usage limits, but it's more than enough for this workshop.

<br />

---

<br />

## Let's Build! (Step-by-Step Setup)

Now that your tools are installed, let's get the app running. Follow each step in order.

<br />

### Step 1: Open Your Terminal

The terminal is where you type commands to tell your computer what to do. It looks like a black box with text — and it's not as scary as it looks!

- **Mac:** Press `Cmd + Space` to open Spotlight, type **"Terminal"**, and hit Enter
- **Windows:** Press the **Windows key**, type **"cmd"**, and hit Enter to open Command Prompt

> **Tip:** You can also open a terminal directly inside VS Code! Go to the top menu: **Terminal > New Terminal**. This is the easiest way because it opens right in your editor.

<br />

### Step 2: Fork the Project (Make Your Own Copy)

"Forking" means creating your own personal copy of the project on GitHub. This way you can make all the changes you want without affecting the original.

1. Go to the project's GitHub page: **<repo-url-here>**
2. Click the **"Fork"** button in the top-right corner
3. GitHub will create a copy under your account — something like `github.com/YOUR-USERNAME/les-build-ai`

> **What's the difference between forking and cloning?**
> - **Fork** = makes a copy on GitHub (online) under YOUR account
> - **Clone** = downloads that copy to your computer (local)
>
> You fork first so you own the copy, then clone it to work on it locally.

<br />

### Step 3: Clone YOUR Fork to Your Computer

Now let's download your forked copy to your computer. In your terminal, type:

```bash
git clone git@github.com:YOUR-USERNAME/les-build-ai.git
```

> **Replace `YOUR-USERNAME` with your actual GitHub username!** You can also copy the exact URL from your fork's page — click the green **"Code"** button, select **"SSH"**, and copy the URL.

Then move into the project folder:

```bash
cd les-build-ai
```

> **Tip:** You can also open this folder in VS Code by typing `code .` (that's the word "code", a space, then a period). If that doesn't work on **Windows**, you may need to close and reopen your Command Prompt first so it picks up the new PATH settings from the VS Code install.

<br />

### Step 4: Install Dependencies

Dependencies are small helper tools that the project needs to work. Think of them like ingredients in a recipe.

Move into the backend folder and install them:

```bash
cd backend
npm install
```

You'll see a progress bar and some text — that's normal. Wait until it finishes.

<br />

### Step 5: Set Up Your API Key

Copy the example file to create your own secret config file:

- **Mac / Linux:**
  ```bash
  cp .env.example .env
  ```
- **Windows (Command Prompt):**
  ```bash
  copy .env.example .env
  ```

Now open the `.env` file in VS Code and replace `your-api-key-here` with the OpenAI API key you copied earlier:

```
OPENAI_API_KEY=sk-your-actual-key-goes-here
```

Save the file.

> **Why .env?** This file holds secrets (like your API key) and is automatically hidden from GitHub by the `.gitignore` file. Your key stays private.

<br />

### Step 6: Start the Server

This is the moment of truth! Type:

```bash
npm start
```

You should see:

```
Loaded document: Les Build AI — Community & Company Info (les-build-ai-community.txt)
Loaded document: AI Beginner Guide (ai-beginner-guide.txt)
Loaded document: AI Startup Builder Guide (ai-startup-builder-guide.txt)
Server running at http://localhost:3000
```

<br />

### Step 7: Open Your App!

Open your web browser (Chrome, Safari, Firefox — any one works) and go to:

**http://localhost:3000**

You should see your website! Click the chat icon in the bottom-right corner and start talking to your AI.

<br />

**You just built an AI-powered website. That's incredible.**

<br />

---

<br />

## Saving Your Work (Git Add, Commit, Push)

As you make changes to your project, you'll want to save your progress to GitHub. Think of it like hitting "Save" on a Google Doc — except with Git, you save in 3 small steps.

<br />

### The 3-Step Save: Add, Commit, Push

Every time you finish making changes and want to save them, run these 3 commands from the **root of your project folder** (the `les-build-ai` folder, not `backend`):

```bash
git add .
git commit -m "describe what you changed"
git push
```

Here's what each command does:

| Command | What It Does | Analogy |
|---|---|---|
| `git add .` | Selects all your changed files to be saved | Putting items in your shopping cart |
| `git commit -m "message"` | Packages those changes with a description | Checking out and getting a receipt |
| `git push` | Uploads everything to GitHub | Shipping the package to the cloud |

<br />

### When Should I Push?

Push your code whenever you've made a change that works and you want to keep. Good times to push:

- After you get the app running for the first time
- After you change the colors and like how they look
- After you update the system prompt and test it
- After you add a new RAG document
- Before you close your laptop for the day
- Before you try something risky (so you can go back if it breaks!)

> **Rule of thumb:** If you'd be sad to lose what you just did, push it!

<br />

### Writing Good Commit Messages

The text inside the quotes after `-m` is your **commit message** — a short note about what you changed. Keep it simple:

```bash
# Good commit messages:
git commit -m "changed accent color to blue"
git commit -m "updated system prompt to be a fitness coach"
git commit -m "added restaurant menu document for RAG"
git commit -m "customized hero section with my brand name"

# Not-so-great commit messages:
git commit -m "stuff"
git commit -m "changes"
git commit -m "asdfgh"
```

<br />

### Help! Something Went Wrong with Git

| Problem | Solution |
|---|---|
| "Permission denied (publickey)" | Your SSH key isn't set up. Go back to **Step 5: Connect Git to GitHub** |
| "fatal: not a git repository" | You're in the wrong folder. Run `cd les-build-ai` to get back to the project root |
| "nothing to commit, working tree clean" | You haven't made any changes since your last commit — this is fine! |
| "failed to push" | Someone else changed the repo. Run `git pull` first, then try `git push` again |

<br />

---

<br />

## Make It Yours (Customization Challenges)

Now the fun part — making it YOUR app. Look for `CHALLENGE:` comments throughout the code. Open the files in VS Code and start experimenting!

<br />

### Website Content & Branding
| What to Change | Where to Find It |
|---|---|
| Website name / logo | `frontend/public/index.html` — nav and footer |
| Hero headline & description | `frontend/public/index.html` — hero section |
| Feature cards | `frontend/public/index.html` — features section |
| CTA section text | `frontend/public/index.html` — cta section |
| Footer links & social media | `frontend/public/index.html` — footer |
| Browser tab title | `frontend/public/index.html` — `<title>` tag |

### Colors & Design
| What to Change | Where to Find It |
|---|---|
| All colors (accent, background, text) | `frontend/public/styles.css` — `:root` variables at the top |
| Font family | `frontend/public/styles.css` — `body` rule |
| Button shapes (sharp vs. rounded) | `frontend/public/styles.css` — `border-radius` values |
| Chat widget size | `frontend/public/styles.css` — `#chat-widget` width/height |
| Feature grid layout (2, 3, or 4 columns) | `frontend/public/styles.css` — `.features-grid` |

### AI Chatbot Experience
| What to Change | Where to Find It |
|---|---|
| AI personality & tone | `backend/src/chat/chat.service.js` — system prompt |
| AI model (speed vs. power) | `backend/src/chat/chat.service.js` — `model` field |
| Creativity level | `backend/src/chat/chat.service.js` — `temperature` |
| Response length | `backend/src/chat/chat.service.js` — `max_tokens` |
| Conversation memory length | `backend/src/chat/chat.service.js` — `maxHistoryLength` |
| AI's name in the chat header | `frontend/public/index.html` — chat header `<h3>` |
| AI's avatar icon | `frontend/public/index.html` — `.chat-avatar` |
| Welcome message | `frontend/public/index.html` — `.welcome-message` |
| Input placeholder text | `frontend/public/index.html` — `placeholder` attribute |
| "Thinking..." loading text | `frontend/public/index.html` — `showThinking` function |
| Error messages | `frontend/public/index.html` — `sendMessage` catch blocks |

### RAG Documents (Teach Your AI New Things)
| What to Change | Where to Find It |
|---|---|
| Edit existing documents | `backend/documents/*.txt` — just edit the text files |
| Add a new document | Create a `.txt` file in `backend/documents/` and register it in `chat.service.js` |
| Improve keyword matching | `backend/src/chat/chat.service.js` — `keywords` arrays |

<br />

---

<br />

## Project Structure

Here's what every file does — so you always know where to look:

```
les-build-ai/
├── backend/
│   ├── documents/                        Your AI's knowledge base (RAG)
│   │   ├── les-build-ai-community.txt      Company & community info
│   │   ├── ai-beginner-guide.txt            Guide for AI beginners
│   │   └── ai-startup-builder-guide.txt     Guide for startup builders
│   ├── src/
│   │   ├── chat/
│   │   │   ├── chat.controller.js          Handles requests & responses
│   │   │   ├── chat.service.js             THE BRAIN — AI logic, prompts, RAG
│   │   │   └── chat.routes.js              Registers the /chat API route
│   │   ├── config/
│   │   │   └── env.js                      Manages secret keys & settings
│   │   └── app.js                          Wires Express, middleware, routes
│   ├── server.js                           Entry point — starts the server
│   ├── package.json                        Project info & dependencies
│   └── .env.example                        Template for your secret keys
├── frontend/
│   └── public/
│       ├── index.html                      Your website & chat widget
│       └── styles.css                      All colors, fonts, and layout
├── .gitignore                              Keeps secrets out of GitHub
└── README.md                               You're reading it!
```

<br />

---

<br />

## Deploy to the Internet

Right now your app only runs on your computer (`localhost`). Let's put it on the internet so anyone can visit it!

<br />

### Recommended: Render.com (Free & Beginner-Friendly)

Render can deploy your full app — website AND chatbot — with zero code changes. It's the easiest option for this project.

**Sign up here:** https://render.com

#### How to Deploy:

**1. Push your latest code to GitHub**

Make sure all your changes are saved and pushed to your fork:

```bash
cd les-build-ai
git add .
git commit -m "ready to deploy"
git push
```

> If you followed the earlier steps, your fork is already connected. This just makes sure your latest changes are on GitHub.

**2. Create a new Web Service on Render**

- Go to https://dashboard.render.com
- Click **"New" > "Web Service"**
- Connect your GitHub account and select your `les-build-ai` repo
- Fill in the settings:

| Setting | Value |
|---|---|
| **Name** | `les-build-ai` (or whatever you want) |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |

**3. Add your environment variable**

- Scroll to **"Environment Variables"**
- Add a new variable:
  - **Key:** `OPENAI_API_KEY`
  - **Value:** your OpenAI API key

**4. Click "Deploy"**

Render will build and deploy your app. In a few minutes, you'll get a URL like `https://les-build-ai.onrender.com` — that's your live website!

> **Note:** Render's free tier sleeps after 15 minutes of no visitors. The first visit after sleeping takes ~30 seconds to wake up. This is totally normal for a free tier. If you want it always-on, their paid plan starts at $7/month.

<br />

### Other Deployment Options

| Platform | Best For | Notes |
|---|---|---|
| [Render](https://render.com) | This project (recommended) | Free tier, deploys Express as-is, no code changes |
| [Railway](https://railway.app) | Quick deploys | Usage-based pricing, very easy setup |
| [Fly.io](https://fly.io) | More control | Free tier available, slightly more setup |
| [Vercel](https://vercel.com) | Frontend-only sites | Would need to rewrite backend as serverless functions |
| [Netlify](https://netlify.com) | Frontend-only sites | Same — needs serverless rewrite for the backend |

> **For this project, stick with Render.** It's the only free platform that runs your Express server exactly as you built it — no rewrites, no extra steps.

<br />

---

<br />

<div align="center">

## You Did It!

You just built, customized, and deployed an AI-powered website.

That's not a small thing. Most people only *talk* about learning AI — you actually **built** something.

Keep experimenting. Keep building. And remember:

**Every expert was once a beginner.**

<br />

---

**Built with the [Les Build AI](https://letsbuildai.com) community**

</div>
