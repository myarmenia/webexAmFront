import React, { useEffect } from 'react'
import './NewsUniquePage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsUniquePage } from '../../store/slices/NewsUniqueSlice/NewsUniqueApi'
import { selectNewsUniquePageData, selectNewsUniquePageLoading } from '../../store/slices/NewsUniqueSlice/NewsUniqueSlice'
import ShareComponent from '../ShareComponent/ShareComponent'
import { categoryLine } from '../../iconFolder/icon'



function NewsUniquePage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const respUniquePage = useSelector(selectNewsUniquePageData)
    const loading = useSelector(selectNewsUniquePageLoading)

    useEffect(()=>{
        dispatch(getNewsUniquePage(id))
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
    <div className='news_unique-page'>
        <div className='container'>
            {
                loading ?
                <span className="loader"></span>: 
                <div className='news_unique-page-item'>
                    <h3 onClick={()=>navigate(`/${leng}/news/category/${respUniquePage.categoryId}`)}>{respUniquePage.categoryName}{categoryLine}</h3>
                    <div className='img_and_info_div'>
                        <img src={respUniquePage.image} alt="" />
                        <h4>{respUniquePage.title}</h4>
                        <div className='share_and_date'>
                            <span>{formatCreatedAt(respUniquePage.created_at)}</span>
                            <ShareComponent url={window.location.href}/>
                        </div>
                    </div>
                    <p>{respUniquePage.description}</p>
                </div>
            }
        </div>
    </div>
  )
}

export default NewsUniquePage