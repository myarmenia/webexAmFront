import React from 'react'
import { keyWordData } from '../../data'
import { Link } from 'react-router-dom'
import './KeyWordComponent.css'

function KeyWordComponent() {
  const leng = localStorage.getItem('lang')
  return (
    <div className='key-word-component'>
      <div className='container'>
        <h4>Ключевые слова</h4>

        <div className='key-word-component-items'>
          {
            keyWordData.map((el, index) =>
              <Link className='key-word-component-item' key={el.id} to={`/${leng}${el.path}`}>{el.txt}</Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default KeyWordComponent