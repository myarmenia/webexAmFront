import React from 'react'
import './DevelopmentCoursesPage.css'
import { checkIcon } from '../../iconFolder/icon'
import VideoCoursesSection from '../VideoCoursesSection/VideoCoursesSection'
import DevelopmenCoursesPageOurAdvantages from './DevelopmenCoursesPageOurAdvantages/DevelopmenCoursesPageOurAdvantages'
import DevelopmentCoursesCycles from './DevelopmentCoursesCycles/DevelopmentCoursesCycles'
import { useTranslation } from 'react-i18next'
import CommentsSlider from '../CommentsSlider/CommentsSlider'
import TelUs from '../TelUs/TelUs'
import FaqComponent from '../FaqComponent/FaqComponent'
import { development_courese_certificateImg, development_courese_intership_img, development_courese_plus_img } from '../../images/images'
import { useNavigate } from 'react-router-dom'
function DevelopmentCoursesPage() {
  const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';
    const {t} = useTranslation()
    const navigate = useNavigate()

    const testimonials = [
        {
          name: t('studentComments_name.0'),
          rating: 5,
          text: t('studentComments.0'),
        },
      
        {
          name: t('studentComments_name.1'),
          rating: 5,
          text: t('studentComments.1'),
        },
      
        {
          name: t('studentComments_name.2'),
          rating: 5,
          text: t('studentComments.2'),
        },
      
        {
          name: t('studentComments_name.3'),
          rating: 5,
          text: t('studentComments.3'),
        },
        
      ];
    
  return (
    <div className='development_courses_page'>
       <div className="container">
        <div className="development_courses_header">
                <div className='development_courses_header_left'>
                    <h1>{t('development_page_header.0')}</h1>
                    <p>{t('development_page_header.1')}</p>
                    <ul className='development_courses_list'>
                        <li>
                            <span>{checkIcon}</span>
                            <span>Web development</span>
                        </li>

                        <li>
                            <span>{checkIcon}</span>
                            <span>Javacore</span>
                        </li>

                        <li>
                            <span>{checkIcon}</span>
                            <span>Unity 3D</span>
                        </li>
                    </ul>

                    <button onClick={() => navigate(`/${leng}/registr`)}>{t('button.1')}</button>
                </div>

                <div className='development_courses_header_right'></div>
            </div>
            <DevelopmentCoursesCycles/>
            <VideoCoursesSection/>
       </div>
        <DevelopmenCoursesPageOurAdvantages/>
        <CommentsSlider testimonials={testimonials} title={t('commentsTitle.1')}/>
        <FaqComponent/>
        <div className="development_courses_certificate">
              <div className='development_courses_certificate_title'>
                  <h2>{t('development_courses_page_certificate_section_titles.0')}</h2>
                  <p>{t('development_courses_page_certificate_section_titles.1')}</p>
              </div>

              <div className='development_courses_certificate_block'>
                  <div className="container">
                      <div className='development_courses_certificate_block_left'>
                          <img src={development_courese_certificateImg} alt="certificate" loading='lazy' />
                          <h3>{t('development_courses_page_certificate_section_titles.2')}</h3>
                      </div>

                      <div className='development_courses_certificate_block_center'>
                          <img src={development_courese_plus_img} alt="certificate" />
                      </div>

                      <div className='development_courses_certificate_block_right'>
                          <img src={development_courese_intership_img} alt="intership" />
                          <h3>{t('development_courses_page_certificate_section_titles.3')}</h3>
                      </div>
                  </div>
              </div>
        </div>
        <TelUs/>


    </div>
  )
}

export default DevelopmentCoursesPage