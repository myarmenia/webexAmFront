import React from 'react'
import './Modeling3D.css'
import { dModeling3Bachround } from '../../images/images'
import { modelinp3DPageServicesData } from '../../data'
import ProjectServices from '../ProjectServices/ProjectServices'
import Modeling3Dtabel from './Modeling3Dtabel/Modeling3Dtabel'
import { useTranslation } from 'react-i18next'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import OtherServices from '../OtherServices/OtherServices'
import TelUs from '../TelUs/TelUs'

function Modeling3D() {
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
      <div className='modeling3D'>
         <div className="container">
            <div className="modeling3D_top_div">
               <h2 className='modeling3D_top_div_title'> {t('modeling3D_title')} </h2>
               <div className="modeling3D_top_div_img">
                  <img src={dModeling3Bachround} alt="Modeling3" loading='lazy' />
               </div>

               <div className="modeling3D_top_div_info">
                  <p >{t('modeling3D_description')}</p>

                  <div className='modeling3D_top_div_info_div1'>
                     <h3>{t('modeling3D_info_part1.0')}</h3>
                     <p>{t('modeling3D_info_part1.1')}</p>
                  </div>

                  <div className='modeling3D_top_div_info_div2'>
                     <h3>{t('modeling3D_part2.0')}</h3>
                     <ol>
                        <li>{t('modeling3D_part2.1')}</li>
                        <li>{t('modeling3D_part2.2')}</li>
                        <li>{t('modeling3D_part2.3')}</li>
                        <li>{t('modeling3D_part2.4')}</li>
                        <li>{t('modeling3D_part2.5')}</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>

         <ProjectServices data={modelinp3DPageServicesData} title={t('modeling3D_services')} />

         <div className='modeling3D_example_section'>
            <div className="container">
               <h2>{t('modelind3D_work_section_title')}</h2>

               <div className='modeling3D_example_section_item'>
                  <iframe
                     src="https://my.matterport.com/show/?m=imqvSmAv262"
                     allowFullScreen="true"
                     frameBorder={0}
                     align="top"
                     height="600px"
                     width="100%"
                     scrolling="none"
                     style={{ display: 'block' }}
                     onload="this.style.display='block'"
                  />
               </div>
            </div>
         </div>

         <Modeling3Dtabel/>

         <div className='modeling3D_page_our_partners'>
            <div className="container">
                <div className="modeling3D_page_our_partners_titles">
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

export default Modeling3D