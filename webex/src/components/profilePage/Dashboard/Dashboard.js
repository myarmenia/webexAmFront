import React, { useEffect } from 'react';
import './Dashboard.css';
import Student from '../../../images/Student.svg';
import Purchase from '../../../images/Purchase.svg';
import ProfPic from '../../../images/profile.png';
import Training from './Training/Training';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from '../../../store/slices/Dashboard/DashboardApi';
import { getDataAll, getLoadingDashboard } from '../../../store/slices/Dashboard/DashboardSlice';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const DataAll = useSelector(getDataAll);
  const loading = useSelector(getLoadingDashboard);
  useEffect(() => {
    dispatch(getDashboard());
  }, []);
  console.log('DataAll', DataAll);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div style={{ padding: '40px', backgroundColor: 'green' }}>
          <p className="allDashboard_title">Dashboard</p>
          <div className="allDashboard">
            <div className="account">
              <div className="account_div">
                <img src={Student} alt="Student" className="account_img" />
                <span className="account_name">Account</span>
              </div>
              <div className="account_div">
                <img src={ProfPic} alt="ProfPic" />
                <span className="account_name_profile">Maria Brown</span>
              </div>
              <button className="account_button">Edit profile</button>
            </div>
            <div className="purchaseHistory">
              <div className="account_div">
                <img src={Purchase} alt="Student" className="account_img" />
                <span className="account_name">Purchase history</span>
              </div>
              <div className="purchaseHistory_down">
                <div className="purchaseHistory_lessCount">
                  <div className="lesson_count">
                    <span className="lesson_count_number">8</span>
                    <span className="lesson_count_name">Lessons</span>
                  </div>
                  <div className="lesson_total">of total 12</div>
                </div>
                <div className="purchaseHistory_procent">70%</div>
              </div>
            </div>
          </div>
          <p className="allDashboard_title2">My Training</p>
          <Training />
        </div>
      )}
    </>
  );
};
