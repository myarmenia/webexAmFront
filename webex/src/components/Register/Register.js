import { Formik } from "formik";
import * as yup from 'yup';
import './Register.css';
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import SectionTitle from "../SectionTitle/SectionTitle";
import AnimLogo from "../AnimLogo/AnimLogo.tsx";
import { NavLink, useLocation } from "react-router-dom";
import { eyeIcon } from "../../iconFolder/icon.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Registre({setUser, setPage, user}) {

    const [viewPassword, setViewPassword] = useState(true)
    const [viewConfirmPassword, setConfirmViewPassword] = useState(true)

    const { t, i18n } = useTranslation();

    const {pathname} = useLocation()
    

    const  validationSchema = yup.object().shape({
        name: yup.string().required('Պարտադիր գրել անուն'),
        phone: yup.string(),
        email: yup.string().email('Գրե՜ք ճիշտ Էլ. հասցե').required('Պարտադիր գրել Էլ. հասցե'),
        password: yup.string()
        .matches(/[0-9]/, 'Գաղտնաբառը պետք է պարունակի թվանշան')
        .matches(/[a-z]/, 'Գաղտնաբառը պետք է պարունակի  Փոքրատառ')
        .required('Պարտադիր գրել գաղտնաբառը'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Գաղտնաբառները չեն համնկնում').required('Պարտադիր գրել գաղտնաբառը'),

    })
    return (    
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                password: '',
                phone: '',
                confirmPassword: '',
            }}

            onSubmit={(values, {resetForm})=>{
                setUser([
                    ...user,
                    {
                        ...values
                    }
                ])
                setPage('log')
                resetForm()
            }}

            validateOnBlur

            validationSchema={validationSchema}
        >
        
        {
            ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                <div className="register">
                    <div className="container">
                            <form className="reg-form"  onSubmit={handleSubmit}>
                                <SectionTitle title={t('reg_and_log.'+ '0')}/>
                            <div className="name-inp">
                                <input type="text" name="name" placeholder={t('reg_and_log.'+ '2')} value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="email-inp">
                                <input type="email" name="email" placeholder={t('reg_and_log.'+ '3')} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="tel-inp">
                                <input type="" name="phone" placeholder={t('reg_and_log.'+ '4')} value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                            </div>

                            <div className="password-inp">
                                <input type={viewPassword ? 'password' : 'text'} name="password" placeholder={t('reg_and_log.'+ '5')} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                <span onClick={()=> setViewPassword(!viewPassword)}>{eyeIcon}</span>
                                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                            </div>

                            <div className="confirmPassword-inp">
                                <input type={viewConfirmPassword ? 'password' : 'text'} name="confirmPassword" placeholder={t('reg_and_log.'+ '6')} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                                <span onClick={()=> setConfirmViewPassword(!viewConfirmPassword)}>{eyeIcon}</span>
                                {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>

                            {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                            <SubmitBtn index= "1"/>
                            <h6>{t('reg_and_log.'+ '7')}  <NavLink to={'/login'}>{t('reg_and_log.'+ '9')}</NavLink></h6>
                        </form>
                        {pathname === '/registr' && 
                            <div className="log_img_div">
                                <AnimLogo/>
                             </div>}
                    </div>
                </div>
            )
        }
        </Formik>
    )
}


export default Registre