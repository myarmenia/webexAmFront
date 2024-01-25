import React, { useState } from 'react'
import "./OrderModal.css"
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../../store/slices/OrderSlice/OrderApi'
import { selectOrder } from '../../store/slices/OrderSlice/OrderSlice'
import axios from 'axios'
import { fileIcon } from '../../iconFolder/icon'
import MessageModal from '../MessageModal/MessageModal'

function OrderModal({setOpenOrderModal, setMessageModal}) {

    const [file, setFile] = useState("");
    const [textValue, setTextValue] = useState('');


    const dispatch = useDispatch()

    const respOrder = useSelector(selectOrder)

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

            const jsonOrderObj = JSON.stringify(orderObj)
            const formData = new FormData();
            formData.append('file', file);
            formData.append('data', jsonOrderObj);

             dispatch(postOrder(formData))

             setOpenOrderModal(false)
             setMessageModal(true)
            e.target.reset()
    }
    return (
        <div className='order-modal' onClick={()=> setOpenOrderModal(false)}>
            <div className='order-modal-block' onClick={(e)=> e.stopPropagation()}>
                <div className='order-modal-block-info-div'>
                    <h3>Tell us</h3>
                    <p>about your project</p>
                </div>
                <form className='order-modal-form' onSubmit={handleCloseModal}>
                    <div className='input-text-div'>
                        <input type="text" placeholder='name' required/>
                        <input type="text" placeholder='phone' required/>
                        <input type="email" placeholder='email' required/>
                        <input type="text" placeholder='site' />
                    </div>

                    <textarea cols="30" rows="5" placeholder='Comment' ></textarea>

                    <div className='input-text-div upload-file-div'>
                        <label className='fileIcon' htmlFor="fileInput">{fileIcon}</label>
                        <input style={{display: 'none'}} type="file" id="fileInput" onChange={handleFileChange} />
                       <input type="text" id="textInput" value={textValue} onChange={handleTextChange} placeholder='Choose File'/>
                    </div>

                    <div className='checkbox-div'>
                        <span>Choose services</span>
                        <div className='checkobox-items'>
                            <div>
                                <input id='check1' type="checkbox" name='Corporate website development'/>
                                <label htmlFor="check1">Corporate website development</label>
                            </div>

                            <div>
                                <input id='check2' type="checkbox" name='Search engine optimization (SEO)'/>
                                <label htmlFor="check2">Online stores development</label>
                            </div>

                            <div>
                                <input id='check3' type="checkbox" name='Website development'/>
                                <label htmlFor="check3">Search engine optimization (SEO)</label>
                            </div>

                            <div>
                                <input id='check4' type="checkbox" name='E-mail marketing'/>
                                <label htmlFor="check4">Contextual advertising</label>
                            </div>

                            <div>
                                <input id='check5' type="checkbox" name='Google analytics'/>
                                <label htmlFor="check5">Website development</label>
                            </div>

                            <div>
                                <input id='check6' type="checkbox" name='Online stores development'/>
                                <label htmlFor="check6">Technical website support</label>
                            </div>

                            <div>
                                <input id='check7' type="checkbox" name='Contextual advertising'/>
                                <label htmlFor="check7">E-mail marketing</label>
                            </div>

                            <div>
                                <input id='check8' type="checkbox" name='Technical website support'/>
                                <label htmlFor="check8">Yandex Market</label>
                            </div>

                            <div>
                                <input id='check9' type="checkbox" name='Yandex Market'/>
                                <label htmlFor="check9">Google analytics</label>
                            </div>

                            <div>
                                <input id='check10' type="checkbox" name='Business process automation'/>
                                <label htmlFor="check10">Business process automation</label>
                            </div>
                            
                            
                        </div>

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