import express from 'express';
import mongoose from'mongoose';
import cors from'cors';
import productRoutes from './routes/productRoutes.js';
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Welcome to Listing Product Backend")
})

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
