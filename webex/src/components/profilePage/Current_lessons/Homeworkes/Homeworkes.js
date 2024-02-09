import React, { useEffect, useState } from 'react';
import './Homeworkes.css';
import { homeworkes } from '../../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import Block from '../../../../images/Block.svg';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguageLesson, getCurrentLesson } from '../../../../store/slices/CurrentLessons/CurrentLessonsApi';
import {closeLockIconHomeWork, openLockIconHomeWork } from '../../../../iconFolder/icon';
import { getAllData, getIsCurrentLessonNuber } from '../../../../store/slices/CurrentLessons/CurrentLessonsSlice';

function Homeworkes({lessons, fullData, open, changeHomework}) {
  const { t, i18n } = useTranslation()
  const dataJan = useSelector(getAllData)

  useEffect(()=>{
    lessons.map(el => {
      dispatch(getCurrentLesson({lengId:dataJan.course_language_id, lessonId: el.id}))
    })
  },[])
  
  const dispatch = useDispatch()

  

  const changeCurrentLesson = (lesson) =>{
    // if (lesson.number <=  data.current_lessson_number ) {
        dispatch(getCurrentLesson({lengId:dataJan.course_language_id, lessonId: lesson.id}))
        // console.log(dataJan,);
    // }
    changeHomework(lesson)
  }

  // const changeCurrentLessonHomework = (homework) =>{
  //   console.log(homework);
  // }
  return (
    <>
      {lessons?.map((el, index) => (
        <div className="homeworkes_linne_div" key={index} onClick={()=>changeCurrentLesson(el)}>
          <p className="homeworkes_text" >
          {t('homework_linne.1')} {el.number}: {el.description}
          </p>
          <p>{el.duration} {t('homework_linne.2')}</p>
         {/* {el.number <= dataJan.current_lesson_number ? <span>{openLockIconHomeWork}</span> : <span>{closeLockIconHomeWork}</span>} */}
        </div>
        // <div className="allLIne" key={index}>
        //   <div className="lineLeft">
        //     <span className="lineLeftText">{el.id} {el.name} <span className="addition">{el.addition}</span></span>
        //   </div>
        //   <div className="lineRight">
        //     <span className="lineRightTime">{el.time}</span>
        //     <img src={Block} alt="Block" className="blockImg"/>
        //   </div>
        // </div>
      ))}
    </>
  );
}

export default Homeworkes;
