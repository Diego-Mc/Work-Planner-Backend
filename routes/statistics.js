import express from 'express'
import { getStatistics } from '../controllers/statistics.js'

const router = express.Router()

import { verifyToken } from '../middleware/auth.js'

router.get('/', verifyToken, getStatistics)

export default router
