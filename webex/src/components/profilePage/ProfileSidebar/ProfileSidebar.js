import React, { useEffect, useState } from 'react';
import { ProfileSidebarArr } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import './ProfileSidebar.css';
import Line from '../../../images/Line.png';
import { useNavigate } from 'react-router-dom';

function ProfileSidebar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [active, setAvtive] = useState(0);

  const navigatePage = (name) => {
    navigate(name.replace(/\s/g, ''));
  };
  const changeActive = (idx) => {
    setAvtive(idx);
  };

  return (
    <div>
      <div className="leftSidebar">
        <div
          className="leftSidebar_divs"
          onMouseEnter={() => setSidebar(true)}
          onMouseLeave={() => setSidebar(false)}>
          {ProfileSidebarArr.map((el, index) => (
            <div
              key={index}
              className={active === index ? 'line_div line_divActive' : 'line_div'}
              onClick={() => {
                navigatePage(el.name);
                changeActive(index);
              }}>
              {/* <img src={el.icon} alt={el.name} className="iconss" /> */}
              {/* <span className="iconss">{el.icon}</span> */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {el.icon}
              </svg>
              <span className="nameSideBar">{el.name}</span>
            </div>
          ))}
        </div>
        <div>
          <img src={Line} alt="Line" className="line" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
