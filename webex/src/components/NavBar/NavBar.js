import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'
import SelectLng from '../SelectLng/SelectLng'
import RegistreButton from '../RegistreButton/RegistreButton'
import LoginButton from '../LoginButton/LoginButton'




function NavBar() {

  const leng = localStorage.getItem('lang')
  return (
    <div className='nav-bar'>

        <div className='container'>
            <NavMenu/>

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