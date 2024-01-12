import React from 'react'
import './ToolsInfoItem.css'
import { useTranslation } from 'react-i18next';
function ToolsInfoItem({txt, icon, color, count}) {
  const { t, i18n } = useTranslation();
   
  return (
    <div className='tools-info-item' style={{backgroundColor: color}}>
        <span>{icon}</span>
         {count !== undefined ? <p>{t('toolsInfo.'+ txt) + ' ' + count}</p> : <p>{t('toolsInfo.'+ txt)}</p>}
        
    </div>
  )
}

export default ToolsInfoItem