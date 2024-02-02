import React, { useEffect } from 'react'
import { selectNewsMainPageData } from '../../store/slices/NewsMainSlice/NewsMainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsMainPage } from '../../store/slices/NewsMainSlice/NewsMainApi';
import './NewsMainPageCategory.css'

function NewsMainPageCategory() {

    const responsNews = useSelector(selectNewsMainPageData)
    console.log(responsNews,'ffffffff');
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
    <div className='news_main_page_categorys'>
        <div className='container'>
            {
                responsNews.map((el, index)=> 
                   index !== 0 && <div key={index} className='news_main_page_categorys_div'>
                        <h3>{el.category}</h3>
                         
                         <div className='news_main_page_categorys_div_content'>
                            {
                                el.items.map(item => 
                                    <div key={item.id} className='news_main_page_categorys_div_content_item'>
                                        <div className='news_main_page_categorys_div_content_item_img_div'>
                                            <img src={item.image} alt="item_img" />
                                            </div>
                                        <div>
                                            <p>{item.description}</p>
                                            <span>{formatCreatedAt(item.created_at)}</span>
                                        </div>
                                    </div>
                                )
                            }
                         </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default NewsMainPageCategory