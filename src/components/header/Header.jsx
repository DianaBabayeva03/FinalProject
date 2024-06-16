import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import logoImg from '../../image/logo.svg';
import { setCurrency } from '../../redux/slices/currencySlice';
import { setLanguage } from '../../redux/slices/languageSlice';

const Header = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);
  const language = useSelector((state) => state.language.language);

  const handleCurrencyChange = (currency) => {
    dispatch(setCurrency(currency));
  };

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    // Sayfa yenileme veya içerik değişimi işlemi burada yapılabilir
  };

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
              <span onClick={() => handleCurrencyChange('USD')} style={{ cursor: 'pointer', fontWeight: currency === 'USD' ? 'bold' : 'normal' }}>USD</span>
              <span onClick={() => handleCurrencyChange('AZN')} style={{ cursor: 'pointer', fontWeight: currency === 'AZN' ? 'bold' : 'normal' }}>AZN</span>
            </div>
            <div className={styles.number}>
              <p>+994 12 525 26 26</p>
            </div>
            <div className={styles.selects}>
              <select name="" id="" onChange={(e) => handleLanguageChange(e.target.value)} value={language}>
                <option value="az">az</option>
                <option value="ru">ru</option>
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

export default Header;
