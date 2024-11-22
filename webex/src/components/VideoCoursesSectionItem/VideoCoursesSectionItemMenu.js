import React from 'react'
import { useTranslation } from 'react-i18next';
import './VideoCoursesSectionItemMenu.css';
import { videoCoursesSectionData } from '../../data';

function VideoCoursesSectionItemMenu({ setActiveType, activeType, translateType, data }) {
   const { t } = useTranslation();

   return (
      <ul className='video_courses_section_item_menu'>
         {data.map((item, index) => {
            return (
               <li
                  key={item.id}
                  className="video_courses_section_item_title"
                  style={{ borderBottom: index === activeType ? '1px solid #5D64FF' : '1px solid #2C2F47' }}
                  onClick={() => setActiveType(index)}
               >
                  {t(`${translateType}.` + index)}
               </li>
            );
         })}
      </ul>
   );
}

export default VideoCoursesSectionItemMenu;