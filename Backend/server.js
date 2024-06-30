import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoute.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import noteRoutes from './routes/noteRoute.js';
import newsRoutes from './routes/newsRoute.js'; // newsRoutes'ü import et

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

connectDB(); // MongoDB'ye bağlantı sağladığınızı varsayalım

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/news', newsRoutes); // '/api/news' yolu ile newsRoutes'i kullan

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
