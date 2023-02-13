import express from 'express'
import {
  createSchedule,
  getSchedules,
  getSchedule,
  saveSchedule,
  deleteSchedule,
} from '../controllers/schedules.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', createSchedule)

/* READ */
router.get('/', getSchedules)
router.get('/:scheduleId', getSchedule)

/* UPDATE */
router.post('/save', saveSchedule)

/* DELETE */
router.delete('/:scheduleId', verifyToken, deleteSchedule)

export default router
