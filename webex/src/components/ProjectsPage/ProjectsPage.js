
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { projectsPageData } from '../../data';
import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
import { d_3_icon, game_icon, mobile_icon, see_all_icon, web_icon } from '../../iconFolder/icon';
import './ProjectsPage.css';
import { Helmet } from 'react-helmet-async';

const projectMenuList = [
  {
    title: 'Բոլորը',
    icon: see_all_icon,
    type: 'all'
  },

  {
    title: 'Վեբ',
    icon: web_icon,
    type: 'WebSite'
  },

  {
    title: 'Բջջային',
    icon: mobile_icon,
    type: 'mobile'
  },

  {
    title: 'Խաղեր և 3D',
    icon: game_icon,
    type: '3d'
  },

]


function ProjectsPage() {
  const [selectedItem, setSelectedItem] = useState(0);

  const [filterData, setFilterData] = useState([...projectsPageData])

  const handleItemClick = (index, type) => {
    setSelectedItem(index);

   setFilterData( type !== 'all' ?  projectsPageData.filter(el => el.type == type) : [...projectsPageData])
   
  };
  
  return (
    <>
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Our services include, Portfolio websites, e-commerce websites, information portals, turnkey creation for online store, a personal website or a blog."/>
        <meta name="keywords" content="3d model, unity, games, 3D մոդել, խաղեր, 3d модель, unity, игры, portfolio"/>
        <link rel="canonical" href="/projects"/>
     </Helmet>

      <div className='projects-page'>
      <div className='container'>
        <ul className='filter-menu-projects'>
            {
              projectMenuList.map((el,index)=>
              <li key={index} onClick={() => handleItemClick(index, el.type)} style={{borderBottom: selectedItem === index ? '4px solid #9944C0' : ''}}>
                <span className='filter-menu-projects-title'>{el.title}</span>
                <span title='Խաղեր և 3D' className='filter-menu-projects-icon'>{el.icon}</span> 
                {index === 3 && <span title='Խաղեր և 3D' className='filter-menu-projects-icon'>{d_3_icon}</span> }
            </li>
              )
            }

            </ul>
        <div className='project-page-items'>
          {filterData.map((el) => (
            <ProjectsPageItem key={el._id} {...el} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProjectsPage;



