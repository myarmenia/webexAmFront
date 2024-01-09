import React, { useEffect, useState } from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import { dropIcon, navIcon } from '../../iconFolder/icon'
import './NavMenu.css'
import { logoImage } from '../../images/images'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function NavMenu() {
    
     const { t, i18n } = useTranslation();

  return (
       <div className='nav-menu-div'>
            <NavLink to={'/'}>{logoImage}</NavLink>
             <ul className='nav-menu'>
                <div className='drop-item'>
                    <li className='programing'>{t('navMenu.'+ '1')} {dropIcon}</li>
                    <ul className='drop-menu'>
                         <NavMenuItem index="8" path="/1"/>
                         <NavMenuItem index="9" path="/2"/>
                         <NavMenuItem index="10" path="/3"/>     
                         <NavMenuItem index="11" path="/3"/>     
                         <NavMenuItem index="12" path="/3"/>     
                         <NavMenuItem index="13" path="/3"/>     
                    </ul> 

                </div>
                <NavMenuItem index="2" path="/projects"/>
                <NavMenuItem index="7" path="/news"/>
                <NavMenuItem index="3" path="/aboteus"/>
                <NavMenuItem index="4" path="contact"/>
            </ul>
             
       </div>
  )
}

export default NavMenu