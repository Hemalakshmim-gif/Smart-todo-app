const users = require("../models/userModel");

// SIGNUP
const signup = (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { id: Date.now().toString(), username, password };
  users.push(newUser);

  res.json({ message: "Signup successful" });
};

// LOGIN
const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
};

module.exports = { signup, login };