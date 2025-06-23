import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  gender: String,
  dob: String,
  address: String,
  resetPasswordOTP: String,
  resetPasswordExpires: Date
})

export default mongoose.model('User', userSchema)
