import React, { useEffect, useState } from 'react'
import { privateProjectsData, responsive, responsive3 } from '../../data'
import Carousel from 'react-multi-carousel';
import './PrivateProject.css'
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import MessageModal from '../MessageModal/MessageModal';
import { useSelector } from 'react-redux';
import { selectOrder, selectOrderLoading } from '../../store/slices/OrderSlice/OrderSlice';
import OrderModal from '../OrderModal/OrderModal';

function PrivateProject() {
  const [openOrderModal, setOpenOrderModal] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const respOrder = useSelector(selectOrder)
  const loading = useSelector(selectOrderLoading)


  
  useEffect(() => {
    document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openOrderModal]);

  const {t, i18n} = useTranslation()


  const prod = privateProjectsData.map((el, index) => (
    <div key={el.id} className='private-project-item' >
      <div className='private-project-item-img'>
        <img src={el.img} alt="" />
        <div className='private-project-item-price'>
          <span>{t('proj.' + index)}</span>
          <span>9000դ.</span>
        </div>
      </div>
      <div className='private-project-item-text'>

        <a className="btn2" onClick={(e) => setOpenOrderModal(true)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {t('button.' + 2)}
        </a>

        <a className="btn2" href={el.path}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {t('button.' + 9)}
        </a>
      </div>
    </div>
  ));

  return (
    <div className='private-project'>
      <h2 className='private-project-title'>{t('projTitle')}</h2>
      <div className='private-project-items'>
        <Carousel showDots={true}
          responsive={responsive3}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {prod}
        </Carousel>
      </div>

      {openOrderModal && <OrderModal {...{ setOpenOrderModal, setMessageModal,}} addres='false' />}
      {messageModal && <MessageModal txt={respOrder?.data.message} {...{ setMessageModal }} loading={loading} />}
    </div>
  )
}

export default PrivateProject