import express from 'express'
import {
  createWorker,
  getWorkers,
  getWorker,
  saveWorker,
  deleteWorker,
  resetShiftTimes,
  setShiftTime,
} from '../controllers/workers.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', verifyToken, createWorker)

/* READ */
router.get('/', verifyToken, getWorkers)
router.get('/:workerId', getWorker)

/* UPDATE */
router.post('/:workerId/save', saveWorker)
router.patch('/reset-shift-times', verifyToken, resetShiftTimes)
router.patch('/:workerId/set-shift-time', verifyToken, setShiftTime)

/* DELETE */
router.delete('/:workerId', verifyToken, deleteWorker)

export default router
