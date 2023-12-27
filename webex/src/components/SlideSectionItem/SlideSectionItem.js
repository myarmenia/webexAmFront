import React from 'react'
import './SlideSectionItem.css'
function SlideSectionItem({id, title, timeLine, txt, img, icon}) {
  return (
    <div className='slide-section-item'>
        <div className='top-div'>
          <div className="slide-section-item-img-div">
              {img}
              {icon}
          </div>
          <h4>{title}</h4>
        </div>
        <p>{txt}</p>
        <div className='bottom-div'></div>
    </div>
  )
}

export default SlideSectionItem