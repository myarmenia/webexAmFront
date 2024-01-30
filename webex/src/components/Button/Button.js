import './Button.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function Button({index, path, setMessageModal}) {
  const { t, i18n } = useTranslation();
  
  return (
    <NavLink  to={path} className="btn_" onClick={()=> setMessageModal && setMessageModal(false)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {t('button.'+ index)}
    </NavLink>
  )
}

export default Button