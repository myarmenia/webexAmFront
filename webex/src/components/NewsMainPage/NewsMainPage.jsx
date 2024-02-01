import React, { useEffect, useState } from 'react'
import './NewsMainPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsMainPage } from '../../store/slices/NewsMainSlice/NewsMainApi'
import { selectNewsMainPageData } from '../../store/slices/NewsMainSlice/NewsMainSlice'

function NewsMainPage() {
    const responsNews = useSelector(selectNewsMainPageData)

    const category1 = responsNews[0]

    console.log(category1);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNewsMainPage())
    },[])

  return (
    <div className='news_main_page'>
        <div className='container'>
            <div className='category-top-div'>
                <h3>{category1.category}</h3>
                <div className='category-top-div-big-div'>
                    {/* <img src={category1[0]} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsMainPage