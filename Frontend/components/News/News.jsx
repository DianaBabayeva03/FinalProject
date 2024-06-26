import React from 'react';
import styles from './News.module.scss';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";
import pumaAyaqqabi from '../../image/puma-ayaqqabi.jpg';
import avvaShalvar from '../../image/avva-salvar.jpg';
import notbukChanta from '../../image/notbuk-canta.jpg';

const News = () => {
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
                            <button>Ətraflı <span><FaArrowRight /></span></button>
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
            </div>
        </div>
    </div>
  )
}

export default News