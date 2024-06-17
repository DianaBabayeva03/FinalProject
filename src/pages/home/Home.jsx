import React from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import AddFaktura from '../../components/addfaktura/AddFaktura'
import InformationAndOurServices from '../../components/informationandourservices/InformationAndOurServices'
import TarrifsOnAllProducts from '../../components/TarrifsOnAllProducts/TarrifsOnAllProducts'
import MobilTetbiq from '../../components/MobilTetbiq/MobilTetbiq'
import HoWeWork from '../../components/HoWeWork/HoWeWork'
// import Slider from '../../components/Sliders/Slider'

const Home = () => {
  return (
    <div className={styles.backGround}>
        <Header />
        <AddFaktura />
        {/* <Slider /> */}
        <MobilTetbiq />
        <InformationAndOurServices />
        <TarrifsOnAllProducts />
        <HoWeWork />
    </div>
  )
}

export default Home