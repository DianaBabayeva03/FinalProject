import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import AboutUs from '../pages/AboutUs/AboutUs'
import Faq from '../pages/Faq/Faq'
import KargoChatdirilma from '../pages/KargoChatdirilma/KargoChatdirilma'
import ShexsiMelumatlar from '../pages/ShexsiMelumatlar/ShexsiMelumatlar'
import Tarifler from '../pages/Tarifler/Tarifs'
import Dashboard from '../pages/Dashboard/Dashboard'
import Profile from '../pages/Profile/Profile'
import Xidmetler from '../pages/Xidmetler/Xidmetler'
import Elaqe from '../pages/Elaqe/Elaqe'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/kargo-chatdirilma-shertleri' element={<KargoChatdirilma />} />
            <Route path='/shexsi-melumatlarin-qorunmasi' element={<ShexsiMelumatlar />} />
            <Route path='/tariffs' element={<Tarifler />} />
            <Route path='/kargo-xidmetleri' element={<Xidmetler />} />
            <Route path='/contact' element={<Elaqe />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router