import React from 'react';
import styles from './FollowYoutube.module.scss';
import { FaYoutube } from "react-icons/fa";
import birbasha from '../../image/birbasa.jpg';
import sifarishet from '../../image/Screenshot_18.png';
import beyenname from '../../image/beyanname.png'
import { MdOutlineCalendarToday } from 'react-icons/md';

const FollowYoutube = () => {
  return (
    <div className={styles.followYoutube}>
        <div className={styles.container}>
            <div className={styles.followYoutubeText}>
                <h1>Bizi Youtube-də izləyin</h1>
                <a href='https://www.youtube.com/channel/UCyzOf7mipPtZt5qK3VIeD-w'>
                    <FaYoutube className={styles.icon}/> kargolux.az</a>
            </div>
            <div className={styles.followYoutubeCards}>
                <div className={styles.cardLeft}>
                    <div className={styles.cardImg}>
                        <img src={birbasha} alt="birbasha" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>Trendyoldan Kargolux ilə birbaşa sifariş qaydası</h2>
                        <p><span><MdOutlineCalendarToday /></span> 12.04.2021</p>
                    </div>
                    <button><FaYoutube /></button>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardRightTop}>
                        <div className={styles.cardImg}>
                            <img src={sifarishet} alt="sifarish et" />
                        </div>
                        <div className={styles.cardText}>
                            <h2>KargoLux ilə sifariş et xidməti</h2>
                            <p><span><MdOutlineCalendarToday /></span> 12.04.2021</p>
                        </div>
                        <button><FaYoutube /></button>
                    </div>
                    <div className={styles.cardRightBottom}>
                        <div className={styles.cardImg}>
                            <img src={beyenname} alt="beyenname" />
                        </div>
                        <div className={styles.cardText}>
                            <h2>Xəbərlər və yeniliklər</h2>
                            <p><span><MdOutlineCalendarToday /></span> 12.04.2021</p>
                        </div>
                        <button><FaYoutube /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowYoutube