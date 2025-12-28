# DuoDuel 🃏❤️

**DuoDuel** is a psychological card game designed for couples to deepen their connection through playful questions, deep conversations, and intimate challenges. It is a web-based application built with a "PlayStation-Minimalist" aesthetic, fully offline-capable, and installable as a Progressive Web App (PWA).

## 🎮 Game Concept

The game guides couples through **4 Stages of Escalation**, inspired by "The Charmer's Strategy":

1.  **Acquaintance:** Playful ice-breakers to lower guards.
2.  **Deep Talk:** Vulnerable questions to build emotional intimacy.
3.  **Intimacy:** Bold prompts to shift focus to the "here and now."
4.  **Foreplay:** High-intensity sensory dares and physical challenges.

### Rules of Engagement
*   **Like (▢):** You enjoyed the answer. (+1 Point)
*   **Dislike (✕):** The answer didn't land. (-1 Point)
*   **Joker (✨):** Skip a question without penalty (One use per game).
*   **Settlement:** At the end, the loser pays the score difference to the winner (monetary or favors).

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, Vanilla JavaScript.
*   **Styling:** Tailwind CSS (v2.2.19, static build).
*   **Data:** JSON (`assets/json/cards.json` for content).
*   **PWA:** Service Worker (`sw.js`) and Web Manifest (`manifest.json`) for offline support and installation.
*   **No Build Step:** Runs directly in the browser.

---

## 📂 Project Structure

```text
/duoduel
├── index.html          # Splash Screen & Landing Page (Entry Point)
├── onboarding.html     # Player Name Setup
├── levels.html         # Level Selection & Unlock System
├── toss.html           # 3D Coin Flip for Turn Decision
├── table.html          # Main Game Engine (Cards, Timer, Scoring)
├── results.html        # Score Summary & Settlement
├── sw.js               # Service Worker for Offline Mode
├── manifest.json       # PWA Configuration
└── assets/
    ├── css/            # Tailwind & Custom Styles
    ├── js/             # Shared Logic
    ├── json/           # Game Content (Questions, Rules)
    └── img/            # Images & Icons
```

---

## 🚀 How to Run

### Option 1: VS Code (Recommended)
1.  Open the folder in **VS Code**.
2.  Install the **"Live Server"** extension.
3.  Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python
If you have Python installed, run a simple HTTP server in the project root:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Double Click
Since there are no build steps, you can simply double-click `index.html` to open it in your browser (Note: PWA features might be restricted by some browsers when running from `file://`).

---

## 📱 Installing as a App (PWA)

DuoDuel is a Progressive Web App. You can install it on your device for a native-like experience (fullscreen, offline access).

*   **Desktop (Chrome/Edge):** Click the "Install App" button on the landing page or the install icon in the address bar.
*   **Android (Chrome):** Tap the "Install App" button or "Add to Home Screen" from the menu.
*   **iOS (Safari):** Tap the **Share** button → **Add to Home Screen**.

---

## ✏️ Customization

### Editing Questions
All game content is stored in `assets/json/cards.json`. You can add, remove, or modify questions and their timers there.
```json
{
  "text": "Your custom question here?",
  "timer": 60 // Optional: Timer in seconds
}
```

---

## 📄 License

This project is for personal use and entertainment.
