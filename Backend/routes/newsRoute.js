import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
  getAllNews,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../../public/uploads');
    // Klasörün var olup olmadığını kontrol et
    if (!fs.existsSync(uploadPath)) {
      // Klasörü oluştur
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

router.get('/', getAllNews);
router.post('/', upload.single('image'), createNews);
router.put('/:id', upload.single('image'), updateNews);
router.delete('/:id', deleteNews);

export default router;
