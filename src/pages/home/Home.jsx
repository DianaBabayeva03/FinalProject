import React from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import AddFaktura from '../../components/addfaktura/AddFaktura'
import InformationAndOurServices from '../../components/informationandourservices/InformationAndOurServices'
import TarrifsOnAllProducts from '../../components/TarrifsOnAllProducts/TarrifsOnAllProducts'
import MobilTetbiq from '../../components/MobilTetbiq/MobilTetbiq'
import HoWeWork from '../../components/HoWeWork/HoWeWork'
import News from '../../components/News/News'
import Brands from '../../components/Brands/Brands'
import FollowYoutube from '../../components/FollowYoutube/FollowYoutube'

const Home = () => {
  return (
    <div className={styles.backGround}>
        <Header />
        <AddFaktura />
        <MobilTetbiq />
        <InformationAndOurServices />
        <TarrifsOnAllProducts />
        <HoWeWork />
        <News />
        <Brands />
        <FollowYoutube />
    </div>
  )
}

export default Home