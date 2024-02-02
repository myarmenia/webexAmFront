import React from 'react'
import { shareIcon } from '../../iconFolder/icon'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, TelegramShareButton, InstapaperShareButton, WhatsappShareButton, ViberShareButton } from 'react-share';
import './ShareComponents.css'

function ShareComponent() {
    return (
        <div className='share_div'>
            <span>{shareIcon}</span>
            <div className="share-buttons">
                <FacebookShareButton url={window.location.href} quote={''}>
                    Facebook
                </FacebookShareButton>

                <TwitterShareButton url={window.location.href} title={''}>
                    Twitter
                </TwitterShareButton>

                <LinkedinShareButton url={window.location.href} title={''}>
                    LinkedIn
                </LinkedinShareButton>

                <TelegramShareButton url={window.location.href} title={''}>
                    Telegram
                </TelegramShareButton>

                <WhatsappShareButton url={window.location.href} title={''}>
                    WhatsUp
                </WhatsappShareButton>

                <ViberShareButton url={window.location.href} title={''}>
                    Viber
                </ViberShareButton>
            </div>
        </div>
    )
}

export default ShareComponent