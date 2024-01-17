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

  const leng = localStorage.getItem('lang')
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
              <NavLink to={'/' + leng}>{logoImage}</NavLink>
              </div>

              <ul className="list-items">
              <div className='drop-item'>
                    <NavMenuItem index="1"/>
                    <ul className='drop-menu'>
                         <NavMenuItem index="8" path="/1"/>
                         <NavMenuItem index="9" path="/2"/>
                         <NavMenuItem index="10" path="/3"/>     
                         <NavMenuItem index="11" path="/3"/>     
                         <NavMenuItem index="12" path="/3"/>     
                         <NavMenuItem index="13" path="/3"/>     
                    </ul> 

                </div>
                <NavMenuItem index = "2" path="/projects"/>
                <NavMenuItem index="7" path="/news"/>
                <NavMenuItem index = "3" path="/aboteus"/>
                <NavMenuItem index = "4" path="/contact"/>
              </ul>

              {/* <Button index = "0" path="/registr"/>
              <Button index = "2" path="/courses-registration"/> */}


              <div className="icons">
                  <div className='my-reg_log_class'>
                      <a href="#" id='registre'>{loginIcon}</a>
                      <LoginButton path= {leng + "/login"}/>
                  </div>

                  <div className='my-reg_log_class'>
                      <a href="#" id='login'>{RegistreIcon}</a>
                      <RegistreButton path={leng + "/registr"}/>
                  </div>
                  
                  <div className='my-leng_class'>
                      <a href="#" id='login'>{lengIcon}</a>
                      <SelectLng/>
                  </div>
                    
 
              </div>

            </nav>
          </div>
         
</div>

  )

}

export default BurgerMenu