import React, { useEffect } from 'react';
import './CurrentLessons.css';
import kodVideo from '../../../videos/kodVideo.mp4';
import { allVideoLessons } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import vector222 from '../../../images/Vector222.svg';

import Line from '../../../images/Line.svg';
import Button from '../../Button/Button';
import Homeworkes from './Homeworkes/Homeworkes';
import { useDispatch } from 'react-redux';
import { getCurrentLesson } from '../../../store/slices/CurrentLessons/CurrentLessonsApi';

function CurrentLessons() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLesson());
  }, []);

  return (
    <div className="allSide">
      <div className="leftSide" style={{ padding: '0 0 0 40px' }}>
          <p className="Introduction">HTML/HTML 5</p>
        <div style={{ width: '58vw'}} className="leftSideTop">
          {/* <p className="title_name">HTML/HTML 5</p> */}
          <video width="100%" height="auto" controls>
            <source src={kodVideo} type="video/mp4" />
          </video>
          <div className="description">
            <p className="description_title">Նկարագրություն</p>
            <p className="description_text">
              HTML-ի օգնությամբ հեշտությամբ կարելի է ստեղծել համեմատաբար պարզ, սակայն գեղեցիկ
              ձևավորված փաստաթուղթ։ Ի հավելումն փաստաթղթի կառուցվածքի պարզեցմանը՝ HTML-ում աջակցվում
              էր հիպերտեքստը։
            </p>
            <p className="description_more">․․․more</p>
          </div>
          {/* <div className="homework_line">
            <p className="homework_line_p">Կատարել տնային առաջադրանքները</p>
            <span>
              <img src={Line} alt="Line" />
            </span>
            <Button index="5" />
          </div> */}
          <div className="homework_linne">
            <p className="homework_title">Կատարել տնային առաջադրանքները</p>
            <div className="homework_linne_div">
              <p className="homework_text">
                Lesson 1. Lorem Ipsum is simply dummy text of the printing
              </p>
              <p>120 minutes</p>
            </div>
            <div className="homework_linne_div">
              <p className="homework_text">
                Lesson 2. Lorem Ipsum is simply dummy text of the printing
              </p>
              <p>90 minutes</p>
            </div>
          </div>
          <div className="homework_side">
            <p className="HomeworkList">Տնային աշխատանքների ցանկ</p>
            <Homeworkes />
          </div>
        </div>
        {/* <div style={{ width: '58vw' }}>
          <p className="HomeworkList">Տնային աշխատանքների ցանկ</p>
          <Homeworkes />
        </div> */}
      </div>
      <div className="rightSide">
        {/* <div style={{ width: '18vw' }}> */}
        <p className="titleAllVideo">Բոլոր վիդեոդասերը</p>
        <div className="allvideoLessons_div">
          {allVideoLessons.map((el, index) => (
            <div key={index} className="allvideoLessons">
              <img src={vector222} alt="vector222" className="vector222" />
              <span className="nameAllVideo">{el}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    // </div>
  );
}

export default CurrentLessons;
