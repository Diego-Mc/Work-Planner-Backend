import express from 'express'
import {
  createSchedule,
  getSchedules,
  getSchedule,
  saveSchedule,
  deleteSchedule,
  moveWorkers,
  toggleLock,
  placeWorker,
  setDate,
  changeMachineWorkersAmount,
} from '../controllers/schedules.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', verifyToken, createSchedule)

/* READ */
router.get('/', verifyToken, getSchedules)
router.get('/:scheduleId', getSchedule)

/* UPDATE */
router.post('/save', saveSchedule)
router.patch('/:scheduleId/move-workers', moveWorkers)
router.patch('/:scheduleId/place-worker', placeWorker)
router.patch('/:scheduleId/toggle-lock', toggleLock)
router.patch('/:scheduleId/workers-amount', changeMachineWorkersAmount)
router.patch('/:scheduleId/set-date', setDate)

/* DELETE */
router.delete('/:scheduleId', verifyToken, deleteSchedule)

export default router
