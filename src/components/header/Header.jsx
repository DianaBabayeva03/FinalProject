import React from 'react'
import styles from './Header.module.scss'
import logoImg from '../../image/logo.svg'

const Header = () => {
  return (
    <div className={styles.headerBox}>
        <div className={styles.headerTop}>
            <div className={styles.container}>
                <div className={styles.information}>
                    <button>Haqqımızda</button>
                    <button>Suallar</button>
                    <button>Daşınma şərtləri</button>
                    <button>Şəxsi məlumatların qorunması</button>
                </div>
                <div className={styles.contact}>
                  <div className={styles.valyuta}>
                    <span>USD</span>
                    <span>AZN</span>
                  </div>
                  <div className={styles.number}>
                    <p>+994 12 525 26 26</p>
                  </div>
                  <div className={styles.selects}>
                    <select name="" id="">
                      <option value="">az</option>
                      <option value="">ru</option>
                    </select>
                  </div>
                </div>
            </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={logoImg} alt="logo" />
            </div>
            <div className={styles.navBar}>
              <ul>
                <li><a href="">Ana Səhifə</a></li>
                <li><a href="">Tariflər</a></li>
                <li><a href="">Mağazalar</a></li>
                <li><a href="">Xidmətlər</a></li>
                <li><a href="">Xəbərlər</a></li>
                <li><a href="">Əlaqə</a></li>
              </ul>
            </div>
            <div className={styles.logIn}>
              <span>Giriş et</span>
              <button>Qeydiyyat</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header