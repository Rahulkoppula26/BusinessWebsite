import mongoose from 'mongoose';

const accessorySchema = new mongoose.Schema({
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
    default: 'Accessories'
  }
}, {
  timestamps: true
});

const Accessory = mongoose.model('Accessory', accessorySchema);

export default Accessory;
