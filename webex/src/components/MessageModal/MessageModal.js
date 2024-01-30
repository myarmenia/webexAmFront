import React from 'react'
import './MessageModal.css'
import Button from '../Button/Button'

function MessageModal({txt, path, setMessageModal, loading}) {
    console.log(txt,'gggggg');

    const leng = localStorage.getItem('lang')

    return (
        <div className="message-modal">
                {loading ?
                <span class="loader"></span>:
                <div className='message-modal-block'>
                    {path === `/${leng}/registr` && Array.isArray(txt)? txt.map(el =>
                        <p>{el[0]}</p>
                    ): <p>{txt}</p>
                    }
                    
                    <Button index="6" path={path} setMessageModal={setMessageModal} />
                </div>}
        </div>
    )
}

export default MessageModal