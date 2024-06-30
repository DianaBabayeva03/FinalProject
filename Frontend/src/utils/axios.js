// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend'inizde API'nizin başlangıç noktası
  withCredentials: true, // Cookie'leri göndermek/gelmek için
});

export default instance;
