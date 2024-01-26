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

    const respOrder = useSelector(selectOrder)

    const {t, i18n} = useTranslation()


    const hadndleModalBtnClick = (project) =>{
        setCurrentProject(project)
        setOpenOrderModal(true)
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
                            <div key={el.id} className='services-items-block-item'>
                                <h6>{t('servicesPagesItemsTitle.' + index)}</h6>
                                <p>{t('servicesPagesItems_small_txt.' + index)}</p>
                                <button className='services-items-block-item-btn' onClick={()=> hadndleModalBtnClick(t('servicesPagesItemsTitle.' + index))}>{t('order_now')}</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <TelUs/>
            
            <div className='order-full-text-modal'>
                <div className='order-full-text-modal-block'>
                    <h3>web developmnt</h3>
                    <p>jfsbv hb hbef hgbufebh hbjhe fedhbejh hjbjfsbv hb hbef hgbufebh hbjhe fedhbejh hjbjfsbv hb hbef hgbufebh hbjhe fedhbejh hjbjfsbv hb hbef hgbufebh hbjhe fedhbejh hjbjfsbv hb hbef hgbufebh hbjhe fedhbejh hjb</p>
                </div>
            </div>
            {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal, currentProject}}/>}
            {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}}/>}
    </div>
  )
}

export default ServicesPage