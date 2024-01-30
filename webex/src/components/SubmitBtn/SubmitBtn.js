import React from 'react'
import { useTranslation } from 'react-i18next';
import './SubmitBtn.css'
function SubmitBtn({index}) {
    const { t, i18n } = useTranslation();
  return (
    <button type='submit' className='btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {t('reg_log.'+ index)}
    </button>
  )
}

export default SubmitBtn