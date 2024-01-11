import React from 'react'
import ToolsInfoItem from '../ToolsInfoItem/ToolsInfoItem'

import './ToolsInfo.css'
import { packageTools, toolsData } from '../../data'


function ToolsInfo() {

  return (
    <div className='tools-info'>
        
        <div className='tools-info-items'>
            {
                toolsData.map((el,index) =>{

                      if (el.type == 'user') {
                        el.count = packageTools[0].count
                        el._id = packageTools[0]._id
                      }
                      if (el.type == 'project') {
                        el.count = packageTools[1].count
                        el._id = packageTools[1]._id
                      }



                     return <ToolsInfoItem key={index}  id={el.id} txt={index} icon={el.icon} color = {el.color} count = {el.count}/>
                })
                
            }
        </div>
    </div>
  )
}

export default ToolsInfo