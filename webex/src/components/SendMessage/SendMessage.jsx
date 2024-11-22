import React, { useState } from 'react'
import { hide_send_email_block, send_message_email_icon, send_message_fixed_icon, send_telegram_message_icon, send_whats_app_icon } from '../../iconFolder/icon'
import './SendMessage.css'
import SendMessageModal from './SendMessageModal/SendMessageModal'

function SendMessage() {
    const [activeIconsBlock, setActiveIconsBlock] = useState(false)
    const [activeMailForm, setactiveMailForm] = useState(false)

    const handleMailIconClick = () =>{
        setActiveIconsBlock(false)
        setactiveMailForm(true)
    } 
  return (
    <div className='send_message_fixed'>
        <div className='send_message_fixed_block'>
           { activeMailForm ? <span className='send_message_fixed_icon_close' onClick={() => setactiveMailForm(false)}>{hide_send_email_block}</span> :
            <span  onClick={() => setActiveIconsBlock(!activeIconsBlock)}>{send_message_fixed_icon}</span>}
            {activeIconsBlock && <div className='send_message_fixed_icons'>
                <a href="https://wa.me/79607707907" target='_blanc'>{send_whats_app_icon}</a>
                <a href="https://web.telegram.org/a/#1186952834" target='_blanc'>{send_telegram_message_icon}</a>
                <div>
                    <span onClick={handleMailIconClick}>{send_message_email_icon}</span>
                </div>
            </div>}

            {activeMailForm && <SendMessageModal/>}
        </div>
    </div>
  )
}

export default SendMessage