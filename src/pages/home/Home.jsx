import React from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import AddFaktura from '../../components/addfaktura/AddFaktura'
import Carusel from '../../components/carousel/Carusel'
import Karusel from '../../components/karusel/Karusel'
import InformationAndOurServices from '../../components/informationandourservices/InformationAndOurServices'

const Home = () => {
  return (
    <div className={styles.backGround}>
        <Header />
        <AddFaktura />
        
        <InformationAndOurServices />
    </div>
  )
}

export default Home