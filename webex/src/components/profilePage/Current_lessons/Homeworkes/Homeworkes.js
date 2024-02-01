import React from 'react';
import './Homeworkes.css';
import { homeworkes } from '../../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import Block from '../../../../images/Block.svg';
import { useTranslation } from 'react-i18next'

function Homeworkes({lessons}) {
  const { t, i18n } = useTranslation()
  console.log(lessons);
  return (
    <>
      {lessons?.map((el, index) => (
        <div className="homeworkes_linne_div" key={index}>
          <p className="homeworkes_text">
          {t('homework_linne.1')} {el.id}: {el.description}
          </p>
          <p>{el.duration} {t('homework_linne.2')}</p>
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
