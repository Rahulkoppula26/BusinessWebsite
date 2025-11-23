import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import clothesRouter from './routes/clothesRoutes.js';
import accessoriesRouter from './routes/accessoriesRoutes.js';
import giftsRouter from './routes/giftsRoutes.js';

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://koppularahul:XddKHffu5EfOfjwl@cluster0.k8my7dr.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Application-level middlewares
app.use(cors());
app.use(express.json());

// Use routers
app.use('/api/clothes', clothesRouter);
app.use('/api/accessories', accessoriesRouter);
app.use('/api/gifts', giftsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
