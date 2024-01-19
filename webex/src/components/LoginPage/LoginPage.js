import { Formik } from "formik";
import * as yup from 'yup';
import './LoginPage.css';
import Button from "../Button/Button";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { globImg } from "../../images/images";
import SectionTitle from "../SectionTitle/SectionTitle";
// import ParticleSliderComponent from "../AnimLogo/AnimLogo";
import AnimLogo from "../AnimLogo/AnimLogo.tsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { eyeIcon } from "../../iconFolder/icon.js";
import { useRef, useState } from "react";
import { postLogin } from "../../store/slices/LoginSlice/LoginApi.js";
import { useSelector, useDispatch } from 'react-redux'
import './LoginPage.css'
import { selectLogin, setLogin } from "../../store/slices/LoginSlice/LoginSlice.js";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal.js";
import MessageModal from "../MessageModal/MessageModal.js";
function LoginPage() {

    const [viewPassword, setViewPassword] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    const { t, i18n } = useTranslation();

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const respLogin = useSelector(selectLogin)
    console.log(respLogin)
    const leng = localStorage.getItem('lang')
    
    const  validationSchema = yup.object().shape({
        email: yup.string().email(t('validation_reg_log.'+ '1')).required(t('validation_reg_log.'+ '0')),
        password: yup.string()
        .required(t('validation_reg_log.'+ '0')),
    })

    function handleLogSub(e,handleSubmit, isValid , dirty) {
        e.preventDefault()
        if (e.target[0].value && e.target[1].value){
            handleSubmit()
            Object.keys(respLogin?.data.authUser || {}).length == 0  && navigate('/profilePage')
            console.log(Object.keys(respLogin?.data.authUser || {}).length !== 0,555555555555);
            dispatch(postLogin({email: e.target[0].value, password: e.target[1].value}))
        }
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}

            onSubmit={(values, {resetForm})=>{
               
            
                resetForm()
            }}

            validateOnBlur

            validationSchema={validationSchema}
        >
        
        {
            ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                <div className="login">
                    <div className="container">
                            <form className="log-form"  onSubmit={(e)=>handleLogSub(e,handleSubmit, isValid, dirty)}>
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
                            <h6>{t('reg_and_log.'+ '8')}  <NavLink to={`/${leng}/registr`}>{t('reg_and_log.'+ '10')}</NavLink></h6>
                            <h5>{t('reg_and_log.'+ '14')} <span onClick={()=> setOpenModal(true)}>{t('reg_and_log.'+ '15')}</span></h5>
                        </form>
                        
                            <div className="log_img_div">
                                <AnimLogo/>
                             </div>


                            {
                                openModal && <ChangePasswordModal setOpenModal={setOpenModal} openModal={openModal}/>
                            }
                    </div>
                </div>
            )
        }
        </Formik>
    )
}


export default LoginPage