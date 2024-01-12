import React, { useState } from 'react';
import './CourseRegistrationPage.css';
import { useTranslation } from 'react-i18next';
import SubmitBtn from '../SubmitBtn/SubmitBtn.js';
import { Formik } from 'formik';
import SectionTitle from '../SectionTitle/SectionTitle.js';
import * as yup from 'yup';
import AnimLogo from '../AnimLogo/AnimLogo.tsx'
import { useDispatch } from 'react-redux';
import { postTrialCourse } from '../../store/slices/TrialCourseSlice/TrialCourseApi.js';
function CourseRegistrationPage({ setUser, setPage, user }) {
  const [changeForm, setChangeForm] = useState({ regForm: false, logForm: true });
  const [activeBtn, setactiveBtn] = useState({online: false, ofline: false});
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch()

  
  const validationSchema = yup.object().shape({
    name: yup.string().required(t('validation_reg_log.0')),
    phone: yup.string().required(t('validation_reg_log.0')),
    type: yup.string().required(t('validation_reg_log.0')),
  });


  const handleFormSubmit = (e, handleSubmit) => {
    e.preventDefault()
   if (e.target[0].value && e.target[1].value && (e.target[2].checked || e.target[3].checked)) {
    handleSubmit()
    dispatch(postTrialCourse({
      name: e.target[0].value,
      phone: e.target[1].value,
      type: e.target[2].checked ? e.target[2].value : e.target[3].checked ? e.target[3].value : ''
    }))

   }
  }
  return (
    <div className="course-registration-page">
      
      
          <Formik
            initialValues={{
              name: '',
              phone: '',
              courses: '',
              type: '',
            }}
            onSubmit={(values, { resetForm }) => {
              // setUser([...user, { ...values }]);
              // setPage('log');
              resetForm();
            }}
            validateOnBlur
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <div className="register">
                <div className="container">
                  <form className="reg-form" onSubmit={(e) => handleFormSubmit(e, handleSubmit)}>
                    <SectionTitle title={t('reg_and_log.' + '11')} />
                    <div className="name-inp">
                      <input type="text" name="name" placeholder={t('reg_and_log.' + '2')} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                      {touched.name && errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="tel-inp">
                      <input type="text" name="phone" placeholder={t('reg_and_log.' + '4')} value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                      {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
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

          <div className="log_img_div">
                                <AnimLogo/>
                             </div>
        </div>
      
  );
}

export default CourseRegistrationPage;
