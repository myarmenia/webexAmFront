
import React, { useMemo, useState } from 'react';
import { useEffect, useRef } from 'react';
import { projectsPageData } from '../../data';
import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
import { d_3_icon, game_icon, mobile_icon, see_all_icon, web_icon } from '../../iconFolder/icon';
import './ProjectsPage.css';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {selectProjectPageData, selectProjectPageLoading } from '../../store/slices/ProjectPageSlice/ProjectPageSlice';
import { getProjectPage } from '../../store/slices/ProjectPageSlice/ProjectPageApi';
import { useTranslation } from 'react-i18next';


function ProjectsPage() {
  const {t, i18n} = useTranslation()
  const [selectedItem, setSelectedItem] = useState(0);

  const respProject = useSelector(selectProjectPageData)
  const loading = useSelector(selectProjectPageLoading)
  
  const dispatch = useDispatch()
  
  const [filterData, setFilterData] = useState([...respProject])

  console.log(respProject,'ggggggggg');
  const projectMenuList = [
    {
      title: t('projectType.0'),
      icon: see_all_icon,
      type: 'all'
    },
  
    {
      title: t('projectType.1'),
      icon: web_icon,
      type: 'web'
    },
  
    {
      title: t('projectType.2'),
      icon: mobile_icon,
      type: 'mobile'
    },
  
    {
      title: t('projectType.3'),
      icon: game_icon,
      type: '3d'
    },
  
  ]
  
  useEffect(()=>{
    dispatch(getProjectPage())
  },[])



  console.log(respProject,858);
 



  const handleItemClick = (index, type) => {
    setSelectedItem(index);

    if (type !== 'all') {
      setFilterData(respProject.filter(el => el.type == type))
    }
    
    else{
      setFilterData([...respProject])
    }
    
   
  };

 useEffect(()=>{
  setFilterData([...respProject])
 },[respProject])


  return (
    <>
      <Helmet>
        <title>վեբ ծրագրավորման դասընթացներ, CRM/ERP/Unity/iOS/Android/web/PHP/Laravel/ReactJS ծրագրավորում/Project</title>
        <meta name="description" content="Our services include, Portfolio websites, e-commerce websites, information portals, turnkey creation for online store, a personal website or a blog."/>
        <meta name="keywords" content="3d model, unity, games, 3D մոդել, խաղեր, 3d модель, unity, игры, portfolio"/>
        <link rel="canonical" href="/projects"/>
     </Helmet>

      <div className='projects-page'>
      <div className='container'>
        <ul className='filter-menu-projects'>
            {
              projectMenuList.map((el,index)=>
              <li key={index} onClick={() => handleItemClick(index, el.type)} style={{borderBottom: selectedItem === index ? '4px solid white' : ''}}>
                <span className='filter-menu-projects-title'>{el.title}</span>
                <span title={t('projectType.' + index)} className='filter-menu-projects-icon'>{el.icon}</span>
            </li>
              )
            }

            </ul>
        {loading ? <span className="loader"></span>: 
        <div className='project-page-items'>
          {filterData.map((el) => (
            <ProjectsPageItem key={el.id} {...el} />
          ))}
        </div>}
      </div>
    </div>
    </>
  );
}

export default ProjectsPage;



