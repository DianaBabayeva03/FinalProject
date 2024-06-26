import React from 'react';
import styles from './MobilTetbiq.module.scss';
import tetbiq from '../../image/tedbiq.png';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";


const MobilTetbiq = () => {
  return (
    <div className={styles.mobilTetbiq}>
        <div className={styles.container}>
            <div className={styles.mobilTetbiqReklam}>
                <div className={styles.mobilTetbiqText}>
                    <div className={styles.text}>
                        <h1>Mobil tətbiq ilə sifarişiniz <span>daha rahat</span></h1>
                        <p>Kargolux mobil tətbiqi ilə sifarişlərinizdən həzz alın.</p>
                    </div>
                    <button>Sifariş et</button>
                </div>
                <div className={styles.mobilTetbiqImg}>
                    <img src={tetbiq} alt="tetbiq" />
                </div>
            </div>
            <div className={styles.icons}>
                <button><SlSocialFacebook /></button>
                <button><SlSocialInstagram /></button>
                <button><SiWhatsapp /></button>
                <button><PiTelegramLogoDuotone /></button>
                <button><SlSocialYoutube /></button>
                <p>Bizi sosial şəbəkələrdə izləyin</p>
            </div>
        </div>
    </div>
  )
}

export default MobilTetbiq