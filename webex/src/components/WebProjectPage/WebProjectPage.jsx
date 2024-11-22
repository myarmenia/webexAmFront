
import React from 'react'
import './WebProjectPage.css'
import { webProjectImg } from '../../images/images'
import { useTranslation } from 'react-i18next'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import OtherServices from '../OtherServices/OtherServices'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import ProjectServices from '../ProjectServices/ProjectServices'
import ProjectCycle from '../ProjectCycle/ProjectCycle'
import { web_project_services_data } from '../../data'
import TelUs from '../TelUs/TelUs'

function WebProjectPage() {
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
    <div className='web_project_page'>
        <div className="container">
            <div className="web_project_page_top_div">
                <h2 className='web_project_page_top_div_title'>{t('web_projectPageTitle')}</h2>
                <div className="web_project_page_top_div_img_div">
                     <img src={webProjectImg} alt="web_project" loading='lazy'/>
                </div>

                <div className="web_project_page_top_div_info">
                    <p>{t('web_projectPageDescription')}</p>

                    <div className='web_project_page_top_div_info_div1'>
                        <h3>{t('web_projectPage_info_part1.0')}</h3>
                        <p>{t('web_projectPage_info_part1.1')}</p>
                    </div>

                    <div className='web_project_page_top_div_info_div2'>
                        <h3>{t('web_projectPage_info_part2.0')}</h3>
                        <ol>
                           <li>{t('web_projectPage_info_part2.1')}</li>
                           <li>{t('web_projectPage_info_part2.2')}</li>
                           <li>{t('web_projectPage_info_part2.3')}</li>
                           <li>{t('web_projectPage_info_part2.4')}</li>
                           <li>{t('web_projectPage_info_part2.5')}</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
        <ProjectCycle/>
        <ProjectServices data={web_project_services_data}/>
        
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

export default WebProjectPage