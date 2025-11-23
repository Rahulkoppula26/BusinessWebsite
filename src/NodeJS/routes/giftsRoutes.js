import express from 'express';
import { getAllGifts, getGiftById, createGift, updateGift, deleteGift, createManyGifts } from '../controllers/giftsController.js';

const router = express.Router();

// Router-level middleware for logging
router.use((req, res, next) => {
  console.log(`Gifts Router: ${req.method} ${req.path}`);
  next();
});

// CRUD routes for gifts
router.get('/', getAllGifts);
router.get('/:id', getGiftById);
router.post('/', createGift);
router.post('/bulk', createManyGifts);
router.put('/:id', updateGift);
router.delete('/:id', deleteGift);

export default router;
