import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FollowWe from '../../components/FollowWe/FollowWe';
import AddFaktura from '../../components/AddFaktura/AddFaktura';
import LiquidProducts from '../../components/TariffsOnLiquidProducts/LiquidProducts';
import styles from './Tarifs.module.scss'

const Tarifs = () => {
  return (
    <div className={styles.tariffsBox}>
      <Header />
      <AddFaktura />
      <LiquidProducts />
      <FollowWe />
      <Footer />
    </div>
  )
}

export default Tarifs