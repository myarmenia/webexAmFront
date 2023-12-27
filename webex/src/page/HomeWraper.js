import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import BottomMenu from '../components/BottomMenu/BottomMenu'
import Footer from '../components/Footer/Footer'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'

function HomeWraper() {

  return (
    <div>
      <BurgerMenu/>
      <NavBar/> 
      <Outlet/>
      <ScrollUpButton/>
      <Footer/>
      <BottomMenu/>
    </div>
  )
}

export default HomeWraper