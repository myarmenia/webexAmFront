import React, { useEffect, useState } from 'react'
import './WebexInfo.css'
import { useTranslation } from 'react-i18next';

function WebexInfo() {
    // const [leng, setleng] = useState(true)
    // useEffect(()=> {
    //     setleng(i18n.language === 'am')
    // },[leng])

    const { t, i18n } = useTranslation();
    
    const arryText =  i18n.language === 'am' ? t('webexInfo.'+ '1').split(':') : t('webexInfo.'+ '1').split('.')
    
    const textBlock =  arryText.map((el, idx)=> 
    <span key={idx}  style={{display: 'block'}}>{el}{i18n.language === 'am' ? arryText.length - 1 === idx ? '': ':': arryText.length - 1 === idx ? '': '.'}</span>
    )
    
  return (
    <div className='webex-info-div'>
        <div className='images-div-webex'>
            <div className='img-top-left'>
                <div className='img-div'></div>
            </div>
            
            <div className='img-top-right'>
              <div className='img-div'></div>
            </div>

            <div className='img-botom-left'>
              <div className='img-div'></div>
            </div>

            <div className='img-botom-right'>
              <div className='img-div'></div>
            </div>
        </div>

        <div className='webex-info'>
            <h2>{t('webexInfo.'+ '0')}</h2>
           <p>
            {textBlock}
           </p>
        </div>
    </div>
  )
}

export default WebexInfo