import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Register.module.scss';
import { useRegisterMutation } from "../../redux/slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import logo from '../../image/logo.svg';
import playStore from '../../image/playstore.svg';
import appStore from '../../image/appstore.svg';
import visaMaster from '../../image/visamaster.svg';
import { IoCheckmarkCircle } from "react-icons/io5";


const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [birthData, setBirthData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/dashboard');
    }
  }, [navigation, userInfo]);



  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Sifreler duz deyil');
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation('/');
    } catch (error) {
      toast.error('Register fail');
    }
  }

  return (
    <div className={styles.registerBox}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <div className={styles.logo} onClick={() => navigation('/')}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.auth}>
          <h1>Qeydiyyat</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Ad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="surname"
              placeholder="Soyad"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="date"
              name="birthData"
              placeholder="Doğum tarixi"
              value={birthData}
              onChange={(e) => setBirthData(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
              <h6>
                <h4><IoCheckmarkCircle /></h4>
                Məsafəli <span>satış sözləşməsini</span> qəbul edirəm.
              </h6>
                <p className={styles.loginmessage} onClick={() => navigation('/login')}>
                <span>Giriş et</span>
                </p>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'User creating' : 'Qeydiyyatdan keç'}
                </button>
          </form>
          
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
  );
};

export default Register;