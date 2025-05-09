// Get DOM elements
const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const habitContainer = document.getElementById("habit-container");

// LocalStorage Key
const STORAGE_KEY = "crosslife_habits";

// Load habits from localStorage or use empty  array 
let habits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// === Render all habits in the list ===
function renderHabits() {
    // clear list
    habitContainer.innerHTML = '';

    if (habits.length === 0) {
        habitContainer.innerHTML = "<li>No habits yet. Add one above</li>";
        return;
    }

    // Loop and display each habit 
    habits.forEach( (habit, index) => {
        const li = document.createElement("li");
        li.textContent = habit.title;

        habitContainer.appendChild(li);
    })
}

// === Add habits ===
function addHabit(title){

    const newHabit = {
        id: Date.now(),                                     // unique habit id
        title: title.trim(),                                // habit name
        datesCompleted: []                                  // empty completion name
        };

    habits.push(newHabit);                                   // add to list 
    localStorage.setItem(STORAGE_KEY,JSON.stringify(habits)) // save all habits 
    renderHabits();                                          // update ui
}

// === Form submission ===
form.addEventListener("submit", function (e){
    e.preventDefault();      // stop form from reloading the page

    const value = input.value;

    if(value.trim() !== ''){
        addHabit(value);
        input.value = '';    // reset field
    }
})

document.addEventListener("DOMContentLoaded",() => {
    console.log("CrossLife App Loaded");
    renderHabits();
})