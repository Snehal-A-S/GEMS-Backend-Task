const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const {
  registerValidation,
  loginValidation,
  updateUserValidation
} = require('../validators/userValidator');


// public endpoints
router.post('/users', registerValidation, validate, userController.createUser);
router.post('/login', loginValidation, validate, userController.loginUser);
//protected endpoint(using jwt )
router.get('/users',auth, userController.getAllUsers);
router.get('/users/:id',auth, userController.getUser);
router.put('/users/:id', updateUserValidation, validate, auth, userController.updateUser);



module.exports = router;
