import React, { useEffect, useState } from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import { navIcon } from '../../iconFolder/icon'
import './NavMenu.css'
import { logoImage } from '../../images/images'
import { NavLink } from 'react-router-dom'

function NavMenu() {
    

    

  return (
       <div className='nav-menu-div'>
            <NavLink to={'/'}>{logoImage}</NavLink>
             <ul className='nav-menu'>
                <NavMenuItem index="1" path="/programing"/>
                <NavMenuItem index="2" path="/projects"/>
                <NavMenuItem index="3" path="/aboteus"/>
                <NavMenuItem index="4" path="contact"/>
            </ul>
             
       </div>
  )
}

export default NavMenu