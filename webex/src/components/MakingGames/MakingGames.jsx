

import React from 'react'
import './MakingGames.css'
import { useTranslation } from 'react-i18next'
import { gamesPageImg } from '../../images/images'
import ProjectServices from '../ProjectServices/ProjectServices'
import { gamesPageServicesData } from '../../data'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import OtherServices from '../OtherServices/OtherServices'
import TelUs from '../TelUs/TelUs'
import MakingGamesCarousel from './MakingGamesCarousel/MakingGamesCarousel'

function MakingGames() {
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
      <div className='making_games_pages'>
         <div className="container">
            <div className="making_games_pages_top_div">
               <h2 className='making_games_pages_top_div_title'> {t('making_gamesPage_title')} </h2>
               <div className="making_games_pages_top_div_img">
                  <img src={gamesPageImg} alt="Modeling3" loading='lazy' />
               </div>

               <div className="making_games_pages_top_div_info">
                  <p >{t('making_gamesPage_description')}</p>

                  <div className='making_games_pages_top_div_info_div1'>
                     <h3>{t('making_gamesPage_top_div_part1.0')}</h3>
                     <p>{t('making_gamesPage_top_div_part1.1')}</p>
                  </div>

                  <div className='making_games_pages_top_div_info_div2'>
                     <h3>{t('making_gamesPage_top_div_part2.0')}</h3>
                     <ol>
                        <li>{t('making_gamesPage_top_div_part2.1')}</li>
                        <li>{t('making_gamesPage_top_div_part2.2')}</li>
                        <li>{t('making_gamesPage_top_div_part2.3')}</li>
                        <li>{t('making_gamesPage_top_div_part2.4')}</li>
                        <li>{t('making_gamesPage_top_div_part2.5')}</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>

         <ProjectServices data={gamesPageServicesData} title={t('making_gamesPage_servicesTitle')} />

         <div className="container">
             <MakingGamesCarousel/>
         </div>

         <div className='makingg_games_page_our_partners'>
            <div className="container">
                <div className="makingg_games_page_our_partners_title">
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

export default MakingGames