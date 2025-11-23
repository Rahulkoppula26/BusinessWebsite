import express from 'express';
import { getAllAccessories, getAccessoryById, createAccessory, updateAccessory, deleteAccessory, createManyAccessories } from '../controllers/accessoriesController.js';

const router = express.Router();

// Router-level middleware for logging
router.use((req, res, next) => {
  console.log(`Accessories Router: ${req.method} ${req.path}`);
  next();
});

// CRUD routes for accessories
router.get('/', getAllAccessories);
router.get('/:id', getAccessoryById);
router.post('/', createAccessory);
router.post('/bulk', createManyAccessories);
router.put('/:id', updateAccessory);
router.delete('/:id', deleteAccessory);

export default router;
