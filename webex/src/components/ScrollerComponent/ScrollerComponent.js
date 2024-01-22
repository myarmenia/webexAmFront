import React, { useEffect } from 'react';
import './ScrollerComponent.css'
import { co_workers_data } from '../../data';

const ScrollerComponent = () => {



    return (
        <div className='loop-slide'>
            <div>
                {
                    co_workers_data.map(el =>
                        <div key={el._id}>
                            <img  src={el.img} alt="" />
                            <span>{el.txt}</span>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ScrollerComponent;
