
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { projectsPageData } from '../../data';
import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
import { d_3_icon, game_icon, mobile_icon, see_all_icon, web_icon } from '../../iconFolder/icon';
import './ProjectsPage.css';

const projectMenuList = [
  {
    title: 'Բոլորը',
    icon: see_all_icon,
  },

  {
    title: 'Վեբ',
    icon: web_icon,
  },

  {
    title: 'Բջջային',
    icon: mobile_icon,
  },

  {
    title: 'Խաղեր և 3D',
    icon: game_icon,
  },

]


function ProjectsPage() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className='projects-page'>
      <div className='container'>
        <ul className='filter-menu-projects'>
            {
              projectMenuList.map((el,index)=>
              <li key={index} onClick={() => handleItemClick(index)} style={{borderBottom: selectedItem === index ? '4px solid #9944C0' : ''}}>
                <span className='filter-menu-projects-title'>{el.title}</span>
                <span title='Խաղեր և 3D' className='filter-menu-projects-icon'>{el.icon}</span> 
                {index === 3 && <span title='Խաղեր և 3D' className='filter-menu-projects-icon'>{d_3_icon}</span> }
            </li>
              )
            }

            </ul>
        <div className='project-page-items'>
          {projectsPageData.map((el) => (
            <ProjectsPageItem key={el._id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;



