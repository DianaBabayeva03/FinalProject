import News from '../models/newsModel.js';
import path from 'path';
import { promises as fs } from 'fs';
// import abc from '../../../dərs/'

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
  const { title, content, author } = req.body;
  const { image } = req.file; // Şəkil yüklənməsi üçün

  const news = new News({
    title,
    content,
    author,
    image: image ? `/dərs/${image.filename}` : null
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    if (image) {
      // Xəta halında şəkili silmək üçün
      await fs.unlink(path.join(__dirname, `../../../dərs/${image.filename}`));
    }
    res.status(400).json({ message: err.message });
  }
};

// Xəbəri dəyişmək
const updateNews = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedNews = await News.findByIdAndUpdate(id, req.body, { new: true });
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
    if (news.image) {
      // Şəkili silmək üçün
      await fs.unlink(path.join(__dirname, `../${news.image}`));
    }
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
}