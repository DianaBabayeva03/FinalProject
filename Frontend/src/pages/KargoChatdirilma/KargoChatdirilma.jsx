import React from 'react';
import styles from './KargoChatdirilma.module.scss';
import Header from '../../components/Header/Header';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import FollowWe from '../../components/FollowWe/FollowWe';
import Footer from '../../components/Footer/Footer';
import DashinmaShertleri from '../../components/DashinmaShertleri/DashinmaShertleri';

const KargoChatdirilma = () => {
  return (
    <div className={styles.kargo}>
      <Header />
      <AddFaktura />
      <DashinmaShertleri />
      <FollowWe />
      <Footer />
    </div>
  )
}

export default KargoChatdirilma