import News from '../models/newsModel.js';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

// Bütün xəbərləri göstərmək
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Yeni xəbər əlavə etmək
const createNews = async (req, res) => {
  const { title, content, author, date } = req.body;
  let image = null;

  if (req.file) {
    try {
      const imageBuffer = await fs.readFile(req.file.path);
      image = `data:${req.file.mimetype};base64,${imageBuffer.toString('base64')}`;
      await fs.unlink(req.file.path); // Dosyayı yükleme dizininden sil
    } catch (error) {
      console.error('Dosya okuma hatası:', error);
      res.status(500).json({ message: 'Dosya okuma hatası' });
      return;
    }
  }

  const news = new News({
    title,
    content,
    author,
    image,
    date
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xəbəri dəyişmək
const updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, date } = req.body;
  let image = null;

  if (req.file) {
    try {
      const imageBuffer = await fs.readFile(req.file.path);
      image = `data:${req.file.mimetype};base64,${imageBuffer.toString('base64')}`;
      await fs.unlink(req.file.path); // Dosyayı yükleme dizininden sil
    } catch (error) {
      console.error('Dosya okuma hatası:', error);
      res.status(500).json({ message: 'Dosya okuma hatası' });
      return;
    }
  }

  try {
    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({ message: 'Xəbər tapılmadı' });
    }

    news.title = title || news.title;
    news.content = content || news.content;
    news.author = author || news.author;
    news.date = date || news.date;
    news.image = image || news.image;

    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xəbəri silmək
const deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findByIdAndDelete(id);
    res.json({ message: 'Xəbər uğurla silindi' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  getAllNews,
  createNews,
  updateNews,
  deleteNews,
};
