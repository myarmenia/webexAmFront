import React, { useEffect, useState } from 'react'
import './WebexInfo.css'
import { useTranslation } from 'react-i18next';
import { leftArrow } from '../../iconFolder/icon';

function WebexInfo() {
    // const [leng, setleng] = useState(true)
    // useEffect(()=> {
    //     setleng(i18n.language === 'am')
    // },[leng])

    const [sizeGap, setSizeGap] = useState(40)

    const [nividimBlock, setNividimBlock] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 660 && window.scrollY  < 1000 ?setSizeGap(10) : setSizeGap(40);

    })
  },[])

    const { t, i18n } = useTranslation();
    
    const arryText_1 =  i18n.language === 'am' ? t('webexInfo.'+ '1').split(':') : t('webexInfo.'+ '1').split('.')

    const arryText_2 =  i18n.language === 'am' ? t('webexInfo.'+ '2').split(':') : t('webexInfo.'+ '2').split('.')
    
    const textBlock =  arryText_1.map((el, idx)=> 
    <span key={idx}  style={{display: 'block'}}>{el}{i18n.language === 'am' ? arryText_1.length - 1 === idx ? '': ':': arryText_1.length - 1 === idx ? '': '.'}</span>
    )

    const textBlock_2 =  arryText_2.map((el, idx)=> 
    <span key={idx}  style={{display: 'block'}}>{el}{i18n.language === 'am' ? arryText_2.length - 1 === idx ? '': ':': arryText_2.length - 1 === idx ? '': '.'}</span>
    )
    

  return (
    <div  className='webex-info-div'>
        <div 
          style={{
            gap: `${sizeGap}px`
          }}
          className='images-div-webex' >
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
            <p className='nividimi-block' style={{display: nividimBlock ? "block" : 'none'}}>{textBlock_2}</p>
            <span className='reade-more' onClick={()=>setNividimBlock(!nividimBlock)}>{nividimBlock ? leftArrow : t('lerne_more')}</span>
           </p>
        </div>
    </div>
  )
}

export default WebexInfo