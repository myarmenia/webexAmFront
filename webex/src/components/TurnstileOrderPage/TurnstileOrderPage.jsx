import React, { useState, useEffect, useMemo } from 'react';
import './TurnstileOrderPage.css';
import { turnstileIcon1, turnstileIcon2, turnstileMailIcon, turnstilePhoneIcon, validIcon } from '../../iconFolder/icon';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postFeedBack } from '../../store/slices/FeedbackSlice/FeedbackApi';
import { selectFeedBAck } from '../../store/slices/FeedbackSlice/FeedbackSlice';
import { turnstileData } from '../../data';

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
        message: yup.string(),
        phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.5')),
        turnstile_type: yup.string().required(t('validation_reg_log.0')), // Validation for the radio button
    });

    function handleOrder(e, handleSubmit, isValid, dirty) {
        e.preventDefault();
        handleSubmit();

        const turnstileType = e.target.turnstile_type.value === 'oneway' ? 'միակողմանի' : 'երկողմանի';

        if (e.target[2].value && e.target[3].value && e.target[4].value && 
            (e.target[0].value || e.target[1].value) && isValid) {
                
            const feedBackObj = {
                name: e.target[2].value,
                email: e.target[3].value + ', ' + e.target[4].value + ', ' + turnstileType,
                phone: e.target[4].value,
                message: e.target[5].value,
            };
            dispatch(postFeedBack(feedBackObj));
        } 

    }

    const findItem = useMemo(()=> {
        return turnstileData.find((item) => item.id === search.split('=')[1])
    },[])
    
    
    return (
        <div className="turnstile_order_page">
            <div className="turnstile_order_page_top">
                <div className="container">
                    <div className="turnstile_order_page_top_contact">
                        <h3>{t('turnstileOrderTitle')}</h3>

                        <div className='turnstile_order_page_top_contact_block'>
                            <div className='turnstile_order_page_top_contact_left'>
                                <span>{turnstilePhoneIcon}</span>
                                <div className='turnstile_order_page_top_contact_phone'>
                                    <a href="tel:+374 96 10 10 17">+374 96 10 10 17</a>
                                    <a href="tel:+374 95 27 77 62">+374 95 27 77 62</a>
                                    <a href="tel:+374 96 40 00 73">+374 96 40 00 73</a>
                                </div>
                            </div>

                            <div className='turnstile_order_page_top_contact_right'>
                                <span>{turnstileMailIcon}</span>
                                <a href="mailto:info@webex.am">info@webex.am</a>
                            </div>
                        </div>
                    </div>

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
                            turnstile_type: '' 
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

                                    <div className='turstile_feedback_form_title_line'>
                                        <img src={findItem.img} alt="" />
                                        <div className='turstile_feedback_form_title_line_block'>
                                            <h3>{findItem.code}</h3>
                                            <div className='turstile_feedback_form_title_line_block_radio'>
                                                <label className='turstile_feedback_form_title_line_block_radio_1'>
                                                    <input type="radio" name='turnstile_type' value="oneway" onChange={handleChange} onBlur={handleBlur}/>
                                                    <span>{turnstileIcon1}</span>
                                                    <span>{t('turnstileType.0')}</span>
                                                    <span>{findItem.price1} AMD</span>
                                                </label>

                                                <label className='turstile_feedback_form_title_line_block_radio_2'>
                                                    <input type="radio" name='turnstile_type' value="twoway" onChange={handleChange} onBlur={handleBlur}/>
                                                    <span>{turnstileIcon2}</span>
                                                    <span>{t('turnstileType.1')}</span>
                                                    <span>{findItem.price2} AMD</span>
                                                </label>
                                            </div>

                                            
                                            {touched.turnstile_type && errors.turnstile_type && <p className="error"> <span>{validIcon}</span> <span>{errors.turnstile_type}</span></p>}

                                        </div>
                                    </div>

                                    
                                    <div className="name-inp">
                                        <p>{t('feedback.0')}</p>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.name && errors.name && <p className="error"> <span>{validIcon}</span> <span>{errors.name}</span></p>}
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
                                        {touched.email && errors.email && <p className="error"> <span>{validIcon}</span> <span>{errors.email}</span></p>}
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
                                        {touched.phone && errors.phone && <p className="error"> <span>{validIcon}</span> <span>{errors.phone}</span></p>}
                                    </div>

                                    <div className="message-inp">
                                        <p>{t('feedback.2')}</p>
                                        <textarea
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.message && errors.message && <p className="error"> <span>{validIcon}</span> <span>{errors.message}</span></p>}
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
