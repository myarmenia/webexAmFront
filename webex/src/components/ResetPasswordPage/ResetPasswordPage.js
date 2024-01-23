import React, { useEffect, useRef } from 'react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import './ResetPasswordPage.css'
import instance from '../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { postResetPasswordPage } from '../../store/slices/PasswordResetPageSlice/PasswordResetPageApi'
import { selectResetPasswordPage } from '../../store/slices/PasswordResetPageSlice/PasswordResetPageSlice'
import { postNewPassword } from '../../store/slices/NewPasswordeSlise/NewPasswordeApi'
import { selectNewPassword } from '../../store/slices/NewPasswordeSlise/NewPasswordeSlise'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import MessageModal from '../MessageModal/MessageModal'

function ResetPasswordPage() {
    const { t, i18n } = useTranslation();
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const respResetPass = useSelector(selectResetPasswordPage)
    const respNewPass = useSelector(selectNewPassword)

    const leng = localStorage.getItem('lang')


    useEffect(() => {
        const window_token = window.location.href.split('/')
        const renderObj = {
            token: window_token[5],
            email: window_token[6]
        }

        dispatch(postResetPasswordPage(renderObj))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()

        const window_token = window.location.href.split('/')

        const [password, confirmPassword] = formRef.current
        const newPasswordeObj = {
            email: window_token[5],
            password: password.value,
            confirmPassword: confirmPassword.value
        }


        if (password.value === confirmPassword.value) {
            dispatch(postNewPassword(newPasswordeObj))
        }

        respNewPass && navigate('/login')
    }
    return (
        <div className='reset-password-page'>
            {
                respResetPass?.message ? <div className='container'>
                    <h5>{t('reg_and_log.' + '18')}</h5>
                    <form ref={formRef} className='reset-password-form' onSubmit={handleSubmit}>
                        <input type="password" placeholder={t('reg_and_log.' + '5')} />
                        <input type="password" placeholder={t('reg_and_log.' + '6')} />
                        <SubmitBtn index={'2'} />
                    </form>
                </div> :
                <MessageModal txt={t('resetPasswordModalError_message')} path={`/${leng}/login`} />

            }
        </div>
    )
}

export default ResetPasswordPage