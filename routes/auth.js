import express from 'express'
import { fetchUser, login, logout, register } from '../controllers/auth.js'

const router = express.Router()

import { verifyToken } from '../middleware/auth.js'

router.get('/fetch-user/:loggedInUserId', verifyToken, fetchUser)
router.get('/fetch-user/', verifyToken, fetchUser)

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

export default router
