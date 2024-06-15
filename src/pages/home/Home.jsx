import React from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import AddFaktura from '../../components/addfaktura/AddFaktura'
import InformationAndOurServices from '../../components/informationandourservices/InformationAndOurServices'
// import Slider from '../../components/Sliders/Slider'

const Home = () => {
  return (
    <div className={styles.backGround}>
        <Header />
        <AddFaktura />
        {/* <Slider /> */}
        <InformationAndOurServices />
    </div>
  )
}

export default Home