import React, { useEffect } from 'react';
import './ScrollerComponent.css'
import { co_workers_data } from '../../data';
import { useTranslation } from 'react-i18next';

const ScrollerComponent = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='loop-slide'>
            <div>
                {
                    co_workers_data.map((el, index) =>
                        <div key={el._id}>
                                <img  src={el.img} alt="" />
                            <span>{t('abouteUs_ourPartners.' + index)}</span>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ScrollerComponent;
