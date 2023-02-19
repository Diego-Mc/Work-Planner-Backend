import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const { username, email, password, imgUrl } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      imgUrl,
    })
    const savedUser = await newUser.save()

    _handleSuccess(savedUser, res)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findOne({ email })
    if (!user) {
      user = await User.findOne({ username: email })
      if (!user) return res.status(400).json({ msg: 'User does not exist.' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' })

    _handleSuccess(user, res)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie('jwt')
    res.status(200).json({ msg: 'logged out successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const fetchUser = async (req, res) => {
  try {
    const { loggedInUserId } = req.params
    const { userId } = req
    if (!userId) return res.status(404).json({ msg: 'no logged in user' })
    if (loggedInUserId && loggedInUserId !== userId) {
      res.clearCookie('jwt')
      return res.status(403).json({ msg: 'incorrect user' })
    }
    const user = await User.findOne({ _id: userId })
    res.status(200).json({ _id: user._id, username: user.username })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function _handleSuccess(user, res) {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  user.password = undefined
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })
  res
    .status(200)
    .json({ token, user: { _id: user._id, username: user.username } })
}
