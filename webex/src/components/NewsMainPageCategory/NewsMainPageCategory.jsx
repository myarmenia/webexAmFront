import React, { useEffect } from 'react'
import { selectNewsMainPageData } from '../../store/slices/NewsMainSlice/NewsMainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsMainPage } from '../../store/slices/NewsMainSlice/NewsMainApi';
import './NewsMainPageCategory.css'
import { useNavigate } from 'react-router-dom';
import ShareComponent from '../ShareComponent/ShareComponent';

function NewsMainPageCategory() {

    const responsNews = useSelector(selectNewsMainPageData)
    const dispatch = useDispatch()
    const leng = localStorage.getItem('lang')
    const navigate = useNavigate()

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
    <div className='news_main_page_categorys'>
        <div className='container'>
            {
                responsNews.map((el, index)=> 
                   index !== 0 && <div key={el.category.categoryId} className='news_main_page_categorys_div'>
                        <h3 onClick={()=>navigate(`/${leng}/news/category/${el.category.categoryId}`)}>{el.category.categoryName}</h3>
                         
                         <div className='news_main_page_categorys_div_content'>
                            {
                                el.items.map(item => 
                                    <div key={item.id} className='news_main_page_categorys_div_content_item' onClick={()=>navigate(`/${leng}/news/${item.id}`)}>
                                        <div className='news_main_page_categorys_div_content_item_img_div'>
                                            <img src={item.image} alt="item_img" />
                                            </div>
                                        <div>
                                            <p>{item.description}</p>
                                            <div className='news_main_page_categorys_div_content_item_share_and_date_div'>
                                                <span>{formatCreatedAt(item.created_at)}</span>
                                                <ShareComponent url={`${window.location.href}/${item.id}`}/>
                                            </div>
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