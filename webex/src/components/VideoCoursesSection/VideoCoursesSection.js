import React, { useState } from 'react'
import './VideoCoursesSection.css'
import { useTranslation } from 'react-i18next';
import VideoCoursesSectionItemMenu from '../VideoCoursesSectionItem/VideoCoursesSectionItemMenu';
import { groupIcon } from '../../iconFolder/icon';
import { videoCoursesSectionData } from '../../data';
import VideoCoursesSectionCard from '../VideoCoursesSectionItem/VideoCoursesSectionCard';

function VideoCoursesSection() {
   const [activeType, setActiveType] = useState(0);
   const { t } = useTranslation();

   return (
      <div className='video_courses_section'>
         <h2 className='video_courses_section_h2'>{t('videoCoursesSectionTitle')}</h2>
         <VideoCoursesSectionItemMenu setActiveType={setActiveType} activeType={activeType} translateType="VideoCoursesSection_title" data={videoCoursesSectionData}/>

         <div className="video_courses_section_item_info_div">
            <p className='video_courses_section_item_info_p'>{t('videoCoursesSectionTxt.' + activeType)}</p>
            <div className='video_courses_section_item_info_span_div'>
               <span>{groupIcon}</span>
               <span className='video_courses_section_item_info_span'>{t('videoCoursesSectionfeatures.1')}</span>
            </div>
         </div>

         <div className="video_courses_section_cards">
            {
               videoCoursesSectionData.map((item,index) => (
                  <VideoCoursesSectionCard key={item.id} img={item.img} id={item.id} name={item.name} price={item.price}/>
               ))
            }
         </div>
      </div>
   );
}
export default VideoCoursesSection