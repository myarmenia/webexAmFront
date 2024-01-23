import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import SelectLng from '../SelectLng/SelectLng'
import './NavBarForUser.css'
import { selectLogin } from '../../store/slices/LoginSlice/LoginSlice'
import { useSelector } from 'react-redux'
import { projectImg_1, projectImg_4 } from '../../images/images'
import { useNavigate } from 'react-router-dom'
import { getAuthUser } from '../../store/slices/Auth/AuthSlice'



function NavBarForUser() {

    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const authUser = useSelector(getAuthUser)
  
  return (
    <div className='nav-bar-for-user'>

        <div className='container'>
            <NavMenu/>

            <div className='navbar-rigth-div-for-user'>
                <div className='user-div' onClick={()=> navigate(`/${leng}/profilePage`)}>
                    <span>{authUser.name}</span>
                    <img src={authUser.avatar} alt="avatar" />
                </div>
                
                <SelectLng/>

            </div>
        </div>
    </div>
  )
}

export default NavBarForUser