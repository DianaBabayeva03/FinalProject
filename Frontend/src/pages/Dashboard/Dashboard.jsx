import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return (
    <div className={styles.container}>
      <AdminPanel />
    </div>
  );
};

export default Dashboard;
