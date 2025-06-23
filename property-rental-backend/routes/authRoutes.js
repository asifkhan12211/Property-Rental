import express from 'express'
import {
  register,
  login,
  forgotPassword,
  verifyOTP,
  resetPassword,
  getUserProfile
} from '../controllers/authController.js'

const router = express.Router()

// Auth routes
router.post('/register', register)
router.post('/login', login)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp', verifyOTP)
router.post('/reset-password', resetPassword)
router.get('/user-profile', getUserProfile)

export default router
