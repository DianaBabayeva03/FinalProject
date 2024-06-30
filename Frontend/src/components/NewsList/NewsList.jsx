import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { MdOutlineCalendarToday } from 'react-icons/md';
import styles from '../News/News.module.scss';
import pumaAyaqqabi from '../../image/puma-ayaqqabi.jpg';
import avvaShalvar from '../../image/avva-salvar.jpg';
import notbukChanta from '../../image/notbuk-canta.jpg';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {

    const navigation = useNavigate();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // API'den haberleri getirme işlemi
        fetch('http://localhost:7000/api/news')
        .then(response => response.json())
        .then(data => setNewsData(data))
        .catch(error => console.error('Error fetching news:', error));
    }, []);

    const truncateContent = (content, wordLimit) => {
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content;
    };

  return (
    <div className={styles.news}>
        <div className={styles.container}>
            <div className={styles.newsText}>
                <h1>Xəbərlər və yeniliklər</h1>
                <p>Yeniliklər və kampaniyalar barədə məlumatlar əldə etmək üçün bizi izləmədə qalın</p>
            </div>
            <div className={styles.newsCards}>
                <div className={styles.newsCard}>
                    <div className={styles.cardImg}>
                        <img src={pumaAyaqqabi} alt="puma ayaqqabilari" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>Puma ayaqqabıları</h2>
                        <p>İdman ayaqqabıları aktiv həyat üçün ideal olan ay...</p>
                        <div className={styles.etrafli}>
                            <button onClick={() => navigation('/puma-ayaqqabilari')}>Ətraflı <span><FaArrowRight /></span></button>
                            <p><span><MdOutlineCalendarToday /></span> 3 həftə əvvəl</p>
                        </div>
                    </div>
                </div>
                <div className={styles.newsCard}>
                    <div className={styles.cardImg}>
                        <img src={avvaShalvar} alt="avva shalvar" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>Avva Şalvarları</h2>
                        <p>1983-cü ildə İstanbulda qurulan Avva geyimdə hər...</p>
                        <div className={styles.etrafli}>
                            <button>Ətraflı <span><FaArrowRight /></span></button>
                            <p><span><MdOutlineCalendarToday /></span> 3 həftə əvvəl</p>
                        </div>
                    </div>
                </div>
                <div className={styles.newsCard}>
                    <div className={styles.cardImg}>
                        <img src={notbukChanta} alt="notbuk chanta" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>Notbuk çantası modelləri</h2>
                        <p>İndi portativ kompüterlərə tələbat artıb, çünki onla...</p>
                        <div className={styles.etrafli}>
                            <button>Ətraflı <span><FaArrowRight /></span></button>
                            <p><span><MdOutlineCalendarToday /></span> 3 həftə əvvəl</p>
                        </div>
                    </div>
                </div>
                {newsData.map(newsItem => (
                    <div key={newsItem.id} className={styles.newsCard}>
                        <div className={styles.cardImg}>
                            <img src={newsItem.image} alt={newsItem.title} />
                        </div>
                        <div className={styles.cardText}>
                            <h2>{newsItem.title}</h2>
                            <p>{truncateContent(newsItem.content, 7)}</p>
                            <div className={styles.etrafli}>
                            <button onClick={() => navigation('/news/' + newsItem.id)}>Ətraflı <span><FaArrowRight /></span></button>
                            <p><span><MdOutlineCalendarToday /></span>4 həftə əvvəl {newsItem.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewsList