import React from 'react'
import ToolsInfoItem from '../ToolsInfoItem/ToolsInfoItem'

import './ToolsInfo.css'
import { toolsData } from '../../data'


function ToolsInfo() {

  return (
    <div className='tools-info'>
        
        <div className='tools-info-items'>
            {
                toolsData.map((el,index) =>
                    <ToolsInfoItem key={el._id}  id={el.id} txt={index} icon={el.icon} color = {el.color}/>
                )
            }
        </div>
    </div>
  )
}

export default ToolsInfo