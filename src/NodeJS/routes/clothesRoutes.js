import express from 'express';
import { getAllClothes, getClothById, createCloth, updateCloth, deleteCloth, createManyClothes } from '../controllers/clothesController.js';

const router = express.Router();

// Router-level middleware for logging
router.use((req, res, next) => {
  console.log(`Clothes Router: ${req.method} ${req.path}`);
  next();
});

// CRUD routes for clothes
router.get('/', getAllClothes);
router.get('/:id', getClothById);
router.post('/', createCloth);
router.post('/many', createManyClothes); // Added route for creating many clothes
router.put('/:id', updateCloth);
router.delete('/:id', deleteCloth);

export default router;
