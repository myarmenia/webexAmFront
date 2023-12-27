import React from 'react'
import './Footer.css'
import { arrowIcon, fbIcon, instaIcon, linkedinIcon, rightArrowIcon } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next';
function Footer() {

    const { t, i18n } = useTranslation();

  return (
    <div className='footer'>
        <div className='footer-content'>
            <ul className='footer-menu'>
                <li><span>{rightArrowIcon} </span>{t('footerMenu.'+ '0')}</li>
                <li><span>{t('footerMenu.'+ '1')} </span><a href="#">Info@webex.am</a></li>
                <li><span>{t('footerMenu.'+ '2')} </span>+374 96 10 10 17</li>
                <li><span>{t('footerMenu.'+ '3')} </span>{t('footerMenu.'+ '4')}</li>
            </ul>

            <div className='footer-right-div'>
                <a href="#">WEBEX TECHNOLOGIES</a>
                <span>{t('footerMenu.'+ '5')}</span>
                <div className='footer-icons'>
                    {arrowIcon}
                    <a href="#">{fbIcon}</a>
                    <a href="#">{instaIcon}</a>
                    <a href="#">{linkedinIcon}</a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer