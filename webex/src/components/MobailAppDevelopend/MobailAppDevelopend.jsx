
import React from 'react'
import { mobailAppDevelopendImg } from '../../images/images'
import './MobailAppDevelopend.css'
import { useTranslation } from 'react-i18next'
import ProjectCycle from '../ProjectCycle/ProjectCycle'
import { mobile_page_services_data } from '../../data'
import ProjectServices from '../ProjectServices/ProjectServices'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import OtherServices from '../OtherServices/OtherServices'
import TelUs from '../TelUs/TelUs'

function MobailAppDevelopend() {
   const {t} = useTranslation()

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
    <div className='mobail_app_developend_page'>
         <div className="container">
            <div className="mobail_app_developend_page_top_div">
                <h2 className='mobail_app_developend_page_top_div_title'>{t('mobail_appDevelopendPageTitle')}</h2>
                <div className="mobail_app_developend_page_top_div_img_div">
                     <img src={mobailAppDevelopendImg} alt="mobail_app_developend" loading='lazy'/>
                </div>

                <div className="mobail_app_developend_page_top_div_info">
                    <p>{t('mobail_appDevelopendPageDescription')}</p>

                    <div className='mobail_app_developend_page_top_div_info_div1'>
                        <h3>{t('mobail_appDevelopendPageInfo_part1.0')}</h3>
                        <p>{t('mobail_appDevelopendPageInfo_part1.1')}</p>
                    </div>

                    <div className='mobail_app_developend_page_top_div_info_div2'>
                        <h3>{t('mobail_appDevelopendPageInfo_part2.0')}</h3>
                        <ol>
                           <li>{t('mobail_appDevelopendPageInfo_part2.1')}</li>
                           <li>{t('mobail_appDevelopendPageInfo_part2.2')}</li>
                           <li>{t('mobail_appDevelopendPageInfo_part2.3')}</li>
                           <li>{t('mobail_appDevelopendPageInfo_part2.4')}</li>
                           <li>{t('mobail_appDevelopendPageInfo_part2.5')}</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>

        <ProjectCycle/>

        <ProjectServices data={mobile_page_services_data}/>

        <div className='web_project_page_our_partners'>
            <div className="container">
                <div className="web_project_page_our_partners_titles_div">
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

export default MobailAppDevelopend