import express from 'express'
import {
  createMachine,
  getMachines,
  getMachine,
  saveMachine,
  deleteMachine,
} from '../controllers/machines.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* CREATE */
router.post('/', verifyToken, createMachine)

/* READ */
router.get('/', verifyToken, getMachines)
router.get('/:machineId', getMachine)

/* UPDATE */
router.post('/save', saveMachine)

/* DELETE */
router.delete('/:machineId', verifyToken, deleteMachine)

export default router
