import React,{useEffect} from 'react'
import './ChangePasswordModal.css'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { postResetPassword } from '../../store/slices/ResetEmailSlice/ResetEmailApi';

function ChangePasswordModal({openModal, setOpenModal}) {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch()

  function handleResetPass(e) {
    e.preventDefault()
    dispatch(postResetPassword({email: e.target[0].value}))
}

  return (
    <div onClick={(e) => setOpenModal(false)} className='change-password-modal' style={{display:  'flex' }}>
        <div onClick={(e) => e.stopPropagation()}  className='change-password-modal-block' style={{transform: openModal ? 'scale(1)' : 'scale(0)'}}>
            <h5>{t('reg_and_log.'+ '16')}</h5>
            <form onSubmit={handleResetPass}>
                <input type="mail" placeholder={t('reg_and_log.'+ '3')}/>
                <button type='submit' className="btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {t('reg_and_log.'+ '17')}
                </button>
            </form>
        </div>
    </div>
  )
}

export default ChangePasswordModal