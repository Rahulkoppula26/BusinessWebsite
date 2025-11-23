import Accessory from '../models/accessoriesModel.js';

export const getAllAccessories = async (req, res) => {
  try {
    const accessories = await Accessory.find();
    res.json(accessories);
  } catch (error) {
    console.error('Error fetching accessories:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getAccessoryById = async (req, res) => {
  try {
    const accessory = await Accessory.findById(req.params.id);
    if (accessory) {
      res.json(accessory);
    } else {
      res.status(404).json({ message: 'Accessory not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAccessory = async (req, res) => {
  const accessory = new Accessory(req.body);
  try {
    const newAccessory = await accessory.save();
    res.status(201).json(newAccessory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateAccessory = async (req, res) => {
  try {
    const updatedAccessory = await Accessory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedAccessory) {
      res.json(updatedAccessory);
    } else {
      res.status(404).json({ message: 'Accessory not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAccessory = async (req, res) => {
  try {
    const deletedAccessory = await Accessory.findByIdAndDelete(req.params.id);
    if (deletedAccessory) {
      res.json(deletedAccessory);
    } else {
      res.status(404).json({ message: 'Accessory not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createManyAccessories = async (req, res) => {
  try {
    const accessories = await Accessory.insertMany(req.body);
    res.status(201).json(accessories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
