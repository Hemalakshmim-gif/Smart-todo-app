const API = "https://smart-todo-backend-euwc.onrender.com/api/tasks";

let currentMood = "";

// 🔐 Check user (extra safety)
const user = localStorage.getItem("user");
if (!user) {
  window.location.href = "auth.html";
}

// 🚪 Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "auth.html";
}

// 😊 Set Mood
function setMood(mood) {
  currentMood = mood;

  document.getElementById("moodText").innerText =
    `💡 You are feeling ${mood}`;
}

// ➕ Add Task
async function addTask() {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const mood = document.getElementById("mood").value;

  if (!title) {
    alert("Enter task title");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, priority, mood })
  });

  document.getElementById("title").value = "";

  getTasks();
}

// 📋 Get All Tasks
async function getTasks() {
  const res = await fetch(API);
  const data = await res.json();

  displayTasks(data);
}

// 🎯 Smart Suggest
async function smartSuggest() {
  if (!currentMood) {
    alert("Select your mood first!");
    return;
  }

  const res = await fetch(`${API}/smart/${currentMood}`);
  const data = await res.json();

  document.getElementById("moodText").innerText =
    `💡 Based on your mood (${currentMood}), here are your best tasks`;

  displayTasks(data);
}

// ❌ Delete Task
async function deleteTask(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getTasks();
}

// ✔ Toggle Complete
async function toggleTask(id) {
  await fetch(`${API}/${id}`, {
    method: "PUT"
  });

  getTasks();
}

// 🎨 Display Tasks
function displayTasks(tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<p>No tasks found</p>";
    return;
  }

  tasks.forEach(task => {
    const div = document.createElement("div");

    div.className = `task ${task.priority.toLowerCase()} ${
      task.completed ? "completed" : ""
    }`;

    div.innerHTML = `
  <h3>${task.title}</h3>
  <p>Priority: ${task.priority}</p>
  <p>Mood: ${task.mood}</p>

  <button style="background:#48bb78;color:white;" onclick="toggleTask('${task.id}')">✔</button>
  <button style="background:#f56565;color:white;" onclick="deleteTask('${task.id}')">🗑</button>
`;

    list.appendChild(div);
  });
}

// 🚀 Load tasks on start
getTasks();