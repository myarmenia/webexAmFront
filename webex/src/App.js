import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import HomeWraper from './page/HomeWraper';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import LoginPage from './components/LoginPage/LoginPage';
import CourseRegistrationPage from './components/CourseRegistrationPage/CourseRegistrationPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProfilePage from './components/profilePage/ProfilePage';
import { Dashboard } from './components/profilePage/Dashboard/Dashboard';
import CurrentLessons from './components/profilePage/Current_lessons/CurrentLessons';

import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage';
import VerifyAccount from './components/VerifyAccount/VerifyAccount';
import AbouteUsPage from './components/AbouteUsPage/AbouteUsPage';
import Profile from './components/profilePage/profile/Profile';

function App() {
  const leng = localStorage.getItem('lang');

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    pathname == '/' && navigate(`/${leng}/`);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeWraper />}>
          <Route path=":leng">
            <Route index element={<HomePage />} />

            <Route path="programing" element={<h1>programing</h1>} />
            <Route path="projects" element={<ProjectsPage />}>
              <Route path=":idd" element={<ProjectsPage />} />
            </Route>
            <Route path="aboteus" element={<h1>aboteus</h1>} />
            <Route path="contact" element={<h1>contact</h1>} />
            <Route path="courses-registration" element={<CourseRegistrationPage />} />
            <Route path="registr" element={<Register />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="resetPassword/:token/:email" element={<ResetPasswordPage />} />
            <Route path="verifyAccount/:token/:email" element={<VerifyAccount />} />
            <Route path="profilePage" element={<ProfilePage />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="currentlessons" element={<CurrentLessons />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<div>ejy chka</div>} />
      </Routes>
    </div>
  );
}

export default App;
