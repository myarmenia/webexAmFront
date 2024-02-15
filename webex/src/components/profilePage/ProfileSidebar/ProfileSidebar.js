import React, { useEffect, useState } from 'react';
import { ProfileSidebarArrll } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import './ProfileSidebar.css';
import Line from '../../../images/Line.png';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

function ProfileSidebar() {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  const ProfileSidebarArr = ProfileSidebarArrll();
  // const params = useParams();

  const logOut = (e) =>{
    e.preventDefault()
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('isAuth')
    window.location.pathname = '/home'
  }
  // console.log(location, navigate, location.pathname, 555);
  // const [active, setAvtive] = useState('dashboard');

  // const navigatePage = (slug) => {
  //   navigate(slug);
  // };
  // const changeActive = (idx) => {
  //   setAvtive(idx);
  // };

  return (
    <div style={{ height: '100%' }}>
      <div className="leftSidebar">
        <div
          className="leftSidebar_divs"
          onMouseEnter={() => setSidebar(true)}
          onMouseLeave={() => setSidebar(false)}>
          {ProfileSidebarArr.map((el, index) => (
            // <>
            <NavLink
              className={({ isActive }) => (isActive ? 'line_div line_divActive' : 'line_div')}
              to={el.slug}
              onClick={(e)=>el.slug === 'logOut'? logOut(e):e.preventDefault }
              key={index}
              >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {el.icon}
              </svg>
              <span className="nameSideBar">{el.name}</span>
            </NavLink>

            // </>
            //   <div
            //   key={index}
            //   className={active === el.slug ? 'line_div line_divActive' : 'line_div'}
            //   onClick={() => {
            //     navigatePage(el.slug);
            //     changeActive(el.slug);
            //   }}>
            //   {/* <img src={el.icon} alt={el.name} className="iconss" /> */}
            //   {/* <span className="iconss">{el.icon}</span> */}
            //   <svg
            //     width="24"
            //     height="24"
            //     viewBox="0 0 30 30"
            //     fill="none"
            //     xmlns="http://www.w3.org/2000/svg">
            //     {el.icon}
            //   </svg>
            //   <span className="nameSideBar">{el.name}</span>
            // </div>
          ))}
        </div>
        {/* <div>
          <img src={Line} alt="Line" className="line" />
        </div> */}
      </div>
    </div>
  );
}

export default ProfileSidebar;



