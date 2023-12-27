import React from 'react'
import './ToolsInfoItem.css'
import { useTranslation } from 'react-i18next';
function ToolsInfoItem({txt, icon, color}) {
  const { t, i18n } = useTranslation();
   
  return (
    <div className='tools-info-item' style={{backgroundColor: color}}>
        <span>{icon}</span>
        <p>{t('toolsInfo.'+ txt)}</p>
        
    </div>
  )
}

export default ToolsInfoItem