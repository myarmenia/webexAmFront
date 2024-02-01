import React from 'react'
import { keyWordData } from '../../data'
import { Link } from 'react-router-dom'
import './KeyWordComponent.css'
import { useTranslation } from 'react-i18next'

function KeyWordComponent() {
  const {t, i18n} = useTranslation()
  const leng = localStorage.getItem('lang')
  return (
    <div className='key-word-component'>
      <div className='container'>
        <h4>{t('KeyWordComponent')}</h4>

        <div className='key-word-component-items'>
          {
            keyWordData.map((el, index) =>
              <Link className='key-word-component-item' key={el.id} to={`/${leng}${el.path}`}>{t('KeyWordComponentItem.' + index)}</Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default KeyWordComponent