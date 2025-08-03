const { body } = require('express-validator');

exports.createTaskValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isString(),
  body('dueDate').optional().isISO8601().toDate().withMessage('Due date must be a valid date')
];

exports.updateTaskValidation = [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().isString(),
  body('dueDate').optional().isISO8601().toDate().withMessage('Invalid due date'),
  body('status').optional().isIn(['pending', 'in progress', 'completed'])
    .withMessage('Invalid status value'),
];
