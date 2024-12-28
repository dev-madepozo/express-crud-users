import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import userRoutes from './routes/user.route.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port:', PORT);
});
