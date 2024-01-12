import React from 'react';
import './CurrentLessons.css';
import kodVideo from '../../../videos/kodVideo.mp4';
import { allVideoLessons } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import vector222 from '../../../images/Vector222.svg';

import Line from '../../../images/Line.svg';
import Button from '../../Button/Button';
import Homeworkes from './Homeworkes/Homeworkes';

function CurrentLessons() {
  return (
    <div className="allSide">
      <div className="leftSide" style={{ padding: '20px' }}>
        <div style={{ width: '58vw' }} className="leftSideTop">
          <p className="title_name">HTML/HTML 5</p>
          <p className="Introduction">1 Ներածություն</p>
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
          <div className="homework_line">
            <p className="homework_line_p">Կատարել տնային առաջադրանքները</p>
            <span>
              <img src={Line} alt="Line" />
            </span>
            <Button index="5" />
          </div>
        </div>
        <div style={{ width: '58vw' }}>
          <p className="HomeworkList">Տնային աշխատանքների ցանկ</p>
          <Homeworkes/>
        </div>
      </div>
      <div className="rightSide">
        <p className="titleAllVideo">Բոլոր վիդեոդասերը</p>
        <div className="allvideoLessons_div">
          {allVideoLessons.map((el, index) => (
            <div key={index} className="allvideoLessons">
              <img src={vector222} alt="vector222" className="vector222"/>
              <span className="nameAllVideo">{el}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentLessons;
