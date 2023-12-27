import React from 'react';
import './MosaicGrid.css';
import { projectSectionData } from '../../data';
import { Link} from 'react-router-dom';

const MosaicGrid = () => {

  return (
    <div className="mosaic-grid">
      {projectSectionData.map((el) => (
        <Link to={`/projects/${el._id}`}>
          <div  key={el._id} className='mosaic-grid-item' >
          <img src={el.img} alt="" />
          <div className='mosaic-grid-item-text-div'>
            <p >{el.txt}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default MosaicGrid;



