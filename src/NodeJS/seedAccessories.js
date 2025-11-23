import mongoose from 'mongoose';
import Accessory from './models/accessoriesModel.js';
import { accessories } from '../utils/accessoriesMockdata.js';

mongoose.connect('mongodb+srv://koppularahul:XddKHffu5EfOfjwl@cluster0.k8my7dr.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.log(err));

const seedAccessories = async () => {
  try {
    // Clear existing data
    await Accessory.deleteMany({});
    console.log('Existing accessories cleared');

    // Insert mock data
    const insertedAccessories = await Accessory.insertMany(accessories.map(item => ({
      name: item.name,
      price: item.price,
      images: item.images,
      caption: item.caption,
      desc: item.desc,
      details: item.details,
      washCare: item.washCare,
      category: item.category
    })));
    console.log(`${insertedAccessories.length} accessories inserted`);
  } catch (error) {
    console.error('Error seeding accessories:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAccessories();
