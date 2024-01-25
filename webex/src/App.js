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
import PrivateRoute from './privateRoute/PrivateRoute';
import PrivateRouteForOutSider from './privateRoute/PrivateRouteForOutSider';
import PrivateRouteForRegAndLog from './privateRoute/PrivateRouteForRegAndLog';
import VisitHistory from './components/profilePage/VisitHistory/VisitHistory';
import Help from './components/profilePage/Help/Help';


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
            <Route path="registr" element={<PrivateRouteForRegAndLog><Register /></PrivateRouteForRegAndLog>} />
            <Route path="login" element={<PrivateRouteForRegAndLog><LoginPage /> </PrivateRouteForRegAndLog>} />
            <Route path="resetPassword/:token/:email" element={<ResetPasswordPage />} />
            <Route path="verifyAccount/:token/:email" element={<VerifyAccount />} />

            <Route index element={<PrivateRouteForOutSider><HomePage /></PrivateRouteForOutSider>} />
            <Route path="programing" element={<h1>programing</h1>} />
            <Route path="projects" element={<PrivateRouteForOutSider><ProjectsPage /></PrivateRouteForOutSider>}>
              <Route path=":idd" element={<PrivateRouteForOutSider><ProjectsPage /></PrivateRouteForOutSider>} />
            </Route>
            <Route path="aboteus" element={<PrivateRouteForOutSider><AbouteUsPage /></PrivateRouteForOutSider>} />
            <Route path="contact" element={<h1>contact</h1>} />
            <Route path="courses-registration" element={<PrivateRouteForOutSider><CourseRegistrationPage /></PrivateRouteForOutSider>} />
            <Route path="profilePage" element={<PrivateRoute><ProfilePage /></PrivateRoute>}>
              <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="currentlessons" element={<PrivateRoute><CurrentLessons /></PrivateRoute>} />
              <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="visithistory" element={<PrivateRoute><VisitHistory /></PrivateRoute>} />
              <Route path="help" element={<PrivateRoute><Help /></PrivateRoute>} />
            </Route>
              </Route>
          </Route>

        <Route path="*" element={<div>ejy chka</div>} />
      </Routes>
    </div>
  );
}

export default App;
