import mongoose from 'mongoose';
import Cloth from './models/clothesModel.js';
import Accessory from './models/accessoriesModel.js';
import Gift from './models/giftsModel.js';
import { products } from '../utils/mockdata.js';
import { accessories } from '../utils/accessoriesMockdata.js';
import { gifts } from '../utils/giftsMockdata.js';

mongoose.connect('mongodb+srv://koppularahul:XddKHffu5EfOfjwl@cluster0.k8my7dr.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.log(err));

const seedAll = async () => {
  try {
    // Clear existing data
    await Cloth.deleteMany({});
    await Accessory.deleteMany({});
    await Gift.deleteMany({});
    console.log('Existing data cleared');

    // Insert clothes
    const clothesData = products.map(item => ({
      name: item.name,
      price: item.price,
      sizes: item.sizes,
      availableSizes: item.availableSizes,
      images: item.images,
      caption: item.caption,
      desc: item.desc,
      details: item.details,
      washCare: item.washCare,
      category: item.category
    }));
    const insertedClothes = await Cloth.insertMany(clothesData);
    console.log(`${insertedClothes.length} clothes inserted`);

    // Insert accessories
    const accessoriesData = accessories.map(item => ({
      name: item.name,
      price: item.price,
      images: item.images,
      caption: item.caption,
      desc: item.desc,
      details: item.details,
      washCare: item.washCare,
      category: item.category
    }));
    const insertedAccessories = await Accessory.insertMany(accessoriesData);
    console.log(`${insertedAccessories.length} accessories inserted`);

    // Insert gifts
    const giftsData = gifts.map(item => ({
      name: item.name,
      price: item.price,
      sizes: item.sizes,
      availableSizes: item.availableSizes,
      images: item.images,
      caption: item.caption,
      desc: item.desc,
      details: item.details,
      washCare: item.washCare,
      category: item.category
    }));
    const insertedGifts = await Gift.insertMany(giftsData);
    console.log(`${insertedGifts.length} gifts inserted`);

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAll();
