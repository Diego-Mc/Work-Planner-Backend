import express from 'express'
import { getTagPosts, getTrends } from '../controllers/tags.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */

/* READ */
router.get('/', getTrends)
router.get('/:tagName', getTagPosts)

/* UPDATE */

export default router
