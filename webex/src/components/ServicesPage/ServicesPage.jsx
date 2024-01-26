import React, { useState } from 'react'
import './ServicesPage.css'
import TelUs from '../TelUs/TelUs'
import { servicesPageItemsData } from '../../data'
import { useTranslation } from 'react-i18next'
import MessageModal from '../MessageModal/MessageModal'
import OrderModal from '../OrderModal/OrderModal'
import { useSelector } from 'react-redux'
import { selectOrder } from '../../store/slices/OrderSlice/OrderSlice'

function ServicesPage() {

    const [openOrderModal, setOpenOrderModal] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)
    const [openFullTextModal, setOpenFullTextModal] = useState(null)

    const respOrder = useSelector(selectOrder)

    const {t, i18n} = useTranslation()


    const hadndleModalBtnClick = (project) =>{
        setCurrentProject(project)
        setOpenOrderModal(true)
    }

    const handleOpenFullText = (e) =>{
        if (e.target.localName !== 'button') {
            setOpenFullTextModal(true)
        }
    }

  return (
    <div className='services-page'>
            <div className='services-page-top-div'>
                <div className='container'>
                    <h2>Services</h2>
                </div>
            </div>
            <div className='container'>
                <div className='services-items-block'>
                    {
                        servicesPageItemsData.map((el, index) => 
                            <div key={el.id} className='services-items-block-item' onClick={handleOpenFullText}>
                                <h6>{t('servicesPagesItemsTitle.' + index)}</h6>
                                <p>{t('servicesPagesItems_small_txt.' + index)}</p>
                                <button className='services-items-block-item-btn' onClick={()=> hadndleModalBtnClick(t('servicesPagesItemsTitle.' + index))}>{t('order_now')}</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <TelUs/>
            
            {openFullTextModal && <div className='order-full-text-modal' onClick={() => setOpenFullTextModal(false)}>
                <div className='order-full-text-modal-block' onClick={(e)=> e.stopPropagation()}>
                    <h3>web developmnt</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>}
            {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal, currentProject}}/>}
            {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}}/>}
            
    </div>
  )
}

export default ServicesPage