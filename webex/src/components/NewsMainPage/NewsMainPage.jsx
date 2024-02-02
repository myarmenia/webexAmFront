import React, { useEffect, useState } from 'react'
import './NewsMainPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsMainPage } from '../../store/slices/NewsMainSlice/NewsMainApi'
import { selectNewsMainPageData, selectNewsMainPageLoading } from '../../store/slices/NewsMainSlice/NewsMainSlice'
import NewsMainPageCategory from '../NewsMainPageCategory/NewsMainPageCategory'

function NewsMainPage() {
    const responsNews = useSelector(selectNewsMainPageData)
    const loading = useSelector(selectNewsMainPageLoading)
    const category1 = responsNews[0]
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNewsMainPage())
    },[])

    const formatCreatedAt = (createdAt) => {
        const leng = localStorage.getItem('lang')
        const date = new Date(createdAt);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if (leng == "am") {
            return date.toLocaleDateString('hy-AM', options);
        }
        else if (leng == "ru") {
            return date.toLocaleDateString('ru-RU', options);
        }
        else if (leng == "en") {
            return date.toLocaleDateString('en-US', options);
        }
        else{
            return date.toLocaleDateString('hy-AM', options);
        }
      };

  return (
    <div className='news_main_page'>
        {
            loading ? <div className='load-div'><span className="loader"></span> </div> :
            (<div className='container'>
            <div className='category-top-div'>
                <h3>{category1.category}</h3>
                
                <div className='category-top-div-block'>
                    <div className='category-top-div-big-div'>
                        <div className='category-top-div-big-div-img-div'>
                            <img src={category1.items[0].image} alt="nkar" />
                        </div>
                        <div className='category-top-div-big-div-info'>
                            <h4>{category1.items[0].title}</h4>
                            <span>{formatCreatedAt(category1.items[0].created_at)}</span>
                            <p>{category1.items[0].description}</p>
                        </div>
                    </div>

                    <div className='category-top-div--small-div'>
                        {
                            category1.items.map(el => 
                                <div key={el.id} className='category-top-div-small-div-item'>
                                    <div className='category-top-div-small-div-item-img-div'>
                                        <img src={el.image} alt="nkar"/>
                                    </div>
                                    <div className='category-top-div-small-div-item-info'>
                                        <p>{el.description}</p>
                                        <span>{formatCreatedAt(el.created_at)}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>)
        }

        <NewsMainPageCategory/>
    </div>
  )
}

export default NewsMainPage