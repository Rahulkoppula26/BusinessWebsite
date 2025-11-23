import Gift from '../models/giftsModel.js';

export const getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.json(gifts);
  } catch (error) {
    console.error('Error fetching gifts:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getGiftById = async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (gift) {
      res.json(gift);
    } else {
      res.status(404).json({ message: 'Gift not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createGift = async (req, res) => {
  const gift = new Gift(req.body);
  try {
    const newGift = await gift.save();
    res.status(201).json(newGift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateGift = async (req, res) => {
  try {
    const updatedGift = await Gift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedGift) {
      res.json(updatedGift);
    } else {
      res.status(404).json({ message: 'Gift not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteGift = async (req, res) => {
  try {
    const deletedGift = await Gift.findByIdAndDelete(req.params.id);
    if (deletedGift) {
      res.json(deletedGift);
    } else {
      res.status(404).json({ message: 'Gift not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createManyGifts = async (req, res) => {
  try {
    const gifts = await Gift.insertMany(req.body);
    res.status(201).json(gifts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
