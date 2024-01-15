import React from 'react'
import { useTranslation } from 'react-i18next';
import './SelectLng.css'

function SelectLng() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng)
      };



  return (
    <select value={localStorage.getItem('lang')} name="lng" id="lng" onChange={(e) =>changeLanguage(e.target.value)}>
        <option value="am">Հայ</option>
        <option value="ru">Рус</option>
        <option value="en">Eng</option>
    </select>
  )
}

export default SelectLng