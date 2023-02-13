import express from 'express'
import {
  getUser,
  getUserId,
  getLoggedInUser,
  getUserFollowings,
  getUserFollowers,
  toggleFollow,
  getUsers,
  getRandomToFollow,
  uploadProfileImg,
  uploadCoverImg,
  updateDescription,
} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* READ */
router.get('/', getUsers) //TODO: add filtering
router.get('/logged-in', verifyToken, getLoggedInUser)
router.get('/random-to-follow', verifyToken, getRandomToFollow)
router.get('/:userId', getUser)
router.get('/get-id/:username', getUserId)
router.get('/:userId/followers', getUserFollowers)
router.get('/:userId/followings', getUserFollowings)

/* UPDATE */
//TODO: not only verify token, but also verify token===user
router.patch('/:userToFollowId/follow', verifyToken, toggleFollow)
router.patch('/upload/profile-img', verifyToken, uploadProfileImg)
router.patch('/upload/cover-img', verifyToken, uploadCoverImg)
router.patch('/update/description', verifyToken, updateDescription)

export default router
