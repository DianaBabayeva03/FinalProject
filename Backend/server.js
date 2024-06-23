import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoute.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import noteRoutes from './routes/noteRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from 'express';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import todoRoutes from './routes/todoRoute.js';
// import connectDB from './config/db.js';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import noteRoutes from './routes/noteRoute.js';
// import multer from 'multer';
// import path from 'path';

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:3000', 
//     credentials: true,
// }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Dosya yükleme klasörü ve multer konfigürasyonu
// const uploadDir = './uploads/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// const PORT = process.env.PORT || 5000;

// connectDB();

// app.use('/api/users', userRoutes);
// app.use('/api/todos', todoRoutes);
// app.use('/api/notes', noteRoutes);

// // Yüklenmiş dosyaları statik olarak sunma
// app.use('/uploads', express.static(uploadDir));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export { upload };