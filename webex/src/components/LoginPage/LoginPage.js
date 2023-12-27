import { Formik } from "formik";
import * as yup from 'yup';
import './LoginPage.css';
import Button from "../Button/Button";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { globImg } from "../../images/images";
import SectionTitle from "../SectionTitle/SectionTitle";
// import ParticleSliderComponent from "../AnimLogo/AnimLogo";
import AnimLogo from "../AnimLogo/AnimLogo.tsx";
import './LoginPage.css'
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { eyeIcon } from "../../iconFolder/icon.js";
import { useState } from "react";

function LoginPage({setUser, setPage, user}) {

    const [viewPassword, setViewPassword] = useState(true)

    const { t, i18n } = useTranslation();

    const {pathname} = useLocation()

    const  validationSchema = yup.object().shape({
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
                email: '',
                password: '',
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
                <div className="login">
                    <div className="container">
                            <form className="log-form"  onSubmit={handleSubmit}>
                                <SectionTitle title={t('reg_and_log.'+ '1')}/>

                            <div className="email-inp">
                                <input type="email" name="email" placeholder={t('reg_and_log.'+ '3')} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="password-inp">
                                <input type={viewPassword ? 'password' : 'text'} name="password" placeholder={t('reg_and_log.'+ '5')} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                <span onClick={()=> setViewPassword(!viewPassword)}>{eyeIcon}</span>
                                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                            </div>

                            {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                            <SubmitBtn index= "0"/>
                            <h6>{t('reg_and_log.'+ '8')}  <NavLink to={'/registr'}>{t('reg_and_log.'+ '10')}</NavLink></h6>
                        </form>
                        {pathname === '/login' && 
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


export default LoginPage