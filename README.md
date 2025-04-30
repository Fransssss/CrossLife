# CrossLife – Web-Based Habit Tracker

## Why This App?

CrossLife is a lightweight, browser-based habit tracker built with simplicity and accessibility in mind. It helps users build better daily routines by allowing them to add habits, mark them as completed, and visualize their progress—all without needing an account or internet connection.

This version of CrossLife is fully frontend and stores data locally in the user's browser using `localStorage`. It works offline, loads instantly, and respects user privacy.

## Tech Stack

| Area           | Technology Used       |
|----------------|------------------------|
| Frontend       | HTML, CSS, JavaScript  |
| Data Storage   | Browser `localStorage` |
| Deployment     | GitHub Pages / Netlify |
| Frameworks     | None (Vanilla only)    |

## How It Works

1. **Add Habit**  
   Users can create a new habit by entering a name in a simple input form.

2. **Display Habits**  
   All added habits are displayed in a list with buttons to mark each habit as completed for the current day.

3. **Track Daily Completion**  
   When a habit is marked as completed, today's date is saved under that habit. This data persists across sessions.

4. **Local Data Storage**  
   All habits and progress are saved in the browser's `localStorage`, requiring no backend or external database.

5. **Motivational Messages**  
   After completing a habit, a random motivational message is shown to encourage consistency.

## Possible Future Improvements

- Add visual calendar or streak tracker for each habit
- Dark mode toggle for accessibility and user comfort
- Browser notification reminders
- Data export and import (e.g., JSON backup)
- Optional Firebase integration for cloud sync and user login
- PWA (Progressive Web App) support for installable experience
- Voice input or keyboard shortcuts for quicker interaction

---