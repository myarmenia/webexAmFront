import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';
import './SendMessageModal.css'
import { postFeedBack } from '../../../store/slices/FeedbackSlice/FeedbackApi';
import { selectFeedBAck } from '../../../store/slices/FeedbackSlice/FeedbackSlice';

function SendMessageModal() {
    
    const { t, i18n } = useTranslation()

    const dispatch = useDispatch()
    const respFeedBack = useSelector(selectFeedBAck)

    const [showMessage, setShowMessage] = useState(false); // Նոր state

    useEffect(() => {
        if (respFeedBack?.data?.message) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false); // 4 վայրկյանից թաքցնել հաղորդագրությունը
            }, 4000);

            return () => clearTimeout(timer); // Cleanup՝ եթե կոմպոնենտը unmount լինի
        }
    }, [respFeedBack]);

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.' + '0')),
        email: yup.string().email(t('validation_reg_log.' + '1')).required(t('validation_reg_log.' + '0')),
        message: yup.string()
            .required(t('validation_reg_log.' + '0')),
    })

    function handleSendMessage(e, handleSubmit, isValid, dirty) {
        e.preventDefault()
        handleSubmit()

        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            const feedBackObj = {
                name: e.target[0].value,
                email: e.target[1].value,
                message: e.target[2].value
            }

            dispatch(postFeedBack(feedBackObj))
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                }}
                validateOnBlur
                validationSchema={validationSchema}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="send_message_feedback">
                            <form className="send_message_feedback_form" onSubmit={(e) => handleSendMessage(e, handleSubmit, isValid, dirty)}>
                                <h4>Գրեք ձեր հարցը այստեղ եվ մեր օպերատորը կպատասխանի ձեզ հնարավորինս շուտ</h4>

                                <div className="name-inp">
                                    <input type="text" name="name" placeholder={t('feedback.0')} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                </div>

                                <div className="email-inp">
                                    <input type="email" name="email" placeholder={t('feedback.1')} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                    {touched.email && errors.email && <p className="error">{errors.email}</p>}
                                </div>

                                <div className="message-inp">
                                    <textarea name="message" placeholder={t('feedback.2')} value={values.message} onChange={handleChange} onBlur={handleBlur} />
                                    {touched.message && errors.message && <p className="error">{errors.message}</p>}
                                </div>

                                {showMessage && <p className='send_message_feedback_success'>{respFeedBack.data.message}</p>} {/* Ավելացրեցի showMessage ստուգումը */}

                                <button className="send_message_btn_email">{t('reg_log.3')}</button>
                            </form>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

export default SendMessageModal
