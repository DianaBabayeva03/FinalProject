import React from 'react';
import Header from '../../components/Header/Header';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import Shops from '../../components/Shops/Shops';
import FollowWe from '../../components/FollowWe/FollowWe';
import Footer from '../../components/Footer/Footer';
import styles from './Magazalar.module.scss';

const Magazalar = () => {
  return (
    <div className={styles.magazalar}>
        <Header />
        <AddFaktura />
        <Shops />
        <FollowWe />
        <Footer />
    </div>
  )
}

export default Magazalar