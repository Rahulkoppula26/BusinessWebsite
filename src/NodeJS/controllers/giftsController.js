import { gifts } from '../../utils/giftsMockdata.js';

export const getAllGifts = async (req, res) => {
  try {
    res.json(gifts);
  } catch (error) {
    console.error('Error fetching gifts:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getGiftById = async (req, res) => {
  try {
    const gift = gifts.find(g => g.id === parseInt(req.params.id));
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
  try {
    // Simulate creation with mock data
    const newGift = { id: gifts.length + 201, ...req.body };
    res.status(201).json(newGift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateGift = async (req, res) => {
  try {
    const gift = gifts.find(g => g.id === parseInt(req.params.id));
    if (gift) {
      Object.assign(gift, req.body);
      res.json(gift);
    } else {
      res.status(404).json({ message: 'Gift not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteGift = async (req, res) => {
  try {
    const index = gifts.findIndex(g => g.id === parseInt(req.params.id));
    if (index !== -1) {
      const deletedGift = gifts.splice(index, 1)[0];
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
    // Simulate inserting many
    const newGifts = req.body.map((item, index) => ({ id: gifts.length + index + 201, ...item }));
    res.status(201).json(newGifts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
