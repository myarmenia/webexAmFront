import React, { useEffect, useState } from 'react'
import './NewsMainPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsMainPage } from '../../store/slices/NewsMainSlice/NewsMainApi'
import { selectNewsMainPageData, selectNewsMainPageLoading } from '../../store/slices/NewsMainSlice/NewsMainSlice'
import NewsMainPageCategory from '../NewsMainPageCategory/NewsMainPageCategory'
import { useNavigate } from 'react-router-dom'
import ShareComponent from '../ShareComponent/ShareComponent'
import { categoryLine } from '../../iconFolder/icon'
import { categorLine } from '../../images/images'

function NewsMainPage() {
    const responsNews = useSelector(selectNewsMainPageData)
    const loading = useSelector(selectNewsMainPageLoading)
    const category1 = responsNews[0]
    const leng = localStorage.getItem('lang')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNewsMainPage())
    },[])

    const formatCreatedAt = (createdAt) => {
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
                <h3 onClick={()=>navigate(`/${leng}/news/category/${category1.category.categoryId}`)}>{category1.category.categoryName}{categoryLine}</h3>
                
                <div className='category-top-div-block'>
                    <div className='category-top-div-big-div' onClick={()=>navigate(`/${leng}/news/${category1.items[0].id}`)}>
                        <div className='category-top-div-big-div-img-div'>
                            <img src={category1.items[0].image} alt="nkar"/>
                        </div>
                        <div className='category-top-div-big-div-info'>
                            <h4>{category1.items[0].title}</h4>
                            <div className='category-top-div-big-div-info-share-and-date-div'>
                                <span>{formatCreatedAt(category1.items[0].created_at)}</span>
                                <ShareComponent url={`${window.location.href}/${category1.items[0].id}`}/>
                            </div>
                            <p>{category1.items[0].description}</p>
                        </div>
                    </div>

                    <div className='category-top-div--small-div'>
                        {
                            category1.items.map(el => 
                                <div key={el.id} className='category-top-div-small-div-item' onClick={()=>navigate(`/${leng}/news/${el.id}`)}>
                                    <div className='category-top-div-small-div-item-img-div'>
                                        <img src={el.image} alt="nkar"/>
                                    </div>
                                    <div className='category-top-div-small-div-item-info'>
                                        <p>{el.description}</p>
                                        <div className='category-top-div-small-div-item-info-share-and-date-div'>
                                            <span>{formatCreatedAt(el.created_at)}</span>
                                            <ShareComponent url={`${window.location.href}/${el.id}`}/>
                                        </div>
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