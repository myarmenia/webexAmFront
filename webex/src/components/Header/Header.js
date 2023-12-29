import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Button from '../Button/Button';
import Button2 from '../Button2/Button2';

function Header() {
  const { t, i18n } = useTranslation();
  const [animatedTextH2, setAnimatedTextH2] = useState('');
  const [animatedTextH4, setAnimatedTextH4] = useState('');

  const startH2Animation = () => {
    const textH4 = t('headerTitlePart2');
    animateText(textH4, setAnimatedTextH4);
  };

  useEffect(() => {
    const textH2 = t('headerTitlePart1');
    animateText(textH2, setAnimatedTextH2, startH2Animation);
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

  return (
    <div className='header'>
      <h1 style={{display:'none'}}>Software development and web courses</h1>
      <div className='header-title'>
          <h2>{animatedTextH2}</h2>
        <div>
          <h4>{animatedTextH4}</h4>
        </div>
        <div className='btns-div'>
          <Button index='1' path='/registr' />
          <Button2 index='2' />
        </div>
      </div>

      <div className='animation-container'>
        <div className='animation-badge'>
          <div className='badge-text'>WEBEX</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
