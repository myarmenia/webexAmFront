import React from 'react'
import ToolsInfoItem from '../ToolsInfoItem/ToolsInfoItem'

import './ToolsInfo.css'
import {toolsData } from '../../data'
import { useSelector } from 'react-redux'
import { selectToolsCalc } from '../../store/slices/HomePageSlice/HomePageSlice'


function ToolsInfo() {

  const respTools =  useSelector(selectToolsCalc)
  
  return (
    <div className='tools-info'>
        
        <div className='tools-info-items'>
            {
                toolsData.map((el,index) =>{

                      if (el.type == 'students') {
                        el.count = respTools[el.type].count
                        el._id = respTools[el.type].id
                      }
                      if (el.type == 'projects') {
                        el.count = respTools[el.type].count
                        el._id = respTools[el.type].id
                      }



                     return <ToolsInfoItem key={index}  id={el.id} txt={index} icon={el.icon} color = {el.color} count = {el.count}/>
                })
                
            }
        </div>
    </div>
  )
}

export default ToolsInfo