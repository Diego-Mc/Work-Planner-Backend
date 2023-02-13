import express from 'express'
import {
  bookmarkPost,
  createPost,
  createReply,
  deletePost,
  getFeedPosts,
  getPost,
  getPostReplies,
  likePost,
} from '../controllers/posts.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', verifyToken, createPost)
router.post('/:postId', verifyToken, createReply)

/* READ */
router.get('/', getFeedPosts)
router.get('/:postId', getPost)
router.get('/:postId/replies', getPostReplies)

/* UPDATE */
router.patch('/:postId/like', verifyToken, likePost)
router.patch('/:postId/bookmark', verifyToken, bookmarkPost)

/* DELETE */
router.delete('/:postId', verifyToken, deletePost)

export default router
