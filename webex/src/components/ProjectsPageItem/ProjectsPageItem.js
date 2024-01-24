import {useRef, useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import './ProjectsPageItem.css'
import { useTranslation } from 'react-i18next'
import { appStoreIcon, play_market, webSiteIcon } from '../../iconFolder/icon'

function ProjectsPageItem({id, images, translation, name, project_language, process_time, creation_date_at, type, link_project, link_play_market,
    link_app_store}) {

  const {idd} = useParams()

  const {t, i18n} = useTranslation()

  const [bigImage, setBigImage] = useState({imgjan: images[0]?.path , img_id: '1'})

  console.log();
    
  const img1 = images[1]?.path
  const img2 = images[2]?.path
  const img3 = images[3]?.path

  const [allImgs, setAllImg] = useState([
    {imgjan: img1 , img_id: '2'},
    {imgjan: img2 , img_id: '3'},
    {imgjan: img3, img_id: '4'},
  ])

  console.log(allImgs,'jjjj');
    const divRef = useRef()
    useEffect(() => {
        if(divRef.current.id === idd){
              window.scrollTo({top: (divRef.current.offsetTop - 150), behavior: 'smooth'}) 

        }
    }, []);

    const renderImg = (el, index)=>{
        const arr = allImgs
        arr[index] = bigImage
        setAllImg(arr)
        setBigImage(el)
        
    }
  return (
    <div ref={divRef}  id={id} className='projects-page-item'>
       <div className='projects-page-item-imgs'>
            <div className='projects-page-item-imgs-div-1'>
                <img src={bigImage.imgjan}/>
            </div>
            <div className='projects-page-item-imgs-div-2'>
                {
                    allImgs.map((el, index) =>{
                       return <img key={el.img_id} src={el.imgjan} onClick={()=> renderImg(el, index)}/>
                    })
                }
            </div>
            
       </div>
       <div className='projects-page-item-info-div'>
            <div>
                <h4>{t('projectPage_translation.0')}</h4>
                <p>{translation}</p>
            </div>
            <div>
                <h4>{t('projectPage_translation.1')}</h4>
                <p>{name}</p>
            </div>
            <div>
                <h4>{t('projectPage_translation.2')}</h4>
                <p>{project_language}</p>
            </div>
            <div className='projects-page-item-bottom-div'>
                <div>
                    <h4>{t('projectPage_translation.3')}</h4>
                    <p>{creation_date_at}</p>
                </div>

                <div>
                    <h4>{t('projectPage_translation.4')}</h4>
                    <p>{process_time}</p>
                </div>

            </div>

            <div className='link_icon'>
                {link_project !== null && <a href={link_project} target="_blank">{webSiteIcon}</a>}
                {link_app_store !== null && <a href={link_app_store} target="_blank">{appStoreIcon}</a>}
                {link_play_market !== null && <a href={link_play_market} target="_blank">{play_market}</a> }
                
            </div>
       </div>

    </div>
  )
}

export default ProjectsPageItem


