import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import BottomMenu from '../components/BottomMenu/BottomMenu'
import Footer from '../components/Footer/Footer'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'
import NavTop from '../components/NavTop/NavTop'
import { useSelector } from 'react-redux'
import { selectLogin } from '../store/slices/LoginSlice/LoginSlice'
import NavBarForUser from '../components/NavBarForUser/NavBarForUser'

function HomeWraper() {

  const respLogin = useSelector(selectLogin)

  return (
    <div>
      <BurgerMenu/>
      {Object.keys(respLogin?.data.authUser || {}).length === 0 && (<NavTop/>)}
      {Object.keys(respLogin?.data.authUser || {}).length === 0 ? <NavBar/> : <NavBarForUser/>} 
      <Outlet/>
      <ScrollUpButton/>
      <Footer/>
      <BottomMenu/>
    </div>
  )
}

export default HomeWraper