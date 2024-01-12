import React, { useEffect } from 'react';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import './ProfilePage.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profilePage/Dashboard');
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
