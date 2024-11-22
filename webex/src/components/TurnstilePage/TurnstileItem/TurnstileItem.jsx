import React from 'react'
import './TurnstileItem.css'
import { turnstileIcon1, turnstileIcon2 } from '../../../iconFolder/icon'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../../Button/Button'
function TurnstileItem({item}) {
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const {t, i18n} = useTranslation()


    return (
        <div key={item.id} className='turnstile_page_item'>
            <div className='turnstile_page_item_img_div' style={{ backgroundImage: `url(${item.img})` }}></div>

            <div className='turnstile_page_item_info'>
                <h3>Code: {item.code}</h3>

                <div className='turnstile_page_item_info_icons'>
                    {item.price1 && <div style={{ borderRight: item.price2 && '1px solid #fff' }}>
                        <span>{turnstileIcon1}</span>
                        <span>{item.price1}</span>
                    </div>}

                    {item.price2 && <div>
                        <span>{turnstileIcon2}</span>
                        <span>{item.price2}</span>
                    </div>}
                </div>

                {/* <button className='turnstile_page_item_info_btn' onClick={()=> handleNavigate(item.code)}>{t('button.2')}</button> */}
                <Button index='2' path={`/${leng}/turnstile/order?id=${item.id}`} />
            </div>
        </div>
    )
}

export default TurnstileItem