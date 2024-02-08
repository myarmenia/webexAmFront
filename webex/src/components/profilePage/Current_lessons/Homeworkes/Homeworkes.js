import React from 'react';
import './Homeworkes.css';
import { homeworkes } from '../../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import Block from '../../../../images/Block.svg';
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux';
import { getCurrentLesson } from '../../../../store/slices/CurrentLessons/CurrentLessonsApi';
import {closeLockIconHomeWork, openLockIconHomeWork } from '../../../../iconFolder/icon';

function Homeworkes({lessons, setFullData, fullData}) {
  const { t, i18n } = useTranslation()
  console.log(lessons,'pppppppp');

  const dispatch = useDispatch()
  const changeCurrentLesson = (lesson) =>{
    if (lesson.number <= fullData.current_lessson_number ) {
      dispatch(getCurrentLesson({lengId:fullData.course_language_id, lessonId: lesson.id}))
    }
  }
  return (
    <>
      {lessons?.map((el, index) => (
        <div className="homeworkes_linne_div" key={index} onClick={()=>changeCurrentLesson(el)}>
          <p className="homeworkes_text">
          {t('homework_linne.1')} {el.number}: {el.description}
          </p>
          <p>{el.duration} {t('homework_linne.2')}</p>
         {el.number <= fullData.current_lessson_number ? <span>{openLockIconHomeWork}</span> : <span>{closeLockIconHomeWork}</span>}
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
