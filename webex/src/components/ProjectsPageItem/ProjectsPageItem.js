import {useRef, useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import './ProjectsPageItem.css'

function ProjectsPageItem({_id,_img, img, description, txt, nameTitle, name, lngTitle, lng, periodTitle, period_month, dateTitle, date, type}) {

  const {idd} = useParams()

  const [bigImage, setBigImage] = useState({imgjan: img , id: '1'})

  const [allImgs, setAllImg] = useState([
    {imgjan: img , id: '2'},
    {imgjan: _img , id: '3'},
    {imgjan: img , id: '4'},
    {imgjan: img , id: '5'},
  ])
    const divRef = useRef()
    useEffect(() => {
        if(divRef.current.id === idd){
              window.scrollTo({top: (divRef.current.offsetTop - 30), behavior: 'smooth'}) 

        }
    }, []);

    const renderImg = (el, index)=>{
        const arr = allImgs
        arr[index] = bigImage
        setAllImg(arr)
        setBigImage(el)
        
    }
  return (
    <div ref={divRef} id={_id} className='projects-page-item'>
       <div className='projects-page-item-imgs'>
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
            
       </div>
       <div className='projects-page-item-info-div'>
            <div>
                <h4>{description}</h4>
                <p>{txt}</p>
            </div>
            <div>
                <h4>{nameTitle}</h4>
                <p>{name}</p>
            </div>
            <div>
                <h4>{lngTitle}</h4>
                <p>{lng}</p>
            </div>
            <div className='projects-page-item-bottom-div'>
                <div>
                    <h4>{periodTitle}</h4>
                    <p>{period_month}</p>
                </div>

                <div>
                    <h4>{dateTitle}</h4>
                    <p>{date}</p>
                </div>

            </div>

            <h4>{type}</h4>
       </div>

    </div>
  )
}

export default ProjectsPageItem


