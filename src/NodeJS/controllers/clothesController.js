import { products } from '../../utils/mockdata.js';

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
    const cloth = products.find(p => p.id === parseInt(req.params.id));
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
  try {
    // Simulate creation with mock data
    const newCloth = { id: products.length + 1, ...req.body };
    res.status(201).json(newCloth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCloth = async (req, res) => {
  try {
    const cloth = products.find(p => p.id === parseInt(req.params.id));
    if (cloth) {
      Object.assign(cloth, req.body);
      res.json(cloth);
    } else {
      res.status(404).json({ message: 'Cloth not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCloth = async (req, res) => {
  try {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
      const deletedCloth = products.splice(index, 1)[0];
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
    // Simulate inserting many
    const newClothes = req.body.map((item, index) => ({ id: products.length + index + 1, ...item }));
    res.status(201).json(newClothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
