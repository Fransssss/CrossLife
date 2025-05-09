// === Get DOM elements ===
const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const habitContainer = document.getElementById("habit-container");

// === LocalStorage Key ===
const STORAGE_KEY = "crosslife_habits";

// === Load habits from localStorage or use empty array ===
let habits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// === Save habits to localStorage ===
function saveHabits() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

// === Render all habits in the list ===
function renderHabits() {
    // Clear list
    habitContainer.innerHTML = '';

    if (habits.length === 0) {
        habitContainer.innerHTML = "<li>No habits yet. Add one above</li>";
        return;
    }

    // Loop and display each habit
    habits.forEach((habit, index) => {
        const li = document.createElement("li");
        li.textContent = habit.title;

        // === Add "Mark as Complete" button ===
        const button = document.createElement("button");
        button.style.background = "#007bff"; // soft blue
        button.textContent = "Mark as Complete";

        // Get today’s date in YYYY-MM-DD format
        const today = new Date().toISOString().split("T")[0];

        // Check if habit is already marked done today
        const alreadyDone = habit.datesCompleted.includes(today);

        if (alreadyDone) {
            button.disabled = true;
            button.style.background = "#4CAF50"
            button.style.cursor = "default";
            button.textContent = "Completed ✔";
        }

        // === Handle click on "Mark as Complete" ===
        button.addEventListener("click", () => {
            if (!alreadyDone) {
                habit.datesCompleted.push(today); // Add today’s date
                saveHabits();                     // Save to localStorage
                renderHabits();                   // Refresh UI
                // showQuote();                      // Optional motivational quote
            }
        });

        // Append button to list item
        li.appendChild(button);
        habitContainer.appendChild(li);
    });
}

// === Add new habit ===
function addHabit(title) {
    const newHabit = {
        id: Date.now(),           // unique habit id
        title: title.trim(),      // habit name
        datesCompleted: []        // empty list for completed dates
    };

    habits.push(newHabit);         // Add to list
    saveHabits();                  // Save all habits
    renderHabits();                // Update UI
}

// === Form submission ===
form.addEventListener("submit", function (e) {
    e.preventDefault();      // Prevent page reload
    const value = input.value;

    if (value.trim() !== '') {
        addHabit(value);
        input.value = '';    // Clear input field
    }
});

// === Optional: Show motivational quote ===
// const quotes = [
//     "You're doing great! Keep going.",
//     "Small steps make big progress.",
//     "Consistency is power.",
//     "Great job sticking to your goals!",
//     "You're building something amazing!"
// ];

// function showQuote() {
//     const quoteBox = document.getElementById("motivational-quote");
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteBox.textContent = quote;
//     setTimeout(() => {
//         quoteBox.textContent = "";
//     }, 4000);
// }

// === On page load ===
document.addEventListener("DOMContentLoaded", () => {
    console.log("CrossLife App Loaded");
    renderHabits();
});
