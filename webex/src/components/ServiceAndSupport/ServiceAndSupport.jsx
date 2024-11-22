import React from 'react'
import './Serviceandsuport.css'
import { suportPageImg } from '../../images/images'
import { document_icon, list_check_icon, settingsIcon } from '../../iconFolder/icon'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import { useTranslation } from 'react-i18next'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import OtherServices from '../OtherServices/OtherServices'
import TelUs from '../TelUs/TelUs'

function ServiceAndSupport() {
  const { t, i18n } = useTranslation()

  const testimonials = [
    {
      name: t('webProject_comments_name.0'),
      rating: 5,
      text: t('webProject_comments.0'),
    },
  
    {
      name: t('webProject_comments_name.1'),
      rating: 5,
      text: t('webProject_comments.1'),
    },
  
    {
      name: t('webProject_comments_name.2'),
      rating: 5,
      text: t('webProject_comments.2'),
    },
  
    {
      name: t('webProject_comments_name.3'),
      rating: 5,
      text: t('webProject_comments.3'),
    },
    
  ];


  return (
    <div className='service_and_support'>
         <div className="container">
            <div className="services_and_support_top_div">
               <h2 className='support_and_service_top_div_title'>{t('services_and_support_tile')}</h2>

               <div className="service_and_support_img_div">
                     <img src={suportPageImg} alt="support" loading='lazy'/>
                </div>

                <div className="support_and_service_top_div_info">
                    <p>{t('services_and_supportDescription')}</p>

                    <div className='support_and_service_top_div_info_div_1'>
                        <h3>{t('services_and_support_info_part1.0')}</h3>
                        <p>{t('services_and_support_info_part1.1')}</p>
                    </div>


                    <div className='support_and_service_top_div_info_div_2'>
                        <div className='support_and_service_top_div_info_div_2_title'>
                            <span>{settingsIcon}</span>
                            <h3>{t('services_and_support_info_part2.0')}</h3>
                        </div>
                       
                       <div className='support_and_service_top_div_info_div_2_info'>
                          <ul className='support_and_service_top_div_info_div_2_info_list_1'>
                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.1')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.2')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.3')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.4')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.5')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.6')}</p>
                              </li>
                          </ul>

                          <ul className='support_and_service_top_div_info_div_2_info_list_2'>
                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.7')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.8')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.9')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.10')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part2.11')}</p>
                              </li>

                          </ul>
                       </div>
                    </div>


                    <div className='support_and_service_top_div_info_div_3'>
                        <div className='support_and_service_top_div_info_div_3_title'>
                            <span>{document_icon}</span>
                            <h3>{t('services_and_support_info_part3.0')}</h3>
                        </div>
                       
                       <div className='support_and_service_top_div_info_div_3_info'>
                          <ul className='support_and_service_top_div_info_div_3_info_list_1'>
                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.1')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.2')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.3')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.4')}</p>
                              </li>

                          </ul>

                          <ul className='support_and_service_top_div_info_div_3_info_list_2'>
                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.5')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.6')}</p>
                              </li>

                              <li>
                                <span>{list_check_icon}</span>
                                <p>{t('services_and_support_info_part3.7')}</p>
                              </li>

                          </ul>
                       </div>
                    </div>
      
                </div>

            </div>
         </div>

         <div className='support_and_service_page_our_partners'>
            <div className="container">
                <div className="support_and_service_page_our_partners_title">
                    <h2>{t('webProject_ourPartnersTitles.0')}</h2>
                    <p>{t('webProject_ourPartnersTitles.1')}</p>
                </div>

                <ScrollerComponent/>
            </div>
        </div>

        <CommentsSlider testimonials={testimonials} title={t('commentsTitle.0')}/>

        <OtherServices/>

        <TelUs/>
    </div>
  )
}

export default ServiceAndSupport