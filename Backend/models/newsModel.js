import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  image: String, // Şəkil URL-i üçün
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const News = mongoose.model('News', newsSchema);

export default News;
