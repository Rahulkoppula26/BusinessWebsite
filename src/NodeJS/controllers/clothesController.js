import { products } from '../../utils/mockdata.js';
import Cloth from '../models/clothesModel.js';

export const getAllClothes = async (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.error('Error fetching clothes:', error);
    res.json([]); // Return empty array on error
  }
};

export const getClothById = async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id);
    if (cloth) {
      res.json(cloth);
    } else {
      res.status(404).json({ message: 'Cloth not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCloth = async (req, res) => {
  const cloth = new Cloth(req.body);
  try {
    const newCloth = await cloth.save();
    res.status(201).json(newCloth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCloth = async (req, res) => {
  try {
    const updatedCloth = await Cloth.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedCloth) {
      res.json(updatedCloth);
    } else {
      res.status(404).json({ message: 'Cloth not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCloth = async (req, res) => {
  try {
    const deletedCloth = await Cloth.findByIdAndDelete(req.params.id);
    if (deletedCloth) {
      res.json(deletedCloth);
    } else {
      res.status(404).json({ message: 'Cloth not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createManyClothes = async (req, res) => {
  try {
    const clothes = await Cloth.insertMany(req.body);
    res.status(201).json(clothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
