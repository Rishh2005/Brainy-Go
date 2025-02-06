// DOM Elements
const themeSelect = document.getElementById('themeSelect');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');
const quoteElement = document.getElementById('quote');
// Themes
themeSelect.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSelect.value);
});

// Motivational Quotes
const quotes = [
    "Hard work beats talent when talent doesn't work hard.",
    "Believe in yourself, and you're halfway there.",
    "Dream big, start small, but most importantly, start.",
    "The future depends on what you do today.",
    "Stay focused and never give up."
];
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}, 10000);

// Task Management
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const priority = document.getElementById('taskPriority').value;
    const deadline = document.getElementById('taskDeadline').value;

    tasks.push({ name: taskName, priority, deadline, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <span>${task.name} [${task.priority}]</span>
            <button onclick="completeTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">❌</button>
        `;
        task.completed
            ? completedTaskList.appendChild(taskElement)
            : taskList.appendChild(taskElement);
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}
// DOM Elements

// Gen Z Motivational Quotes
const genZQuotes = [
    "No cap, you're killing it. 💯",
    "Keep the vibes high, the grind higher. ✨",
    "Be the main character in your story. 🌟",
    "Slay your goals, one task at a time. 💅",
    "Lowkey proud of your hustle. 🙌",
    "Stay glowing, stay growing. 🌈",
    "Manifest that checklist, fam. 🪄",
    "Chill, but don't quit. 🏖️",
    "Extra effort = Extra success. 🚀",
    "You're not just existing, you're thriving. 🌱"
];

// Randomly cycle quotes
function updateGenZQuote() {
    const randomIndex = Math.floor(Math.random() * genZQuotes.length);
    quoteElement.textContent = genZQuotes[randomIndex];
}

// Event: Theme Change
themeSelect.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSelect.value);
});

// Auto-update quotes every 5 seconds
setInterval(updateGenZQuote, 5000);
updateGenZQuote();
