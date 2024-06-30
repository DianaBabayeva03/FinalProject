import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAllNews,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';

const router = express.Router();

// Şəkil üçün multer konfigurasiyası
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Bütün xəbərləri göstərmək üçün endpoint
router.get('/', getAllNews);

// Yeni xəbər əlavə etmək üçün endpoint (şəkil yükləməsi ilə birlikdə)
router.post('/', upload.single('image'), createNews);

// Xəbəri dəyişmək üçün endpoint
router.put('/:id', updateNews);

// Xəbəri silmək üçün endpoint
router.delete('/:id', deleteNews);

export default router;
