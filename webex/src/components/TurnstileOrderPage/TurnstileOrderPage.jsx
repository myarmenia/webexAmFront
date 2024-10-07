import React, { useState, useEffect } from 'react';
import './TurnstileOrderPage.css';
import { turnstileMailIcon, turnstilePhoneIcon } from '../../iconFolder/icon';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postFeedBack } from '../../store/slices/FeedbackSlice/FeedbackApi';
import { selectFeedBAck } from '../../store/slices/FeedbackSlice/FeedbackSlice';

function TurnstileOrderPage() {
    const { t, i18n } = useTranslation();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const selectmessage = useSelector(selectFeedBAck);

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (selectmessage?.data?.message) {
            setShowMessage(true);

            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000); // 5 seconds

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [selectmessage]);

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.0')),
        email: yup.string().email(t('validation_reg_log.1')).required(t('validation_reg_log.0')),
        message: yup.string().required(t('validation_reg_log.0')),
        phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.5')).required(t('validation_reg_log.0')),
    });

    function handleOrder(e, handleSubmit, isValid, dirty) {
        e.preventDefault();
        handleSubmit();

        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            const feedBackObj = {
                name: e.target[0].value,
                email: e.target[1].value +', ' + e.target[2].value,
                phone: e.target[2].value,
                message: e.target[3].value,
            };

            dispatch(postFeedBack(feedBackObj));
        }
    }

    return (
        <div className="turnstile_order_page">
            <div className="turnstile_order_page_top">
                <div className="container">
                    <div className="turnstile_order_page_top_contact">
                        <span>{turnstilePhoneIcon}</span>
                        <a href="tel:+374 96 10 10 17">+374 96 10 10 17</a>
                        <a href="tel:+374 95 27 77 62">+374 95 27 77 62</a>
                        <a href="tel:+374 96 40 00 73">+374 96 40 00 73</a>
                        <span>{turnstileMailIcon}</span>
                        <a href="mailto:info@webex.am">info@webex.am</a>
                    </div>

                    <h3>{t('turnstileOrder') + '  ' + search.split('=')[1]}</h3>
                </div>
            </div>

            <div className="turnstile_order_page_bottom">
                <div className="container">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                            phone: '',
                        }}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                        }}
                        validateOnBlur
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className="turstile_feedback_form_div">
                                <form className="turstile_feedback_form" onSubmit={(e) => handleOrder(e, handleSubmit, isValid, dirty)}>
                                    <div className="name-inp">
                                        <p>{t('feedback.0')}</p>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                    </div>

                                    <div className="email-inp">
                                        <p>{t('feedback.1')}</p>
                                        <input
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.email && errors.email && <p className="error">{errors.email}</p>}
                                    </div>

                                    <div className="phone-inp">
                                        <p>{t('reg_and_log.4')}</p>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                                    </div>

                                    <div className="message-inp">
                                        <p>{t('feedback.2')}</p>
                                        <textarea
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.message && errors.message && <p className="error">{errors.message}</p>}
                                    </div>

                                    {showMessage && selectmessage?.data?.message && (
                                        <p style={{ color: 'white' }}>{selectmessage?.data?.message}</p>
                                    )}

                                    <button>{t('button.2')}</button>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default TurnstileOrderPage;
