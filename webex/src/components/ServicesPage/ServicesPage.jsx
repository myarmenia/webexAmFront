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

    const respOrder = useSelector(selectOrder)

    const {t, i18n} = useTranslation()

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
                                <button className='services-items-block-item-btn' onClick={()=> setOpenOrderModal(true)}>{t('order_now')}</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <TelUs/>

            {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal}}/>}
            {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}}/>}
    </div>
  )
}

export default ServicesPage