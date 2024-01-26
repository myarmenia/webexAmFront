import React, { useEffect } from 'react';
import './Dashboard.css';
import Student from '../../../images/Student.svg';
import Purchase from '../../../images/Purchase.svg';
import ProfPic from '../../../images/profile.png';
import Training from './Training/Training';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from '../../../store/slices/Dashboard/DashboardApi';
import { getDataAll, getLoadingDashboard } from '../../../store/slices/Dashboard/DashboardSlice';
// import { motion, useAnimation } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DataAll = useSelector(getDataAll);
  const loading = useSelector(getLoadingDashboard);
  const lang = localStorage.getItem('lang');

  useEffect(() => {
    dispatch(getDashboard());
  }, []);

  console.log('DataAll', DataAll);
  // console.log("asdas",DataAll.dashboard.visit_history.status);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div style={{ padding: '40px', backgroundColor: '#010526' }}>
          <p className="allDashboard_title">Dashboard</p>
          <div className="allDashboard">
            <div className="account">
              <div className="account_div">
                <img src={Student} alt="Student" className="account_img" />
                <span className="account_name">Account</span>
              </div>
              <div className="account_div">
                {DataAll.dashboard.account.avatar === null ? (
                  <img src={ProfPic} alt="ProfPic" />
                ) : (
                  <img src={DataAll.dashboard.account.avatar} alt="ProfPic" className="userPhoto" />
                )}

                <span className="account_name_profile">{DataAll.dashboard.account.name}</span>
              </div>
              <div className="account_div">
                <button
                  className="account_button"
                  onClick={() => navigate(`/${lang}/profilePage/profile`)}>
                  Edit profile
                </button>
              </div>
            </div>
            <div className={DataAll.dashboard.visit_history.status ? "purchaseHistory" : "purchaseHistoryRed"}>
              {console.log('statussssss', DataAll.dashboard.visit_history.status)}
              <div className="account_div">
                <img src={Purchase} alt="Student" className="account_img" />
                <span className="account_name">Purchase history</span>
              </div>
              <div className="purchaseHistory_down">
                <div className="purchaseHistory_lessCount">
                  <div className="lesson_count">
                    <span className="lesson_count_number">
                      {DataAll.dashboard.visit_history.lesson_quantity}
                    </span>
                    <span className="lesson_count_name">Lessons</span>
                  </div>
                  <div className="lesson_total">
                    of total {DataAll.dashboard.visit_history.total_lesson_days}
                  </div>
                </div>
                <div className="purchaseHistory_procent">
                  <div style={{ width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={(
                        (DataAll.dashboard.visit_history.lesson_quantity /
                          DataAll.dashboard.visit_history.total_lesson_days) *
                        100
                      ).toFixed(0)}
                      text={`${(
                        (DataAll.dashboard.visit_history.lesson_quantity /
                          DataAll.dashboard.visit_history.total_lesson_days) *
                        100
                      ).toFixed(0)}%`}
                      strokeWidth={15}
                      styles={{
                        text: {
                          fill: '#F9F9F9',
                          fontSize: '25px',
                        },
                        trail: {
                          // Trail color
                          stroke: '#1A1A42',
                        },
                        path: {
                          // Path color
                          stroke:  DataAll.dashboard.visit_history.status === 0 ? '#DF69A0' : '#766BDB',
                        },
                      }}
                    />
                  </div>
                  {/* ({((DataAll.dashboard.visit_history.lesson_quantity / DataAll.dashboard.visit_history.total_lesson_days) * 100).toFixed(1)}%) */}
                </div>
              </div>
            </div>
          </div>
          <p className="allDashboard_title2">My Training</p>
          <Training DataAll={DataAll} />
        </div>
      )}
    </>
  );
};
