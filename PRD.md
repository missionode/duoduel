To build this project effectively, you need to provide a structured **Product Requirement Document (PRD)**. Below is a detailed, step-by-step breakdown of the game mechanics and technical logic that you can copy and give to an AI coder.

---

# Technical Brief: DuoDuel Icebreaker Game

## 1. Project Overview

* **Concept:** A multi-page digital card game for two players (His & Her).
* **Stack:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript.
* **Design Theme:** PlayStation symbols (△, ▢, ◯, ✕), light background, gender-split color accents (Sky Blue for him, Rose Pink for her).
* **Architecture:** Multi-page flow (each phase is a separate `.html` file) using `localStorage` to persist state between pages.

---

## 2. Page-by-Page Logic

### Phase 1: Splash & Landing (`index.html`)

1. **Splash:** On load, show a 2-second animation of Triangle, Square, Circle, and X merging into a "D" logo.
2. **Transition:** Auto-redirect or fade into the **Landing Page**.
3. **Landing:** Display the game description and rules (fetched from `assets/json/content.json`).
4. **CTA:** A "Begin Journey" button that links to `onboarding.html`.

### Phase 2: Onboarding (`onboarding.html`)

1. **Input Fields:** Two centered inputs: "His Name" and "Her Name".
2. **Logic:** * Save names to `localStorage.setItem('hisName', ...)` and `localStorage.setItem('herName', ...)`.
* The "Next" button remains disabled until both fields are filled.


3. **Next Page:** Links to `levels.html`.

### Phase 3: Level Selection (`levels.html`)

1. **Grid:** Show cards for levels: "Acquaintance", "Deep Talk", "Intimacy", and "Foreplay".
2. **Lock Logic:** Only "Acquaintance" is clickable. Others have a `backdrop-blur-md` and a lock icon.
3. **The Cheat Code:**
* A small `(?)` icon in the bottom corner.
* When clicked, show a hidden input field.
* If the user enters the secret code (e.g., `UNLOCK99`), set `localStorage.setItem('allUnlocked', 'true')` and remove the blur from all levels.


4. **Selection:** Clicking an unlocked level saves the selection and links to `toss.html`.

### Phase 4: The Toss (`toss.html`)

1. **Visual:** A central coin with Triangle on one side and X on the other.
2. **Logic:**
* User clicks "Toss".
* `Math.random()` decides the winner.
* Save `tossWinner` to `localStorage`.


3. **Transition:** Display "[Winner Name] Starts!" and a button to `table.html`.

### Phase 5: The Game Table (`table.html`)

1. **Layout:** A split-screen UI.
* **Left (Blue):** His deck.
* **Right (Pink):** Her deck.


2. **The Decks:** * Load 45 questions + 1 Joker for each gender from `cards.json`.
* Cards are displayed **upside down** (back design uses the 4 symbols).


3. **Interaction:**
* The player whose turn it is clicks a card.
* **CSS Animation:** The card flips 180 degrees to reveal the question.


4. **Buttons (Post-Flip):**
* **▢ Answered:** Increment `hisScore` or `herScore` in `localStorage`.
* **✕ Joker:** Skip question. Disable the Joker button for that player for the rest of the game.


5. **The Timer:** For higher levels, show a circular progress bar (◯) that gives the player 30-60 seconds to answer. If the time runs out, the card is discarded with 0 points.
6. **End Trigger:** When all 90 cards are flipped, redirect to `results.html`.

### Phase 6: Results & Settlement (`results.html`)

1. **Score Display:** Show final counts for Him and Her.
2. **Winner Logic:** `winner = scoreHis > scoreHer ? hisName : herName`.
3. **Settlement Formula:** * `difference = Math.abs(scoreHis - scoreHer)`
* `amountOwed = difference * 1`


4. **UI:** Display "Winner: [Name]" with confetti. Show a box: "The loser owes ₹[amountOwed]".

---

## 3. Data Structure (JSON)

### `cards.json`

```json
{
  "acquaintance": {
    "male": ["Question 1...", "Question 2..."],
    "female": ["Question 1...", "Question 2..."]
  },
  "foreplay": {
    "male": ["Timed Activity 1...", "Timed Activity 2..."],
    "female": ["Timed Activity 1...", "Timed Activity 2..."]
  }
}

```

---

## 4. Visual Design Requirements

* **Responsiveness:** On mobile, the split-screen stacks vertically. On desktop, it is side-by-side.
* **Typography:** Use Tailwind's `@tailwindcss/typography` for rules and questions to ensure clean reading.
* **Placeholders:** Use `https://picsum.photos/400/300` for level thumbnail images.

