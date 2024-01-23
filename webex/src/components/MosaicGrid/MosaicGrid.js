import React from 'react';
import './MosaicGrid.css';
import { projectSectionData } from '../../data';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectallProjects } from '../../store/slices/HomePageSlice/HomePageSlice';

const MosaicGrid = () => {

  const allProjects = useSelector(selectallProjects)


  console.log(allProjects,6666666);
  const leng = localStorage.getItem('lang')
  return (
    <div className="mosaic-grid">
      {allProjects.map((el) => (
        <Link key={el.id} to={`/${leng}/projects/${el.id}`}>
          <div  className='mosaic-grid-item' >
          <img src={el.path} alt="" />
          <div className='mosaic-grid-item-text-div'>
            <p >oiuhgy tfrdt esdgfyuhi  jokpijhu gytfredrf tgyhuiopo iuytfrdf tgyhujiokp lokugf drf tgyhu jiokp lfdfgty hujikolpkh gfdrfgthujk</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default MosaicGrid;



