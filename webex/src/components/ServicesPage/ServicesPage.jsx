import React, { useEffect, useState } from 'react'
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
    const [openFullTextModal, setOpenFullTextModal] = useState('')

    const respOrder = useSelector(selectOrder)

    const {t, i18n} = useTranslation()


    const hadndleModalBtnClick = (project) =>{
        setCurrentProject(project)
        setOpenOrderModal(true)
    }

    const handleOpenFullText = (e, index) =>{
        if (e.target.localName !== 'button') {
            setOpenFullTextModal(`${index}`)
            console.log();
        }
    }

    useEffect(() => {
        document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [openOrderModal]);

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
                            <div key={el.id} className='services-items-block-item' onClick={(e) => handleOpenFullText(e,index)}>
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
                    {
                    servicesPageItemsData.map((item, index) => (
                        console.log(openFullTextModal,'op'),
                        openFullTextModal == index && (
                            <div key={item.id} className='order-full-text-modal-block' onClick={(e) => e.stopPropagation()}>
                                <h3>{t('servicesPagesItemsTitle.' + index)}</h3>
                                <p>{t('servicesPagesItems_full_txt.' + index)}</p>
                            </div>
                        )
                    ))
                    }
            </div>}
            {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal, currentProject}}/>}
            {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}}/>}
            
    </div>
  )
}

export default ServicesPage