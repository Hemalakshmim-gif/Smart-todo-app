const API = "https://smart-todo-backend-euwc.onrender.com/api/tasks";

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "auth.html";
}

let currentMood = "";

// Set mood
function setMood(mood) {
  currentMood = mood;
  document.getElementById("moodText").innerText =
    `You are feeling ${mood}`;
}

// Add task
async function addTask() {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const mood = document.getElementById("mood").value;

  await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title, priority, mood })
  });

  getTasks();
}

// Get tasks
async function getTasks() {
  const res = await fetch(API);
  const data = await res.json();
  displayTasks(data);
}

// Smart filter
async function smartSuggest() {
  const res = await fetch(`${API}/smart/${currentMood}`);
  const data = await res.json();
  displayTasks(data);
}

// Delete
async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  getTasks();
}

// Toggle
async function toggleTask(id) {
  await fetch(`${API}/${id}`, { method: "PUT" });
  getTasks();
}

// Display
function displayTasks(tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.priority} | ${task.mood}</p>
      <button onclick="toggleTask('${task.id}')">✔</button>
      <button onclick="deleteTask('${task.id}')">🗑</button>
    `;

    list.appendChild(div);
  });
}

// Load
getTasks();