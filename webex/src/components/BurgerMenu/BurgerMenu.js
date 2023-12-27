import React from 'react'
import './BurgerMenu.css'
import { RegistreIcon, burger, closeBurgerIcon, lengIcon, loginIcon } from '../../iconFolder/icon'
import { logoImage } from '../../images/images'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import Button from '../Button/Button'
import SelectLng from '../SelectLng/SelectLng'
import RegistreButton from '../RegistreButton/RegistreButton'
import LoginButton from '../LoginButton/LoginButton'
import { NavLink } from 'react-router-dom'

function BurgerMenu() {
  return (
    <div className='burger-menu'>
          <div className="wrapper">
            <input type="checkbox" id="btn" hidden />
            <label htmlFor="btn" className="menu-btn">
              {burger}
              {closeBurgerIcon}
            </label>
            <nav id="sidebar">
              <div className='logo-image'>
              <NavLink to={'/'}>{logoImage}</NavLink>
              </div>
              {/* <div className="title">Side Menu</div> */}

              <ul className="list-items">
                <NavMenuItem index = "1" path="/programing"/>
                <NavMenuItem index = "2" path="/projects"/>
                <NavMenuItem index = "3" path="/aboteus"/>
                <NavMenuItem index = "4" path="/contact"/>
              </ul>

              <Button index = "0" path="/registr"/>

              <div className="icons">
                  <div className='my-reg_log_class'>
                      <a href="#" id='registre'>{loginIcon}</a>
                      <LoginButton path= "/login"/>
                  </div>

                  <div className='my-reg_log_class'>
                      <a href="#" id='login'>{RegistreIcon}</a>
                      <RegistreButton path="/registr"/>
                  </div>
                  
                  <div className='my-leng_class'>
                      <a href="#" id='login'>{lengIcon}</a>
                      <SelectLng/>
                  </div>
                    
 
              </div>

            </nav>
          </div>
          {/* <div className="content">
            <div className="header">Animated Side Navigation Menu</div>
            <p>using only HTML and CSS</p>
          </div> */}
</div>

  )

}

export default BurgerMenu