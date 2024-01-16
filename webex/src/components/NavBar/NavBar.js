import React from 'react'
import { logoImage } from '../../images/images'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'
import { navIcon } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import SelectLng from '../SelectLng/SelectLng'
import RegistreButton from '../RegistreButton/RegistreButton'
import LoginButton from '../LoginButton/LoginButton'




function NavBar() {

  const leng = localStorage.getItem('lang')
  return (
    <div className='nav-bar'>

        <div className='container'>
            <NavMenu/>

            {/* <Button index = "0" path="/courses-registration"/>
            <Button index = "2" path="/courses-registration"/> */}

            <div className='navbar-rigth-div'>
                <RegistreButton path={leng + "/registr"}/>
                <LoginButton path = {leng +"/login"}/>
                <SelectLng/>

            </div>
        </div>
    </div>
  )
}

export default NavBar