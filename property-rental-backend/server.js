import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authUpdate from './routes/authupdate.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())

// Routes
app.use('/api', authRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/users', userRoutes);
app.use('/api/auth', authUpdate);

// Connect DB and Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
})
