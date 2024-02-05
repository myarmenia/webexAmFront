import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getNewsCategoryPage } from '../../store/slices/NewsCategorySlice/NewsCategoryApi'
import { selectNewsCategoryPageData, selectNewsCategoryPageDataItems } from '../../store/slices/NewsCategorySlice/NewsCategorySlice'
import ShareComponent from '../ShareComponent/ShareComponent'
import './NewsCategoryPage.css'

function NewsCategoryPage() {

    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const respCategory = useSelector(selectNewsCategoryPageData)

    const shareHref = window.location.origin

    useEffect(()=>{
        dispatch(getNewsCategoryPage(id))
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
    <div className='news-category-page'>
        <div className='container'>
            {
              respCategory.data && (  <div className='news-category-page-items-block'>
                    <h3>{respCategory.data.category}</h3>

                    <div className='news-category-page-items'>
                        {
                            respCategory.data.items.map(item => 
                                <div key={item.id} className='news-category-page-item' onClick={()=>navigate(`/${leng}/news/${item.id}`)}>
                                        <div className='news-category-page-item-img-div'>
                                            <img src={item.image} alt="nkar"/>
                                        </div>
                                        <div className='news-category-page-item-info'>
                                            <p>{item.description}</p>
                                            <div className='news-category-item-share-and-date-div'>
                                                <span>{formatCreatedAt(item.created_at)}</span>
                                                <ShareComponent url={`${shareHref}/news/${item.id}`}/>   
                                            </div>
                                        </div>
                                </div>
                            )
                        }
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default NewsCategoryPage