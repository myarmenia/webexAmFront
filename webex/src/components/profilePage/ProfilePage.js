import React, { useEffect } from 'react';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import './ProfilePage.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  const lang = localStorage.getItem('lang')
  // useEffect(() => {
  //   navigate(`${lang}/profilePage/Dashboard`);
  // }, []);
  useEffect(() => {
    navigate(`dashboard`, { replace: true });
  }, []);
  
  return (
    <div className="containerProfilePage">
      <div className="ProfilePage_bigDiv">
        <ProfileSidebar />
        <div style={{width:"100%"}}>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
