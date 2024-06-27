import React, { useRef, useState } from 'react'
import "./OrderModal.css"
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../../store/slices/OrderSlice/OrderApi'
import { selectOrder } from '../../store/slices/OrderSlice/OrderSlice'
import axios from 'axios'
import { fileIcon } from '../../iconFolder/icon'
import MessageModal from '../MessageModal/MessageModal'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from 'formik'
import * as yup from 'yup';

function OrderModal({ setOpenOrderModal, setMessageModal, currentProject, addres }) {
    const { t, i18n } = useTranslation()

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.' + '0')),
        phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.' + '5')).required(t('validation_reg_log.' + '0')),
        email: yup.string().email(t('validation_reg_log.' + '1')).required(t('validation_reg_log.' + '0')),
        webSiteAddres: yup.string(),
        message: yup.string(),
        fileName: yup.string()
    })

    const [file, setFile] = useState("");
    const [textValue, setTextValue] = useState('');

    const { pathname } = useLocation()

    const leng = localStorage.getItem('lang')

    const dispatch = useDispatch()

    const respOrder = useSelector(selectOrder)

    const captchaRef = useRef(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setTextValue(selectedFile ? selectedFile.name : '');
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };


    const handleCloseModal = (e, handleSubmit, isValid) => {
        e.preventDefault()
        handleSubmit()
        const [name, phone, email, site, comment, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10] = e.target

        const checkArr = [check1, check2, check3, check4, check5, check6, check7, check8, check9, check10]

        const orderObj = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value,
            domain: site.value,
            projectType: checkArr.map(el => el.checked && el.name).filter(el => el !== false)
        }

        const orderObj2 = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value,
            domain: site.value,
            projectType: checkArr.map(el => el.checked && el.name).filter(el => el !== false),
            project: currentProject
        }


        const jsonOrderObj = JSON.stringify(orderObj)
        const jsonOrderObj2 = JSON.stringify(orderObj2)
        const formData = new FormData();

        formData.append('file', file);
        if (pathname == `/${leng}/programing`) {
            formData.append('data', jsonOrderObj2);
        }
        else {
            formData.append('data', jsonOrderObj);
        }

        const token = captchaRef.current.getValue();


        if (name.value && phone.value && email.value && token && isValid) {
            dispatch(postOrder(formData))
            setOpenOrderModal(false)
            setMessageModal(true)
            e.target.reset()
            captchaRef.current.reset();
        }
    }
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


                        resetForm()
                    }}

                    validateOnBlur

                    validationSchema={validationSchema}
                >

                    {
                        ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className="order-modal-form-div">
                                <form className="order-modal-form" onSubmit={(e) => handleCloseModal(e, handleSubmit, isValid, dirty)}>

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

                                        {
                                            addres !== 'false' && (
                                                <div className="webSite-inp">
                                                    <input type="text" name="webSiteAddres" placeholder={t('orderForm.3')} value={values.webSiteAddres} onChange={handleChange} onBlur={handleBlur} />
                                                    {touched.webSiteAddres && errors.webSiteAddres && <p className="error">{errors.webSiteAddres}</p>}
                                                </div>
                                            )
                                        }

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
                                                <div>
                                                    <input id='check1' type="checkbox" name='Corporate website development' />
                                                    <label htmlFor="check1">{t('orderForm.6')}</label>
                                                </div>

                                                <div>
                                                    <input id='check2' type="checkbox" name='Search engine optimization (SEO)' />
                                                    <label htmlFor="check2">{t('orderForm.7')}</label>
                                                </div>

                                                <div>
                                                    <input id='check3' type="checkbox" name='Website development' />
                                                    <label htmlFor="check3">{t('orderForm.8')}</label>
                                                </div>

                                                <div>
                                                    <input id='check4' type="checkbox" name='E-mail marketing' />
                                                    <label htmlFor="check4">{t('orderForm.9')}</label>
                                                </div>

                                                <div>
                                                    <input id='check5' type="checkbox" name='Google analytics' />
                                                    <label htmlFor="check5">{t('orderForm.10')}</label>
                                                </div>

                                                <div>
                                                    <input id='check6' type="checkbox" name='Online stores development' />
                                                    <label htmlFor="check6">{t('orderForm.11')}</label>
                                                </div>

                                                <div>
                                                    <input id='check7' type="checkbox" name='Contextual advertising' />
                                                    <label htmlFor="check7">{t('orderForm.12')}</label>
                                                </div>

                                                <div>
                                                    <input id='check8' type="checkbox" name='Technical website support' />
                                                    <label htmlFor="check8">{t('orderForm.13')}</label>
                                                </div>

                                                <div>
                                                    <input id='check9' type="checkbox" name='Invitation card' />
                                                    <label htmlFor="check9">{t('orderForm.14')}</label>
                                                </div>

                                                <div>
                                                    <input id='check10' type="checkbox" name='Business process automation' />
                                                    <label htmlFor="check10">{t('orderForm.15')}</label>
                                                </div>


                                            </div>

                                        </div>

                                        <ReCAPTCHA
                                            style={{ alignItems: 'center' }}
                                            ref={captchaRef}
                                            sitekey="6Lcc1l8pAAAAAI_bws4kEJ478msd2uBdRfZT4m2e"
                                        />

                                    </div>

                                    <SubmitBtn index="3" />
                                </form>
                            </div>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default OrderModal



