import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controller/orderControl'
import { protect } from '../middleware/authMiddlewate.js'

router.route('/').post(protect, addOrderItems)

export default router
