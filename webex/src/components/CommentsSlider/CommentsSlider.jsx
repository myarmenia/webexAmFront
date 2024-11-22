import React, { memo } from 'react';
import Slider from 'react-slick';
import './CommentsSlider.css'; 
import { commandIcon1, commandIcon2, comments_border_icon1, comments_border_icon2 } from '../../iconFolder/icon';
import { useTranslation } from 'react-i18next';



const CommentsSlider = ({testimonials, title}) => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  

  return (
    <div className="testimonial-slider">
        <h2 className='web_project_page_top_div_title'>{title}</h2>
       <div className='testimonial-slider-container'>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <div className="testimonial-content">
                    <h3>{testimonial.name}</h3>
                    <div className="rating">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>★</span>
                        ))}
                    </div>
                    <p>{testimonial.text}</p>
                    </div>

                    <span className='comments_border1'>{comments_border_icon1}</span>
                    <span className='comments_border2'>{comments_border_icon2}</span>
                    <span className='command_icon1_1'>{commandIcon1}</span>
                    <span className='command_icon1_2'>{commandIcon1}</span>
                    <span className='command_icon2_1'>{commandIcon2}</span>
                    <span className='command_icon2_2'>{commandIcon2}</span>
                </div>
                ))}
            </Slider>
       </div>
    </div>
  );
};

export default memo(CommentsSlider);
