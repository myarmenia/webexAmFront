import React, { useState } from 'react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import * as yup from 'yup';
import { Formik } from 'formik'
import './TelUs.css'
import { fbIcon_tell_us, fileIcon, instaIcon_tell_us, linkdinIcon_tell_us, locationIcon_tell_us, mailIcon_tell_us, telIcon_tell_us } from '../../iconFolder/icon';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { postTellUs } from '../../store/slices/TellUsSlice/TellUsApi';
import { selectTellUs, selectTellUsLoading } from '../../store/slices/TellUsSlice/TellUsSlice';
import MessageModal from '../MessageModal/MessageModal';

function TelUs() {
    const [messageModal, setMessageModal] = useState(false)

    const respTellUs = useSelector(selectTellUs)

    const loading = useSelector(selectTellUsLoading)
    const { t, i18n } = useTranslation()

    const [file, setFile] = useState("");
    const [textValue, setTextValue] = useState('');

    const dispatch = useDispatch()

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setTextValue(selectedFile ? selectedFile.name : '');
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.' + '0')),
        phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.' + '5')).required(t('validation_reg_log.' + '0')),
        email: yup.string().email(t('validation_reg_log.' + '1')).required(t('validation_reg_log.' + '0')),
        webSiteAddres: yup.string(),
        message: yup.string(),
        fileName: yup.string()
    })

    function handleSub(e, handleSubmit, isValid, dirty) {
        e.preventDefault()
        const [name, phone, email, webSiteAddres, _file, _fileInp, message] = e.target

        

        const orderObj = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
            domain: webSiteAddres.value,
        }

        const jsonOrderObj = JSON.stringify(orderObj)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', jsonOrderObj);

        handleSubmit()

        if (name.value && phone.value && email.value && isValid) {
            dispatch(postTellUs(formData))
            setMessageModal(true)
            setTextValue('')
        }
    }

    return (
        <div className='tel-us'>
            <div className='container'>
                <div className="tel-us-block">
                    <Formik
                        initialValues={{
                            name: '',
                            phone: '',
                            email: '',
                            webSiteAddres: '',
                            message: '',
                            file: '',
                        }}

                        onSubmit={(values, { resetForm }) => {


                            resetForm()
                        }}

                        validateOnBlur

                        validationSchema={validationSchema}
                    >

                        {
                            ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <div className="tel-us-form-div">
                                    <div className='tel-us-title'>
                                        <h3>{t('orderFormTitle.0')}</h3>
                                        <p>{t('tell_us_sub_title')}</p>
                                    </div>
                                    <form className="tel-us-form" onSubmit={(e) => handleSub(e, handleSubmit, isValid, dirty)}>

                                        <div className='tel-us-form-inps'>
                                            <div className="name-inp">
                                                <h4 className='input_tile'>{t('orderForm.0')}</h4>
                                                <input type="text" name="name"  value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                            </div>

                                            <div className="phone-inp">
                                                <h4 className='input_tile'>{t('orderForm.1')}</h4>
                                                <input type="text" name="phone"  value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                                            </div>
                                        </div>

                                        <div className='tel-us-form-inps'>
                                            <div className="email-inp">
                                                <h4 className='input_tile'>{t('orderForm.2')}</h4>
                                                <input type="email" name="email"  value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                                            </div>

                                            <div className="webSite-inp">
                                                <h4 className='input_tile'>{t('orderForm.3')}</h4>
                                                <input type="text" name="webSiteAddres"  value={values.webSiteAddres} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.webSiteAddres && errors.webSiteAddres && <p className="error">{errors.webSiteAddres}</p>}
                                            </div>
                                        </div>

                                        <div className='input-text-div upload-file-div'>
                                            <h4 className='input_tile'>{t('orderForm.5')}</h4>
                                            <label className='fileIcon' htmlFor="fileInput2">{fileIcon}</label>
                                            <input style={{ display: 'none' }} type="file" id="fileInput2" onChange={handleFileChange} />
                                            <input type="text" id="textInput" value={textValue} onChange={handleTextChange} />
                                        </div>

                                        <div className="message-inp">
                                            <h4 className='input_tile'>{t('orderForm.4')}</h4>
                                            <textarea name="message"  value={values.message} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.message && errors.message && <p className="error">{errors.message}</p>}
                                        </div>

                                        
                                        <button className='tel_us_btn'>{t('reg_log.3')}</button>
                                    </form>
                                </div>
                            )
                        }
                    </Formik>

                    <div className='tel-us-right-div'>
                        <h3>{t('tell_us_right_block_titles.0')}</h3>

                        <div className='tel-us-right-div-location'>
                            <span>{locationIcon_tell_us}</span>
                            <a href="https://www.google.com/maps/place/79+%D5%84%D5%A1%D6%80%D5%B7%D5%A1%D5%AC+%D4%B2%D5%A1%D5%B2%D6%80%D5%A1%D5%B4%D5%B5%D5%A1%D5%B6%D5%AB+%D5%BA%D5%B8%D5%B2%D5%B8%D5%BF%D5%A1,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0033/@40.1956506,44.4919674,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd98a7cf7d11:0xfbd1c95b36d7c13!8m2!3d40.1956465!4d44.4945423!16s%2Fg%2F11y3x170zy?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D" target="_blank">{t('tell_us_right_block_location')}</a>
                        </div>

                        <div className="tel-us-right-div-phone">
                            <span>{telIcon_tell_us}</span>
                            <a href="tel:+37496101017">+(374) 96 10 10 17</a>
                            <a href="tel:+37495277762">+(374) 95 27 77 62</a>
                            <a href="tel:+37496400073">+(374) 96 40 00 73</a>
                        </div>

                        <div className="tel-us-right-div-email">
                            <span>{mailIcon_tell_us}</span>
                            <a href="mailto:Info@webex.am">Info@webex.am</a>
                        </div>

                        <div className="tel-us-right-div-social-media">
                            <span>{t('tell_us_right_block_titles.1')}</span>
                            <div className='tel-us-right-div-social-media-div'>
                                <a href="https://www.facebook.com/webexarmenia" target='_blanc'>{fbIcon_tell_us}</a>
                                <a href="https://www.instagram.com/webex.am/" target='_blanc'>{instaIcon_tell_us}</a>
                                <a href="https://www.linkedin.com/groups/13856890/" target='_blanc'>{linkdinIcon_tell_us}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {messageModal && <MessageModal txt={respTellUs?.data?.message} {...{ setMessageModal }} loading={loading} />}
        </div>
    )
}

export default TelUs