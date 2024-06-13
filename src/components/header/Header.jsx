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
            </div>
        </div>
    </div>
  )
}

export default Header