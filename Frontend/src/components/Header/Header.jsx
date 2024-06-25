import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import logoImg from '../../image/logo.svg';
import { setCurrency } from '../../redux/slices/currencySlice';
import { setLanguage } from '../../redux/slices/languageSlice';
import { useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { toggleMenu, closeMenu } from '../../redux/slices/menuSlice';
import { RiCloseLargeLine } from "react-icons/ri";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl';
import { SiWhatsapp } from 'react-icons/si';
import { PiTelegramLogoDuotone } from 'react-icons/pi';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.menu.isOpen);
  const currency = useSelector((state) => state.currency.currency);
  const language = useSelector((state) => state.language.language);
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };

  const handleCurrencyChange = (currency) => {
    dispatch(setCurrency(currency));
  };

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  const navigate = useNavigate();

  return (
    <div className={styles.headerBox}>
      <div className={styles.headerTop}>
        <div className={styles.container}>
          <div className={styles.information}>
            <button onClick={() => navigate('/about')}>Haqqımızda</button>
            <button onClick={() => navigate('/faq')}>Suallar</button>
            <button onClick={() => navigate('/kargo-chatdirilma-shertleri')}>Daşınma şərtləri</button>
            <button onClick={() => navigate('/shexsi-melumatlarin-qorunmasi')}>Şəxsi məlumatların qorunması</button>
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
          <div className={styles.menu}>
            <button onClick={handleMenuToggle}><TiThMenu /></button>
            {isOpen && (
              <div className={styles.menuBar}>
                <div className={styles.close} onClick={handleMenuClose}>
                  <RiCloseLargeLine />
                </div>
                <ul>
                  <li onClick={() => navigate('/')}><a href="">Ana Səhifə</a></li>
                  <li onClick={() => navigate('/tariffs')}><a href="">Tariflər</a></li>
                  <li onClick={() => navigate('/shops')}><a href="">Mağazalar</a></li>
                  <li onClick={() => navigate('/kargo-xidmetleri')}><a href="">Xidmətlər</a></li>
                  <li><a href="">Xəbərlər</a></li>
                  <li onClick={() => navigate('/contact')}><a href="">Əlaqə</a></li>
                  <li onClick={() => navigate('/about')}><a href="">Haqqımızda</a></li>
                  <li onClick={() => navigate('/faq')}><a href="">Suallar</a></li>
                  <li onClick={() => navigate('/kargo-chatdirilma-shertleri')}><a href="">Daşınma şərtləri</a></li>
                  <li onClick={() => navigate('/shexsi-melumatlarin-qorunmasi')}><a href="">Şəxsi məlumatların qorunması</a></li>
                </ul>
                <div className={styles.follow}>
                  <p>Bizi sosial şəbəkələrdə izləyin</p>
                  <button><SlSocialFacebook /></button>
                  <button><SlSocialInstagram /></button>
                  <button><SiWhatsapp /></button>
                  <button><PiTelegramLogoDuotone /></button>
                  <button><SlSocialYoutube /></button>
                </div>
              </div>
            )}
          </div>
          <div className={styles.navBar}>
            <ul>
              <li onClick={() => navigate('/')}><a href="">Ana Səhifə</a></li>
              <li onClick={() => navigate('/tariffs')}><a href="">Tariflər</a></li>
              <li onClick={() => navigate('/shops')}><a href="">Mağazalar</a></li>
              <li onClick={() => navigate('/kargo-xidmetleri')}><a href="">Xidmətlər</a></li>
              <li><a href="">Xəbərlər</a></li>
              <li onClick={() => navigate('/contact')}><a href="">Əlaqə</a></li>
            </ul>
          </div>
          <div className={styles.logIn}>
            {userInfo ? (
              <span style={{width:100, gap:10}}  onClick={() => navigate('/profile')}>{`${userInfo.name}`}
                <div style={{backgroundColor:'rgb(255, 109, 103)', borderRadius:50, width:36, display:'flex', justifyContent:'center', alignItems:'center'}} className={styles.userImg}>
                  <img style={{width:30}} src="https://kargolux.az/kargolux/assets/images/icons/user-circle.svg" alt="userprofile" />
                </div>
              </span>
              
            ) : (
              <>
                <span onClick={() => navigate('/login')}>Giriş et</span>
                <button onClick={() => navigate('/register')}>Qeydiyyat</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;