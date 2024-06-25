import React from 'react';
import styles from './Footer.module.scss';
import playStore from '../../image/playstore.svg';
import appStore from '../../image/appstore.svg';
import visaMaster from '../../image/visamaster.svg';
import logo from '../../image/logo_white.svg';

const Footer = () => {
  return (
    <div className={styles.footerBox}>
        <div className={styles.container}>
            <div className={styles.footerTop}>
                <div className={styles.bizimleElaqe}>
                    <h2>Bizimlə əlaqə</h2>
                    <p>Saytın əlaqə formundan və buradan göndərilən mesajlar iş günləri ərzində növbəli şəkildə cavablandırılacaqdır</p>
                    <div className={styles.inpBox}>
                        <input type="text" className={styles.ad} placeholder='Adınız'/>
                        <input type="email" className={styles.email} placeholder='E-mail'/>
                        <textarea name="" id="" placeholder='Mesajınız'></textarea>
                    </div>
                    <button>Göndər</button>
                </div>
                <div className={styles.anaSehife}>
                    <ul>
                        <li><a href="">Ana Səhifə</a></li>
                        <li><a href="">Tariflər</a></li>
                        <li><a href="">Mağazalar</a></li>
                        <li><a href="">Xidmətlər</a></li>
                        <li><a href="">Xəbərlər</a></li>
                        <li><a href="">Əlaqə</a></li>
                        <li><a href="">Haqqımızda</a></li>
                        <li><a href="">Suallar</a></li>
                        <li><a href="">Daşınma Şərtləri</a></li>
                        <li><a href="">Şəxsi məlumatların qorunması</a></li>
                    </ul>
                </div>
                <div className={styles.unvan}>
                    <div className={styles.card}>
                        <h3>Ünvanımız</h3>
                        <p>Nərimanov rayonu, Faiq Yusifov 16</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Telefon nömrələrimiz</h3>
                        <p>+994 12 525 26 26</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Email</h3>
                        <p>Info@kargolux.az</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.logoBox}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <p>© 2021 Kargolux | Bütün Hüquqlar Qorunur</p>
                </div>
                <div className={styles.mobilTetbiqRight}>
                    <span>Mobil Tetbiq</span>
                    <img src={playStore} alt="google play" />
                    <img src={appStore} alt="app store" />
                    <img src={visaMaster} alt="visa mastercard" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer