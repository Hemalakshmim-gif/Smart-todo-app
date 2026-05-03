let tasks = []; // temporary storage

// GET all tasks
const getTasks = (req, res) => {
  res.json(tasks);
};

// ADD task
const addTask = (req, res) => {
  const { title, priority, mood } = req.body;

  const newTask = {
    id: Date.now().toString(),
    title,
    priority,
    mood,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);
  res.json(newTask);
};

// DELETE task
const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: "Task deleted" });
};

// UPDATE task (toggle complete)
const updateTask = (req, res) => {
  const { id } = req.params;

  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  res.json({ message: "Task updated" });
};

// SMART FILTER
const smartFilterTasks = (req, res) => {
  const { mood } = req.params;

  let filtered = [];

  if (mood === "Tired") {
    filtered = tasks.filter(task => task.priority === "Low");
  } else if (mood === "Stressed") {
    filtered = tasks.filter(
      task => task.priority === "Low" || task.priority === "Medium"
    );
  } else if (mood === "Happy") {
    filtered = tasks.sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  res.json(filtered);
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  smartFilterTasks
};