import React, { useEffect, useRef, useState } from 'react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import './ResetPasswordPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { postResetPasswordPage } from '../../store/slices/PasswordResetPageSlice/PasswordResetPageApi'
import { selectResetPasswordPage, selectResetPasswordPageLoading } from '../../store/slices/PasswordResetPageSlice/PasswordResetPageSlice'
import { postNewPassword } from '../../store/slices/NewPasswordeSlise/NewPasswordeApi'
import { selectNewPassword, selectNewPasswordLoading } from '../../store/slices/NewPasswordeSlise/NewPasswordeSlise'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MessageModal from '../MessageModal/MessageModal'
import { eyeIcon } from '../../iconFolder/icon'
import { Formik } from 'formik'
import * as yup from 'yup';

function ResetPasswordPage() {
    const { t, i18n } = useTranslation();
    const [viewPassword, setViewPassword] = useState(true)
    const [viewConfirmPassword, setConfirmViewPassword] = useState(true)
    const [messageModal, setMessageModal] = useState(false)
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const respResetPass = useSelector(selectResetPasswordPage)
    const respNewPass = useSelector(selectNewPassword)
    const loading = useSelector(selectResetPasswordPageLoading)
    const newPassLoading = useSelector(selectNewPasswordLoading)


    const validationSchema = yup.object().shape({
        password: yup.string()
            .matches(/[0-9]/, t('validation_reg_log.' + '2'))
            .matches(/[a-z]/, t('validation_reg_log.' + '3'))
            .required(t('validation_reg_log.' + '0')),
        confirmPassword: yup.string().oneOf([yup.ref('password')], t('validation_reg_log.' + '4')).required(t('validation_reg_log.' + '0')),

    })

    const leng = localStorage.getItem('lang')

    useEffect(() => {
        const window_token = window.location.href.split('/')
        const renderObj = {
            token: window_token[5],
            email: window_token[6]
        }

        dispatch(postResetPasswordPage(renderObj))
    }, [])


    const handleResetPass = (e, handleSubmit) => {
        e.preventDefault();
        handleSubmit();
        const window_token = window.location.href.split('/');
    
    
            const [password, confirmPassword] = e.target;
            const newPasswordeObj = {
                email: window_token[6],
                password: password.value,
                confirmPassword: confirmPassword.value
            }
            
            if(password.value && confirmPassword.value){
                dispatch(postNewPassword(newPasswordeObj));
                setMessageModal(true);
            }
    }
    
    return (
        <div className='reset-password-page'>
            {
                loading ? (
                    <span class="loader"></span>
                ) : respResetPass.data.success ? (
                    <div className='container'>
                        <h5>{t('reg_and_log.' + '18')}</h5>
                        <Formik
                            initialValues={{
                                confirmPassword: '',
                                password: '',
                            }}

                            onSubmit={(values, { resetForm }) => {


                                resetForm()
                            }}

                            validateOnBlur

                            validationSchema={validationSchema}
                        >

                            {
                                ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                    <form className="reset-password-form" onSubmit={(e) => handleResetPass(e, handleSubmit)}>

                                        <div className="reset-password-inp">
                                            <input type={viewPassword ? 'password' : 'text'} name="password" placeholder={t('reg_and_log.' + '5')} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                            <span onClick={() => setViewPassword(!viewPassword)}>{eyeIcon}</span>
                                            {touched.password && errors.password && <p className="error">{errors.password}</p>}
                                        </div>

                                        <div className="confirm-password-inp">
                                            <input type={viewConfirmPassword ? 'password' : 'text'} name="confirmPassword" placeholder={t('reg_and_log.' + '6')} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                                            <span onClick={() => setConfirmViewPassword(!viewConfirmPassword)}>{eyeIcon}</span>
                                            {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                                        </div>

                                        {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                                        <SubmitBtn index="0" />
                                    </form>
                                )
                            }
                        </Formik>
                    </div>
                ) : (
                    <MessageModal txt={t('resetPasswordModalError_message')} path={`/${leng}/login`} />
                )
            }

            {messageModal && <MessageModal txt={respNewPass.data.message} path={`/${leng}/login`} {...{ setMessageModal }} loading={newPassLoading} />}
        </div>
    )
}

export default ResetPasswordPage