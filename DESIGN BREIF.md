This design brief outlines the visual and functional specifications for **DuoDuel**. We will use a "Playstation-Minimalist" aesthetic: clean white spaces, high-end typography, and the iconic controller symbols (△, ▢, ◯, ✕) as functional UI elements.

---

## 1. Splash Page (The Entrance)

* **Visuals:** A pure `bg-slate-50` screen. In the center, the four symbols (△, ▢, ◯, ✕) orbit each other and merge into a stylized "D" logo.
* **Experience:** 2-second CSS animation.
* **Transition:** Fade-out to Landing Page.

## 2. Landing & Rules (The Hook)

* **Header:** Text logo "DuoDuel" using the Triangle (△) as the 'A' or 'V' equivalent.
* **Body:** A centered card using `@tailwindcss/typography`.
* **Rules Section:** "The Terms of Entanglement" explaining the deck, scoring, and that **"The needy takes the difference"** (winner collects).


* **CTA Button:** A large "Start Onboarding" button with a Square (▢) icon prefix.

## 3. Onboarding (The Players)

* **Layout:** Two distinct vertical halves (or top/bottom on mobile).
* **Left/Top (His):** Sky-blue accent (`text-sky-600`). Label: "His Name".
* **Right/Bottom (Her):** Rose-pink accent (`text-rose-600`). Label: "Her Name".


* **Interaction:** A "Ready" button appears only when both names are typed.
* **Disclaimer:** A small footer note: *"This experience is designed for opposite-sex pairs."*

## 4. Level Selection (The Progress)

* **Grid:** A grid of cards representing levels: **Acquaintance, Deep Talk, Safe Spark, Intimacy, Foreplay**.
* **Visual State:** * **Level 1 (Acquaintance):** Full color, high contrast.
* **Levels 2-5:** `backdrop-blur-md` with a lock icon.


* **The Cheat Feature:** A tiny `(?)` icon at the bottom right of the screen.
* **Interaction:** Clicking it opens a minimalist prompt: *"Enter Access Key"*. Correct code (`ADEN`) unlocks the blur across all levels.



## 5. The Toss (The Decision)

* **Visuals:** A central 3D-rendered coin. One side has the Triangle (△), the other the Cross (✕).
* **Mechanism:** User clicks "Flip". The coin spins and lands on the winner.
* **Logic:** The winning player's name glows, and a "Start Drawing" button appears.

## 6. The Game Table (The Interaction)

This is the core "Engine" of your application.

* **Deck Layout:** * **Left Stack (His):** Face down.
* **Right Stack (Her):** Face down.


* **Card Design:** Back of cards features a repeating pattern of the controller symbols.
* **Interaction (The Flip):** 1.  User clicks their top card.
2.  **3D Animation:** The card performs a 180-degree Y-axis flip.
3.  **The Reveal:** The question is displayed in elegant serif font.
* **Buttons:** Below the revealed card:
* **Like (▢):** "Answered" (Adds +1 to score).
* **Boon (✨):** "Skip" (Skips question, hides the button for the rest of the game).


* **Timer (Intimacy & Foreplay Only):** A thin Circle (◯) progress bar around the card that depletes. If it hits zero, the card is "Missed."

## 7. Results Page (The Settlement)

* **Visuals:** Split screen showing "His Score" and "Her Score."
* **The Winner:** The name of the player with the higher score is highlighted with a gold Triangle (△) crown.
* **Settlement Box:** A centered card calculating the difference:
> 
> 
> **Total Debt: ₹[X]**
> *The needy takes the difference: Winner collects ₹[X].*


* **Action:** "Play Again" or "Next Level".

## 8. Preferences & Help (The Management)

* **Preferences:** Minimalist list for:
* Backup Data (Export JSON).
* Import Data (Load previous scores).
* "Forget Session" (Clear local storage).


* **Help Page:** An FAQ layout using the controller symbols as bullet points to explain features.

---

### Visual Design Checklist

* [ ] **Core Visuals:** Placeholders for level thumbnails using `https://picsum.photos/400/300`.
* [ ] **Layout:** Mobile-first (Cards are easy to tap with thumbs).
* [ ] **Feedback:** Haptic-like vibrations (if supported) or subtle "pop" animations on card clicks.
* [ ] **Typography:** All headings fetched from `content.json`.
