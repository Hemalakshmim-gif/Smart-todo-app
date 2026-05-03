const API = "https://smart-todo-backend-euwc.onrender.com/api/auth";

// Toggle
function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("signupBox").style.display = "none";
}

function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

// Signup
async function signup() {
  const username = document.getElementById("signupUser").value;
  const password = document.getElementById("signupPass").value;

  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
}

// Login
async function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (res.status === 200) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "index.html";
  } else {
    alert(data.message);
  }
}