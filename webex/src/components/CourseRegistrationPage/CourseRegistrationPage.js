import React, { useState } from 'react';
import './CourseRegistrationPage.css';
import LoginPage from '../LoginPage/LoginPage.js';
import Button from '../Button/Button.js';
import { useTranslation } from 'react-i18next';
import Registre from '../Register/Register.js';
import SubmitBtn from '../SubmitBtn/SubmitBtn.js';
import { Formik } from 'formik';
import SectionTitle from '../SectionTitle/SectionTitle.js';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import CoursesRegistrationSlide from '../CoursesRegistrationSlide/CoursesRegistrationSlide.js';
import CoursesRegistrationInfo from '../CoursesRegistrationInfo/CoursesRegistrationInfo.js';

function CourseRegistrationPage({ setUser, setPage, user }) {
  const [changeForm, setChangeForm] = useState({ regForm: false, logForm: true });
  const [activeBtn, setactiveBtn] = useState({online: false, ofline: false});
  const { t, i18n } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Պարտադիր գրել անուն'),
    phone: yup.string().required('Պարտադիր գրել հեռախոսահամար'),
    courses: yup.string().required('Պարտադիր նշել դասընթացի տեսակը'),
    type: yup.string().required('Պարտադիր նշել դասընթացի տեսակը'),
  });

  return (
    <div className="course-registration-page">
      <div className="change-form-div">
        <button style={{backgroundColor: changeForm.regForm && '#00bcff', outline: changeForm.regForm && 'none'}} className="btn" onClick={() => setChangeForm({ regForm: true, logForm: false })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {t('reg_log.' + '1')}
        </button>

        <button style={{backgroundColor: changeForm.logForm && '#00bcff', outline: changeForm.logForm && 'none'}} className="btn" onClick={() => setChangeForm({ regForm: false, logForm: true })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {t('reg_log.' + '0')}
        </button>
      </div>
      <div className="forms-div course-forms-div">
        <div>
          {changeForm.logForm && <LoginPage />}
          {changeForm.regForm && <Registre />}
        </div>
        <div>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              courses: '',
              type: '',
            }}
            onSubmit={(values, { resetForm }) => {
              setUser([...user, { ...values }]);
              setPage('log');
              resetForm();
            }}
            validateOnBlur
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <div className="register">
                <div className="container">
                  <form className="reg-form" onSubmit={handleSubmit}>
                    <SectionTitle title={t('reg_and_log.' + '11')} />
                    <div className="name-inp">
                      <input type="text" name="name" placeholder={t('reg_and_log.' + '2')} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                      {touched.name && errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="tel-inp">
                      <input type="text" name="phone" placeholder={t('reg_and_log.' + '4')} value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                      {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    <div className="select">
                      <select name="courses" id="courses" value={values.courses} onChange={handleChange} onBlur={handleBlur}>
                        <option value="" disabled> {t('reg_and_log.' + '12')}</option>
                        <option value="js">Front-end</option>
                        <option value="react">Back-end</option>
                        <option value="redux">Full-stack</option>
                        <option value="typeScript">Unity C#</option>
                        <option value="typeScript">Java Core</option>
                      </select>
                      {touched.courses && errors.courses && <p className="error">{errors.courses}</p>}
                    </div>

                    <div className="radio-inp">
                      <div className='label-btns'><label>
                        <input type="radio" name="type" value="online" checked={values.type === 'online'} onChange={handleChange} onBlur={handleBlur} />
                        <div  style={{backgroundColor: activeBtn.online && '#00bcff', outline: activeBtn.online && 'none'}}  className='btn online-btn' onClick={()=> setactiveBtn({online: true, ofline: false})}>
                            
                            Online
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="type" value="offline" checked={values.type === 'offline'} onChange={handleChange} onBlur={handleBlur} />
                        <div  style={{backgroundColor: activeBtn.ofline && '#00bcff', outline: activeBtn.ofline && 'none'}} className='btn ofline-btn'onClick={()=> setactiveBtn({online: false, ofline: true})}>
                            
                            Offline
                        </div>
                      </label></div>
                      {touched.type && errors.type && <p className="error">{errors.type}</p>}
                    </div>

                    <SubmitBtn index="1" />
                    
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>

        <CoursesRegistrationSlide/>

        <CoursesRegistrationInfo/>
    </div>
  );
}

export default CourseRegistrationPage;
