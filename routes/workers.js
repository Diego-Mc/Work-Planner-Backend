import express from 'express'
import {
  createWorker,
  getWorkers,
  getWorker,
  saveWorker,
  deleteWorker,
} from '../controllers/workers.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', createWorker)

/* READ */
router.get('/', getWorkers)
router.get('/:workerId', getWorker)

/* UPDATE */
router.post('/save', saveWorker)

/* DELETE */
router.delete('/:workerId', verifyToken, deleteWorker)

export default router
