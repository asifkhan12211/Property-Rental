import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', verifyToken, getUserProfile);

export default router;
