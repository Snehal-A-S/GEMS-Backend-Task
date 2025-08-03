const Task = require('../models/Task');

// POST /tasks - Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, assignedUser } = req.body;

    const task = await Task.create({ title, description, dueDate, assignedUser:req.user.userId  });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Task creation failed', error: err.message });
  }
};

// GET /tasks - List All Tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedUser', 'name email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

// GET /tasks/:id - Get Task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('assignedUser', 'name email');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching task' });
  }
};

// PUT /tasks/:id - Update Task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, status },
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: 'Task update failed' });
  }
};

// DELETE /tasks/:id - Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Task deletion failed' });
  }
};
