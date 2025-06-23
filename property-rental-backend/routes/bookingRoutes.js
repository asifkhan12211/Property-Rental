import express from 'express';
import { createBooking, getUserBookings, cancelBooking } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create new booking
router.post('/create', protect, createBooking);

// Get user's bookings
router.get('/my-bookings', protect, getUserBookings);

// Cancel booking using bookingId
router.put('/cancel/:bookingId', protect, cancelBooking);

export default router;
