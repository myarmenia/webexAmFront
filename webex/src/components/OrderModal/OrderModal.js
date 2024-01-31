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

function OrderModal({setOpenOrderModal, setMessageModal, currentProject}) {
    const {t, i18n} = useTranslation()

    const [file, setFile] = useState("");
    const [textValue, setTextValue] = useState('');

    const {pathname} = useLocation()

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


    const handleCloseModal = (e) =>{
        e.preventDefault()

        const [name, phone, email, site, comment, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10 ] = e.target

        const checkArr = [check1, check2, check3, check4, check5, check6, check7, check8, check9, check10 ]
         
        const orderObj = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value,
            domain: site.value,
            projectType: checkArr.map(el => el.checked  &&  el.name ).filter(el => el !== false)
        }

        const orderObj2 = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value,
            domain: site.value,
            projectType: checkArr.map(el => el.checked  &&  el.name ).filter(el => el !== false),
            project: currentProject
        }


            const jsonOrderObj = JSON.stringify(orderObj)
            const jsonOrderObj2 = JSON.stringify(orderObj2)
            const formData = new FormData();
            
            formData.append('file', file);
            if (pathname == `/${leng}/programing`) {
                formData.append('data', jsonOrderObj2);
            }
            else{
                formData.append('data', jsonOrderObj);
            }

            const token = captchaRef.current.getValue();
            

             if (token) {
                dispatch(postOrder(formData))
                setOpenOrderModal(false)
                setMessageModal(true)
                e.target.reset()
                captchaRef.current.reset();
             }
    }
    return (
        <div className='order-modal' onClick={()=> setOpenOrderModal(false)}>
            <div className='order-modal-block' onClick={(e)=> e.stopPropagation()}>
                
                <form className='order-modal-form' onSubmit={handleCloseModal}>
                   <div className='order-modal-form-full-div'>

                   <div className='order-modal-block-info-div'>
                        <h3>{t('orderFormTitle.0')}</h3>
                        <p>{t('orderFormTitle.1')}</p>
                    </div>

                   <div className='input-text-div'>
                        <input type="text" placeholder={t('orderForm.0')} required/>
                        <input type="text" placeholder={t('orderForm.1')} required/>
                        <input type="email" placeholder={t('orderForm.2')} required/>
                        <input type="text" placeholder={t('orderForm.3')} />
                    </div>

                    <textarea cols="30" rows="5" placeholder={t('orderForm.4')} ></textarea>

                    <div className='input-text-div upload-file-div'>
                        <label className='fileIcon' htmlFor="fileInput">{fileIcon}</label>
                        <input style={{display: 'none'}} type="file" id="fileInput" onChange={handleFileChange} />
                       <input type="text" id="textInput" value={textValue} onChange={handleTextChange} placeholder={t('orderForm.5')}/>
                    </div>

                    <div className='checkbox-div'>
                        <span>{t('orderFormTitle.2')}</span>
                        <div className='checkobox-items'>
                            <div>
                                <input id='check1' type="checkbox" name='Corporate website development'/>
                                <label htmlFor="check1">{t('orderForm.6')}</label>
                            </div>

                            <div>
                                <input id='check2' type="checkbox" name='Search engine optimization (SEO)'/>
                                <label htmlFor="check2">{t('orderForm.7')}</label>
                            </div>

                            <div>
                                <input id='check3' type="checkbox" name='Website development'/>
                                <label htmlFor="check3">{t('orderForm.8')}</label>
                            </div>

                            <div>
                                <input id='check4' type="checkbox" name='E-mail marketing'/>
                                <label htmlFor="check4">{t('orderForm.9')}</label>
                            </div>

                            <div>
                                <input id='check5' type="checkbox" name='Google analytics'/>
                                <label htmlFor="check5">{t('orderForm.10')}</label>
                            </div>

                            <div>
                                <input id='check6' type="checkbox" name='Online stores development'/>
                                <label htmlFor="check6">{t('orderForm.11')}</label>
                            </div>

                            <div>
                                <input id='check7' type="checkbox" name='Contextual advertising'/>
                                <label htmlFor="check7">{t('orderForm.12')}</label>
                            </div>

                            <div>
                                <input id='check8' type="checkbox" name='Technical website support'/>
                                <label htmlFor="check8">{t('orderForm.13')}</label>
                            </div>

                            <div>
                                <input id='check9' type="checkbox" name='Yandex Market'/>
                                <label htmlFor="check9">{t('orderForm.14')}</label>
                            </div>

                            <div>
                                <input id='check10' type="checkbox" name='Business process automation'/>
                                <label htmlFor="check10">{t('orderForm.15')}</label>
                            </div>
                            
                            
                        </div>

                    </div>

                        <ReCAPTCHA
                        ref={captchaRef}
                            sitekey="6Lcc1l8pAAAAAI_bws4kEJ478msd2uBdRfZT4m2e"
                        />
                   </div>

                    <div className='submit-div'>
                    <SubmitBtn index="3"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderModal