import mongoose from 'mongoose';

const clothSchema = new mongoose.Schema({
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
    type: String,
    required: true
  }],
  availableSizes: [{
    type: String,
    required: true
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
    default: 'Cloths'
  }
}, {
  timestamps: true
});

const Cloth = mongoose.model('Cloth', clothSchema);

export default Cloth;
