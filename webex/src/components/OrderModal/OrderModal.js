import React from 'react'
import "./OrderModal.css"
import SubmitBtn from '../SubmitBtn/SubmitBtn'

function OrderModal({setOpenOrderModal}) {

    const handleCloseModal = (e) =>{
        e.preventDefault()

        
        console.dir(e.target);

        setOpenOrderModal(false)
    }
    return (
        <div className='order-modal' onClick={()=> setOpenOrderModal(false)}>
            <div className='order-modal-block' onClick={(e)=> e.stopPropagation()}>
                <div className='order-modal-block-info-div'>
                    <h3>Website Development Cost</h3>
                    <p>If you want to find out the prices - send a request now. Our web studio specialists will prepare and offer you the best solutions with a description of the options available to you. We will respond to your requests within 24 hours.</p>
                </div>
                <form className='order-modal-form' onSubmit={handleCloseModal}>
                    <div className='input-text-div'>
                        <input type="text" placeholder='name' />
                        <input type="text" placeholder='phone' />
                        <input type="email" placeholder='email' />
                        <input type="text" placeholder='site' />
                    </div>

                    <textarea cols="30" rows="5" ></textarea>

                    <div className='checkbox-div'>
                        <span>Choose services</span>
                        <div className='checkobox-items'>
                            <div>
                                <input id='check1' type="checkbox" />
                                <label htmlFor="check1">Corporate website development</label>
                            </div>

                            <div>
                                <input id='check2' type="checkbox" />
                                <label htmlFor="check2">Online stores development</label>
                            </div>

                            <div>
                                <input id='check3' type="checkbox" />
                                <label htmlFor="check3">Search engine optimization (SEO)</label>
                            </div>

                            <div>
                                <input id='check4' type="checkbox" />
                                <label htmlFor="check4">Contextual advertising</label>
                            </div>

                            <div>
                                <input id='check5' type="checkbox" />
                                <label htmlFor="check5">Website development</label>
                            </div>

                            <div>
                                <input id='check6' type="checkbox" />
                                <label htmlFor="check6">Technical website support</label>
                            </div>

                            <div>
                                <input id='check7' type="checkbox" />
                                <label htmlFor="check7">E-mail marketing</label>
                            </div>

                            <div>
                                <input id='check8' type="checkbox" />
                                <label htmlFor="check8">Yandex Market</label>
                            </div>

                            <div>
                                <input id='check9' type="checkbox" />
                                <label htmlFor="check9">Google analytics</label>
                            </div>

                            <div>
                                <input id='check10' type="checkbox" />
                                <label htmlFor="check10">Business process automation</label>
                            </div>
                        </div>

                    </div>

                    <SubmitBtn index="3"/>
                </form>
            </div>
        </div>
    )
}

export default OrderModal