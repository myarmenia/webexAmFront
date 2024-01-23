import React from 'react'
import { useTranslation } from 'react-i18next';
import './SelectLng.css'

function SelectLng() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const ggg = localStorage.getItem('lang')
        console.log(ggg, 'ggg');
        console.log(lng, 'lng');
        const pathname = window.location.pathname
        console.log(pathname+ ' pathname');

        const hhhh = pathname.replace('/'+ggg, '/'+lng)
        console.log(hhhh,6666666666);
        localStorage.setItem('lang', lng)

        window.location.href = hhhh
      };

// console.log(localStorage.getItem('lang',45555555));

  return (
    <select value={localStorage.getItem('lang')} name="lng" id="lng" onChange={(e) =>changeLanguage(e.target.value)}>
        <option value="am">Հայ</option>
        <option value="ru">Рус</option>
        <option value="en">Eng</option>
    </select>
  )
}

export default SelectLng