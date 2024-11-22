import React, { useEffect, useMemo, useState } from 'react'
import VideoCoursesSectionItemMenu from '../../VideoCoursesSectionItem/VideoCoursesSectionItemMenu'
import './DevelopmentCoursesCycles.css'
import { useTranslation } from 'react-i18next';
import { time_icon } from '../../../iconFolder/icon';
import SlideSection from '../../SlideSection/SlideSection';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage } from '../../../store/slices/HomePageSlice/HomePageApi';
import { selectProgramingLang } from '../../../store/slices/HomePageSlice/HomePageSlice';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]
function DevelopmentCoursesCycles() {
    const {t} = useTranslation()
    const [activeType, setActiveType] = useState(0);
    const dispatch = useDispatch()
    const programingLang = useSelector(selectProgramingLang)


    useEffect(()=>{
      dispatch(getHomePage()) 
    },[]) 

    const filteredData = useMemo(() =>{
      if(activeType === 0) return programingLang?.filter(el => el.type === "stage_1")
      else if(activeType === 1) return programingLang?.filter(el => el.type === "stage_2")
      else  return programingLang
    },[activeType, programingLang])

    
    
    
  return (
    <div className='development_courses_cycles'>
            <h2>{t('development_courses_cycles_title')}</h2>
            <VideoCoursesSectionItemMenu setActiveType={setActiveType} activeType={activeType} translateType="development_courses_cycles_stage_menu" data={data}/>

            <div className="development_courses_cycles_item_info_div">
                <p className='development_courses_cycles_item_info_p'>{t('development_courses_cycles_stage_Texts.' + activeType)}</p>
                <div className='development_courses_cycles_item_info_span_div'>
                  <span>{time_icon}</span>
                  <span className='development_courses_cycles_item_info_span'>{t('development_courses_cycles_stage_time')}</span>
                </div>
           </div>

          <div className="container">
            <SlideSection data={filteredData} />
          </div>

    </div>
  )
}

export default DevelopmentCoursesCycles