const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { createTaskValidation, updateTaskValidation } = require('../validators/taskValidator');
const validate = require('../middleware/validate');

// All routes below require login
router.post('/tasks', auth, createTaskValidation, validate, taskController.createTask);
router.get('/tasks', auth, taskController.getAllTasks);
router.get('/tasks/:id', auth, taskController.getTaskById);
router.put('/tasks/:id', auth, updateTaskValidation, validate, taskController.updateTask);

router.delete('/tasks/:id', auth, taskController.deleteTask);

module.exports = router;
