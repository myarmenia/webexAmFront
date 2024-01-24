import {useRef, useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import './ProjectsPageItem.css'
import { useTranslation } from 'react-i18next'

function ProjectsPageItem({id, images, translation, name, project_language, process_time, creation_date_at, type, link_project, link_play_market,
    link_app_store}) {

  const {idd} = useParams()

  const {t, i18n} = useTranslation()

//   const [bigImage, setBigImage] = useState({imgjan: img , id: '1'})

  console.log(id,3333);

//   const [allImgs, setAllImg] = useState([
//     {imgjan: img , id: '2'},
//     {imgjan: _img , id: '3'},
//     {imgjan: img , id: '4'},
//     {imgjan: img , id: '5'},
//   ])
//     const divRef = useRef()
//     useEffect(() => {
//         if(divRef.current.id === idd){
//               window.scrollTo({top: (divRef.current.offsetTop - 150), behavior: 'smooth'}) 

//         }
//     }, []);

//     const renderImg = (el, index)=>{
//         const arr = allImgs
//         arr[index] = bigImage
//         setAllImg(arr)
//         setBigImage(el)
        
//     }
  return (
    <div  id={id} className='projects-page-item'>
       {/* <div className='projects-page-item-imgs'>
            <div className='projects-page-item-imgs-div-1'>
                <img src={bigImage.imgjan}/>
            </div>
            <div className='projects-page-item-imgs-div-2'>
                {
                    allImgs.map((el, index) =>{
                       return <img key={el.id} src={el.imgjan} onClick={()=> renderImg(el, index)}/>
                    })
                }
            </div>
            
       </div> */}
       <div className='projects-page-item-info-div'>
            <div>
                <h4>{t('projectPage_translation.0')}</h4>
                <p></p>
            </div>
            <div>
                <h4>{t('projectPage_translation.1')}</h4>
                <p></p>
            </div>
            <div>
                <h4>{t('projectPage_translation.2')}</h4>
                <p></p>
            </div>
            <div className='projects-page-item-bottom-div'>
                <div>
                    <h4>{t('projectPage_translation.3')}</h4>
                    <p></p>
                </div>

                <div>
                    <h4>{t('projectPage_translation.4')}</h4>
                    <p></p>
                </div>

            </div>

            <h4></h4>
       </div>

    </div>
  )
}

export default ProjectsPageItem


