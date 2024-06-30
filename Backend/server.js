import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoute.js';
import newsRoutes from './routes/newsRoute.js'; 
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

connectDB(); 


app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/news', newsRoutes); 

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
