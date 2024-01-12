import React, { useEffect, useRef, useState } from 'react'
import './OurAdvantagesItem.css'
import { useTranslation } from 'react-i18next'

function OurAdvantagesItem({id, title, txt, color, botomDivColor}) {
  const {t, i18n} = useTranslation()
  const [viewItem, setviewItem] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
      if (window.scrollY >= 1600) {
      setviewItem(true)
    }
    else{
      setviewItem(false)
    }
    })
  },[])

  const itemX = [
    '-500%',
    '-500%',
    '500%',
    '500%',
    '-500%',
    '-500%',
    '500%',
    '500%',
    '-500%',
    '500%',

  ]
  return (
    <div className='OurAdvantagesItem' style={{backgroundColor: color, transform: viewItem ? 'translateX(0)' : `translateX(${itemX[title]})`}}>
        <h4>{t('ourAdvantagesItemTitle.' + title)}</h4>
        <p>{t('ourAdvantagesItemTxt.' + txt)}</p>
        <div className='bottom-div' style={{backgroundColor: botomDivColor}}></div>
    </div>
  )
}

export default OurAdvantagesItem