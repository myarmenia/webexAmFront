import './Button.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function Button({index, path, setMessageModal, setMessageModalResetPass}) {
  const { t, i18n } = useTranslation();
  const handleClick = (e) =>{
   setMessageModal && setMessageModal(false)
   setMessageModalResetPass &&   setMessageModalResetPass(false)
  }
  
  return (
    <NavLink  to={path} className="btn_" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {t('button.'+ index)}
    </NavLink>
  )
}

export default Button