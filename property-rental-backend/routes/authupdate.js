import express from 'express';
import { register, login, forgotPassword, verifyOTP, resetPassword, getProfile, updateProfile, updatePassword } from '../controllers/authController.js';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);

// Profile routes (protected)
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);
router.put('/profile/password', verifyToken, updatePassword);

export default router;
