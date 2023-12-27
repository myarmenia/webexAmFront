import  {useEffect, useState} from 'react'
import { coursesRegistrationInfoData } from '../../data'
import './CoursesRegistrationInfo.css'
import { courseseRegistrationInfoItem_icon, courseseRegistrationInfoItem_icon_bottom, courseseRegistrationInfoItem_icon_top } from '../../iconFolder/icon';

function CoursesRegistrationInfo() {
    const [open, setOpen] = useState(null)

    useEffect(() => {
        const openF =()=> setOpen(null)

        window.addEventListener('click', (e)=>openF(e,null))
        return () => window.removeEventListener('click',openF )

    }, []);

    const isOpen =(e,id)=> {
        e.stopPropagation()
        setOpen(id)
    }

  return (
    <div className='courses-registration-info'>
        <div className='container'>
        {
            coursesRegistrationInfoData.map(el =>
                
                    <div style={{color: '#ffffff'}} key={el._id} className='courses-registration-info-item'  onClick={(e)=>isOpen(e,el._id) }>
                        <div className='courses-registration-info-item-text' >
                            <h5>{el.title}</h5>
                            {
                            open === el._id ? <p>{el.txt}</p> : '' 
                            }
                        </div>
                        <span>{open === el._id ? courseseRegistrationInfoItem_icon_top : courseseRegistrationInfoItem_icon_bottom}</span>
                    </div>
            )
        }
        </div>
    </div>
  )
}

export default CoursesRegistrationInfo