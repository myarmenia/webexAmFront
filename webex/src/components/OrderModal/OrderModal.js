import React, { useEffect, useRef, useState } from 'react';
import "./OrderModal.css";
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../store/slices/OrderSlice/OrderApi';
import { selectOrder } from '../../store/slices/OrderSlice/OrderSlice';
import { fileIcon } from '../../iconFolder/icon';
import MessageModal from '../MessageModal/MessageModal';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from 'formik';
import * as yup from 'yup';

function OrderModal({ setOpenOrderModal, setMessageModal, currentProject, addres, openOrderModal }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const respOrder = useSelector(selectOrder);
    const { pathname } = useLocation();
    const captchaRef = useRef(null);
    
    const [file, setFile] = useState("");
    const [textValue, setTextValue] = useState('');
    const [captchaError, setCaptchaError] = useState(false);
    
    const validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.0')),
        phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.5')).required(t('validation_reg_log.0')),
        email: yup.string().email(t('validation_reg_log.1')).required(t('validation_reg_log.0')),
        webSiteAddres: yup.string(),
        message: yup.string(),
        fileName: yup.string()
    });

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setTextValue(selectedFile ? selectedFile.name : '');
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleCloseModal = (e, handleSubmit, isValid) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();

        if (!token) {
            setCaptchaError(true);
            return;
        }

        setCaptchaError(false);
        handleSubmit();

        const [name, phone, email, site, comment, ...checkboxes] = e.target;
        const checkArr = checkboxes.map(checkbox => checkbox.checked && checkbox.name).filter(Boolean);
        const orderObj = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value,
            domain: site.value,
            projectType: checkArr,
            project: currentProject
        };

        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify(orderObj));

        if (isValid) {
            dispatch(postOrder(formData));
            setOpenOrderModal(false);
            setMessageModal(true);
            e.target.reset();
            captchaRef.current.reset();
        }
    };

    useEffect(() => {
        document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [openOrderModal]);

    return (
        <div className='order-modal' onClick={() => setOpenOrderModal(false)}>
            <div className='order-modal-block' onClick={(e) => e.stopPropagation()}>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        webSiteAddres: '',
                        message: '',
                        file: '',
                        check: []
                    }}
                    onSubmit={(values, { resetForm }) => {
                        resetForm();
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="order-modal-form-div">
                            <form className="order-modal-form" onSubmit={(e) => handleCloseModal(e, handleSubmit, isValid)}>
                                <div className='order-modal-full-div'>
                                    <div className='order-modal-block-info-div'>
                                        <h3>{t('orderFormTitle.0')}</h3>
                                        <span>{t('orderFormTitle.1')}</span>
                                    </div>
                                    <div className="name-inp">
                                        <input type="text" name="name" placeholder={t('orderForm.0')} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                        {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                    </div>
                                    <div className="phone-inp">
                                        <input type="text" name="phone" placeholder={t('orderForm.1')} value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                        {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                                    </div>
                                    <div className="email-inp">
                                        <input type="email" name="email" placeholder={t('orderForm.2')} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        {touched.email && errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                    {addres !== 'false' && (
                                        <div className="webSite-inp">
                                            <input type="text" name="webSiteAddres" placeholder={t('orderForm.3')} value={values.webSiteAddres} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.webSiteAddres && errors.webSiteAddres && <p className="error">{errors.webSiteAddres}</p>}
                                        </div>
                                    )}
                                    <div className="message-inp">
                                        <textarea name="message" placeholder={t('orderForm.4')} value={values.message} onChange={handleChange} onBlur={handleBlur} />
                                        {touched.message && errors.message && <p className="error">{errors.message}</p>}
                                    </div>
                                    <div className='input-text-div upload-file-div'>
                                        <label className='fileIcon' htmlFor="fileInput">{fileIcon}</label>
                                        <input style={{ display: 'none' }} type="file" id="fileInput" onChange={handleFileChange} />
                                        <input type="text" id="textInput" value={textValue} onChange={handleTextChange} placeholder={t('orderForm.5')} />
                                    </div>
                                    <div className='checkbox-div'>
                                        <span>{t('orderFormTitle.2')}</span>
                                        <div className='checkobox-items'>
                                            {[...Array(10).keys()].map(i => (
                                                <div key={i}>
                                                    <input id={`check${i+1}`} type="checkbox" name={`Checkbox option ${i+1}`} />
                                                    <label htmlFor={`check${i+1}`}>{t(`orderForm.${6 + i}`)}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <ReCAPTCHA
                                        style={{ alignItems: 'center' }}
                                        ref={captchaRef}
                                        sitekey="6Lcc1l8pAAAAAI_bws4kEJ478msd2uBdRfZT4m2e"
                                        onChange={() => setCaptchaError(false)}
                                    />
                                    {captchaError && <p className="error_captcha">{t('validation_reg_log.0')}</p>}
                                </div>
                                <SubmitBtn index="3" />
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default OrderModal;
