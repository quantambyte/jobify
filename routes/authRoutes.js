import express from 'express';
import {
  register,
  login,
  updateUser,
} from '../controllers/authController.js';

// router
const router = express.Router();

// routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(updateUser);

export default router;
