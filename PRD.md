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



1. **Grid:** Show cards for levels: "Acquaintance", "Deep Talk", "Safe Spark", "Intimacy", and "Foreplay".

2. **Lock Logic:** Only "Acquaintance" is clickable initially. Others unlock sequentially.

3. **The Cheat Code:**

* A small `(?)` icon in the bottom corner.

* When clicked, show a hidden input field.

* If the user enters the secret code (`ADEN`), set `localStorage.setItem('allUnlocked', 'true')` and remove locks.



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





2. **The Decks:** * Load questions from `cards.json`.

* Cards are displayed **upside down**.





3. **Interaction:**

* The player whose turn it is clicks a card.

* **CSS Animation:** The card flips 180 degrees to reveal the question.





4. **Buttons (Post-Flip):**

* **▢ Like:** Increment `hisScore` or `herScore` in `localStorage`.

* **✕ Dislike:** Decrement `hisScore` or `herScore`.

* **✨ Boon:** Skip question (One use per game).





5. **The Timer:** Only for "Intimacy" and "Foreplay" levels. Circular progress bar.

6. **End Trigger:** When all cards are flipped, redirect to `results.html`.



### Phase 6: Results & Settlement (`results.html`)



1. **Score Display:** Show final counts for Him and Her.

2. **Winner Logic:** `winner = scoreHis > scoreHer ? hisName : herName`.

3. **Settlement Formula:** * `difference = Math.abs(scoreHis - scoreHer)`

* "The needy takes the difference." The winner collects ₹[difference].





4. **UI:** Display "Winner: [Name]" with confetti. Show a box: "The needy takes the difference: [Winner] collects ₹[difference]".



---



## 3. Data Structure (JSON)



### `cards.json`



```json

{

  "acquaintance": { "male": [], "female": [] },

  "deepTalk": { "male": [], "female": [] },

  "safeSpark": { "male": [], "female": [] },

  "intimacy": { "male": [], "female": [] },

  "foreplay": { "male": [], "female": [] }

}

```

---

## 4. Visual Design Requirements

* **Responsiveness:** On mobile, the split-screen stacks vertically. On desktop, it is side-by-side.
* **Typography:** Use Tailwind's `@tailwindcss/typography` for rules and questions to ensure clean reading.
* **Placeholders:** Use `https://picsum.photos/400/300` for level thumbnail images.

