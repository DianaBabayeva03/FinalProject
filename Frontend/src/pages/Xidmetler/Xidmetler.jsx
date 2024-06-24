import React from 'react';
import styles from './Xidmetler.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FollowWe from '../../components/FollowWe/FollowWe';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import Services from '../../components/Services/Services';

const Xidmetler = () => {
  return (
    <div className={styles.xidmetler}>
        <Header />
        <AddFaktura />
        <Services />
        <FollowWe />
        <Footer />
    </div>
  )
}

export default Xidmetler