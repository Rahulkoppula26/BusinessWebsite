import mongoose from 'mongoose';

const giftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  sizes: [{
    type: String
  }],
  availableSizes: [{
    type: String
  }],
  images: [{
    type: String,
    required: true
  }],
  caption: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  details: {
    type: String,
    required: true
  },
  washCare: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    default: 'Gifts'
  }
}, {
  timestamps: true
});

const Gift = mongoose.model('Gift', giftSchema);

export default Gift;
