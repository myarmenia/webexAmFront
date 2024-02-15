import React, { useState } from 'react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import * as yup from 'yup';
import { Formik } from 'formik'
import './TelUs.css'
import { fileIcon } from '../../iconFolder/icon';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { postTellUs } from '../../store/slices/TellUsSlice/TellUsApi';
import { selectTellUs, selectTellUsLoading } from '../../store/slices/TellUsSlice/TellUsSlice';
import MessageModal from '../MessageModal/MessageModal';

function TelUs() {
    const [messageModal, setMessageModal] = useState(false)

    const respTellUs = useSelector(selectTellUs)

    const loading = useSelector(selectTellUsLoading)
    const {t, i18n} = useTranslation()

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

  const  validationSchema = yup.object().shape({
    name: yup.string().required(t('validation_reg_log.' + '0')),
    phone: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.'+ '5')).required(t('validation_reg_log.'+ '0')),
    email: yup.string().email(t('validation_reg_log.' + '1')).required(t('validation_reg_log.' + '0')),
    webSiteAddres: yup.string(),
    message: yup.string(),
    fileName: yup.string()
})

  function handleSub(e,handleSubmit, isValid , dirty) {
    e.preventDefault()
    const [name, phone, email, webSiteAddres,  message] = e.target


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
            <div className='tel-us-title'>
                <h3>{t('orderFormTitle.0')}</h3>
                <h5>{t('orderFormTitle.1')}</h5>
            </div>

            <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                webSiteAddres: '',
                message: '',
                file: '', 
            }}

            onSubmit={(values, {resetForm})=>{
               
            
                resetForm()
            }}

            validateOnBlur

            validationSchema={validationSchema}
        >
        
        {
            ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                <div className="tel-us-form-div">
                            <form className="tel-us-form"  onSubmit={(e)=>handleSub(e,handleSubmit, isValid, dirty)}>

                            <div className="name-inp">
                                <input type="text" name="name" placeholder={t('orderForm.0')} value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="phone-inp">
                                <input type="text" name="phone" placeholder={t('orderForm.1')} value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                            </div>

                            <div className="email-inp">
                                <input type="email" name="email" placeholder={t('orderForm.2')} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="webSite-inp">
                                <input type="text" name="webSiteAddres" placeholder={t('orderForm.3')} value={values.webSiteAddres} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.webSiteAddres && errors.webSiteAddres && <p className="error">{errors.webSiteAddres}</p>}
                            </div>

                            <div className="message-inp">
                                <textarea  name="message" placeholder={t('orderForm.4')} value={values.message} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.message && errors.message && <p className="error">{errors.message}</p>}
                            </div>

                            <div className='input-text-div upload-file-div'>
                              <label className='fileIcon' htmlFor="fileInput2">{fileIcon}</label>
                              <input style={{display: 'none'}} type="file" id="fileInput2" onChange={handleFileChange} />
                              <input type="text" id="textInput" value={textValue} onChange={handleTextChange} placeholder={t('orderForm.5')}/>
                            </div>

                            <SubmitBtn index= "3"/>
                        </form>
                </div>
            )
        }
        </Formik>
        </div>
        {messageModal && <MessageModal txt={respTellUs?.data?.message} {...{setMessageModal}} loading={loading}/>}
    </div>
  )
}

export default TelUs