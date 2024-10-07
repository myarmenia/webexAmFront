import React, { useEffect, useState } from 'react'
import { privateProjectsData, responsive, responsive3 } from '../../data'
import Carousel from 'react-multi-carousel';
import './PrivateProject.css'
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import MessageModal from '../MessageModal/MessageModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrder, selectOrderLoading } from '../../store/slices/OrderSlice/OrderSlice';
import OrderModal from '../OrderModal/OrderModal';
import { selectInvitationData } from '../../store/slices/InvitationSliceHome/InvitationSliceHome';
import { getInvitationCategoryes } from '../../store/slices/InvitationSliceHome/InvitationApiHome';

function PrivateProject() {
  const [openOrderModal, setOpenOrderModal] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const respOrder = useSelector(selectOrder)
  const loading = useSelector(selectOrderLoading)
  const invitationDataCategoryes = useSelector(selectInvitationData)
  const dispatch = useDispatch()

  console.log(invitationDataCategoryes,8888);
  
  useEffect(() => {
    dispatch(getInvitationCategoryes([]))
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openOrderModal]);

  const {t, i18n} = useTranslation()


  const prod = invitationDataCategoryes?.data?.templates?.length > 0 && invitationDataCategoryes?.data?.templates.map((el, index) => (
    <div key={el.id} className='private-project-item' >
        <div className='private-project-item-img'>
            <img src={el.image_path} alt={el.name} />
            <div className='private-project-item-img-shadow'></div>
        </div>

        <div className='private-project-item-info'>
            <b>{el.name}</b>
            <span>{el.price} AMD</span>

            <div className='private-project-item-btns'>
                <button class="example-btn" onClick={() => window.location.href = `https://invitationcard.webex.am/am${el.route}`}>{t('button.9')}</button>
                <button class="order-btn" onClick={(e) => setOpenOrderModal(true)}>{t('button.2')}</button>
            </div>
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

      <button className='private_project_view_more'>{t('button.10')}</button>

      {openOrderModal && <OrderModal {...{ setOpenOrderModal, setMessageModal,}} addres='false' />}
      {messageModal && <MessageModal txt={respOrder?.data.message} {...{ setMessageModal }} loading={loading} />}
    </div>
  )
}

export default PrivateProject