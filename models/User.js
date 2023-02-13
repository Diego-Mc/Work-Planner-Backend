import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    imgUrl: {
      type: String,
      default: '/default-user-img.png',
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)
export default User
