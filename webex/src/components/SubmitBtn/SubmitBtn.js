import React from 'react'
import { useTranslation } from 'react-i18next';
import './SubmitBtn.css'
function SubmitBtn({index, isValid, dirty}) {
    const { t, i18n } = useTranslation();
  return (
    <button disabled={!isValid || !dirty} type='submit' className='btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {t('reg_log.'+ index)}
    </button>
  )
}

export default SubmitBtn