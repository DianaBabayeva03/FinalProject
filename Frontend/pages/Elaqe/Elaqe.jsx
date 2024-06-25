import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FollowWe from '../../components/FollowWe/FollowWe';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import styles from './Elaqe.module.scss';
import Contact from '../../components/Contact/Contact';

const Elaqe = () => {
  return (
    <div className={styles.elaqeBox}>
        <Header />
        <AddFaktura />
        <Contact />
        <FollowWe />
        <Footer />
    </div>
  )
}

export default Elaqe