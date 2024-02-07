import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getNewsCategoryPage } from '../../store/slices/NewsCategorySlice/NewsCategoryApi'
import { selectNewsCategoryPageData, selectNewsCategoryPageDataItems } from '../../store/slices/NewsCategorySlice/NewsCategorySlice'
import ShareComponent from '../ShareComponent/ShareComponent'
import './NewsCategoryPage.css'
import { categorLine } from '../../images/images'
import { categoryLine } from '../../iconFolder/icon'

function NewsCategoryPage() {

    const [page, setPage] = useState('1')
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const respCategory = useSelector(selectNewsCategoryPageData)

    const shareHref = window.location.origin

    useEffect(()=>{
        dispatch(getNewsCategoryPage({id:id, pageIndex: page.i}))
    },[page])



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


      const pagination = () => {
        if (respCategory.pagination && typeof respCategory.pagination.total !== 'undefined') {
            const paginationList = [];
            for (let i = 1; i < respCategory.pagination.last_page; i++) {
                paginationList.push(<li style={{background: respCategory.pagination.current_page == i ? '#168BF7' : 'none'}} key={i} onClick={()=> setPage({i})}>{i}</li>);
            }
            return paginationList;
        } else {
            return <span className="loader"></span>;
        }
    }
    
    // Usage
    const paginationItems = pagination();


  return (
    <div className='news-category-page'>
        <div className='container'>
            {
              respCategory.data && (  <div className='news-category-page-items-block'>
                    <h3>{respCategory.data.category}{categoryLine}</h3>

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

            <ul className='pagination_ul'>
                {
                    pagination()
                }
            </ul>
        </div>
    </div>
  )
}

export default NewsCategoryPage