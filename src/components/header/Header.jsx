import React from 'react'
import styles from './Header.module.scss'

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
        <div className={styles.headerBottom}></div>
    </div>
  )
}

export default Header