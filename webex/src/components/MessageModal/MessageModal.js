import React from 'react'
import './MessageModal.css'
import Button from '../Button/Button'

function MessageModal({txt, path, setMessageModal}) {

    return (
        <div className="message-modal">
                <div className='message-modal-block'>
                    <p>{txt}</p>
                    <Button index="6" path={path} setMessageModal={setMessageModal} />
                </div>
        </div>
    )
}

export default MessageModal