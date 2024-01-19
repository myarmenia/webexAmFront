import React from 'react'
import './AbouteUsPage.css'
import { bottomLine } from '../../images/images'
import { useTranslation } from 'react-i18next'
import { co_workers_data } from '../../data'
function AbouteUsPage() {

  const {t, i18n} = useTranslation()

  return (
    <div className='aboute-us-page'>
        <div className='aboute-us-top-div'>
            <div className='container'>
                <h2>{t('abouteUs_Header.0')}</h2>
            </div>
        </div>
        <div className='container'>
            <div className='aboute-us-info-block'>
                <div className='aboute-us-info-block-title'>
                    <h4>{t('abouteUS_info_block.0')}</h4>
                    <img src={bottomLine} alt="img" />
                </div>
                <p>{t('abouteUS_info_block.1')}</p>

                <div className="aboute-us-info-block-training">
                    <div>
                        <h5>{t('abouteUs_training.0')}</h5>
                        <p>{t('abouteUs_training.1')}</p>
                        <ul className='training-ul'>
                            <li>{t('abouteUs_training.2')}</li>
                            <li>{t('abouteUs_training.3')}</li>
                            <li>{t('abouteUs_training.4')}</li>
                            <li>{t('abouteUs_training.5')}</li>
                            <li>{t('abouteUs_training.6')}</li>
                            <li>{t('abouteUs_training.7')}</li>
                            <li>{t('abouteUs_training.8')}</li>
                            <li>{t('abouteUs_training.9')}</li>
                            <li>{t('abouteUs_training.10')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='our-partners'>
                <h4>Our partnerss</h4>
                

                <div className="position-relative marquee-container d-none d-sm-block">
                <div className="marquee d-flex justify-content-around">
                {co_workers_data.map(el => (
                    <div key={el._id} className='partner-img-div'>
                        <span>
                            {el.txt}
                        </span>
                    </div>
                    ))}
                
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AbouteUsPage