import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Button from '../Button/Button';
import Button2 from '../Button2/Button2';
import OrderModal from '../OrderModal/OrderModal';
import MessageModal from '../MessageModal/MessageModal';
import { selectOrder, selectOrderLoading } from '../../store/slices/OrderSlice/OrderSlice';
import { useSelector } from 'react-redux';

function Header() {
  const { t, i18n } = useTranslation();
  const [animatedTextH2, setAnimatedTextH2] = useState('');
  const [animatedTextH4, setAnimatedTextH4] = useState('');
  const [openOrderModal, setOpenOrderModal] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const leng = localStorage.getItem('lang')

  
  const respOrder = useSelector(selectOrder)

  const loading = useSelector(selectOrderLoading)


  const startH2Animation = () => {
    const textH4 = t('headerTitlePart2');
    animateText(textH4, setAnimatedTextH4);
  };

  useEffect(() => {
    const textH2 = t('headerTitlePart1');
    animateText(textH2, setAnimatedTextH2, startH2Animation);

    console.log(respOrder.data,999);
  }, [t]);
  
 
 

  const animateText = (text, setTextFunction, onComplete = () => {}) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTextFunction(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
        onComplete();
      }
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openOrderModal]);

  return (
    <div className='header'>
      <h1 style={{display:'none'}}>Software development and web courses</h1>
      <div className='header-title'>
          <h2>{animatedTextH2}</h2>
        <div>
          <h4>{animatedTextH4}</h4>
        </div>
        <div className='btns-div'>
          <Button index='1' path={`/${leng}/registr`} />
          <Button2 index='2' {...{setOpenOrderModal}}/>
        </div>
      </div>

      <div className='animation-container'>
        <div className='animation-badge'>
          <div className='badge-text'>WEBEX</div>
        </div>
      </div>
      {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal}}/>}
      {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}} loading={loading}/>}
    </div>
  );
}

export default Header;
