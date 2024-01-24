import React, { useState } from 'react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import * as yup from 'yup';
import { Formik } from 'formik'
import './TelUs.css'
import { fileIcon } from '../../iconFolder/icon';
import { useDispatch } from 'react-redux';

function TelUs() {

    const [file, setFile] = useState(null);
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
    name: yup.string().required('այս դաշտը պարտադիր է'),
    phone: yup.number().required('այս դաշտը պարտադիր է'),
    email: yup.string().email('գրել ճիշտ էլ հասցե').required('այս դաշտը պարտադիր է'),
    webSiteAddres: yup.string(),
    message: yup.string(),
    fileName: yup.string()
})

  function handleSub(e,handleSubmit, isValid , dirty) {
    e.preventDefault()
    const [name, phone, email, webSiteAddres,  message, file] = e.target
    if (e.target[0].value && e.target[1].value && e.target[2].value){
        handleSubmit()
        
    }
}

  return (
    <div className='tel-us'>
        <div className='container'>
            <div className='tel-us-title'>
                <h3>Tell Us</h3>
                <h5>Aboute Youre Project</h5>
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
                                <input type="text" name="name" placeholder={'name'} value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="phone-inp">
                                <input type="text" name="phone" placeholder={'phone'} value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                            </div>

                            <div className="email-inp">
                                <input type="email" name="email" placeholder={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="webSite-inp">
                                <input type="email" name="webSiteAddres" placeholder={'webSiteAddres'} value={values.webSiteAddres} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.webSiteAddres && errors.webSiteAddres && <p className="error">{errors.webSiteAddres}</p>}
                            </div>

                            <div className="message-inp">
                                <textarea  name="message" placeholder={'message'} value={values.message} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.message && errors.message && <p className="error">{errors.message}</p>}
                            </div>

                            <div className='input-text-div upload-file-div'>
                              <label className='fileIcon' htmlFor="fileInput">{fileIcon}</label>
                              <input style={{display: 'none'}} type="file" id="fileInput" onChange={handleFileChange} />
                              <input type="text" id="textInput" value={textValue} onChange={handleTextChange} placeholder='Choose File'/>
                            </div>

                            {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                            <SubmitBtn index= "0"/>
                        </form>
                </div>
            )
        }
        </Formik>
        </div>
    </div>
  )
}

export default TelUs