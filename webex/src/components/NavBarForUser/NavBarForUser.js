import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import SelectLng from '../SelectLng/SelectLng'
import './NavBarForUser.css'
import { selectLogin } from '../../store/slices/LoginSlice/LoginSlice'
import { useSelector } from 'react-redux'
import { projectImg_1, projectImg_4 } from '../../images/images'
import { useNavigate } from 'react-router-dom'



function NavBarForUser() {

    const navigate = useNavigate()

    const respLogin = useSelector(selectLogin)
  return (
    <div className='nav-bar-for-user'>

        <div className='container'>
            <NavMenu/>

            <div className='navbar-rigth-div-for-user'>
                <div className='user-div' onClick={()=> navigate('/profilePage')}>
                    <span>{respLogin?.data.authUser.name}</span>
                    <img src={projectImg_1} alt="avatar" />
                </div>
                
                <SelectLng/>

            </div>
        </div>
    </div>
  )
}

export default NavBarForUser