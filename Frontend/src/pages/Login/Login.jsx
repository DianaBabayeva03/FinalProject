import React, { useEffect, useState } from 'react'
// import LogIn from '../../components/Girish/LogIn'
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';
import {useLoginMutation} from '../../redux/slices/usersApiSlice'
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import logo from '../../image/logo.svg';
import playStore from '../../image/playstore.svg';
import appStore from '../../image/appstore.svg';
import visaMaster from '../../image/visamaster.svg';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigation = useNavigate();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/profile');
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation('/dashboard');
    } catch (error) {
      toast.error('Sehv email ya sifre')
    }
  }

  return (
    <div className={styles.logIn}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <div className={styles.logo} onClick={() => navigation('/')}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.auth}>
          <h1>Şəxsi kabinetə giriş</h1>
          <p>KargoLux-a xoş gəlmisiniz. E-mail və şifrənizi doğru yazdığınızdan əmin olun</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h6 className={styles.loginmessage} onClick={() => navigation('/register')}>
              <span>Qeydiyyatdan keç</span>
            </h6>
            {loginError && <div className={styles.error}>{loginError}</div>}
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging...' : 'Daxil ol'}
            </button>
          </form>
          <div className={styles.daxilOl}>
            
          </div>
        </div>
        <div className={styles.footerBox}>
          <div className={styles.textBox}>
              <p>© 2021 Kargolux | Bütün Hüquqlar Qorunur</p>
          </div>
          <div className={styles.mobilTetbiqRight}>
            <span>Mobil Tətbiqi yüklə</span>
            <img src={playStore} alt="google play" />
            <img src={appStore} alt="app store" />
            <img src={visaMaster} alt="visa mastercard" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login