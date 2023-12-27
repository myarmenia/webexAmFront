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

  return (
    <div className='nav-bar'>

        <div className='container'>
            <NavMenu/>

            <Button index = "0" path="/courses-registration"/>

            <div className='navbar-rigth-div'>
                <RegistreButton path="/registr"/>
                <LoginButton path = "/login"/>
                <SelectLng/>

            </div>
        </div>
    </div>
  )
}

export default NavBar