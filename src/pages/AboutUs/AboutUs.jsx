import React from 'react';
import styles from './AboutUs.module.scss';
import Header from '../../components/Header/Header';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import FollowWe from '../../components/FollowWe/FollowWe';
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About';

const AboutUs = () => {
  return (
    <div className={styles.backGround}>
        <Header />
        <AddFaktura />
        <About />
        <FollowWe />
        <Footer />
    </div>
  )
}

export default AboutUs