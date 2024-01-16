import React from 'react';
import './Homeworkes.css';
import { homeworkes } from '../../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import Block from '../../../../images/Block.svg';

function Homeworkes() {
  return (
    <>
      {homeworkes.map((el, index) => (
        <div className="homeworkes_linne_div" key={index}>
          <p className="homeworkes_text">
            Lesson {el.id}. Lorem Ipsum is simply dummy text of the printing
          </p>
          <p>{el.time}</p>
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
