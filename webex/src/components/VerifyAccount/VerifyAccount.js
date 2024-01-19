import React, { useEffect } from 'react'
import { logoImage } from '../../images/images'
import './VerifyAccount.css'
import { useDispatch, useSelector } from 'react-redux'
import { getData, selectVerifyAccount } from '../../store/slices/VerifyAccountSlice/VerifyAccountSlice'
import { postVerifyAccount } from '../../store/slices/VerifyAccountSlice/VerifyAccountApi'
import { useNavigate } from 'react-router-dom'
function VerifyAccount() {

  const dispatch = useDispatch()
  const accountResp = useSelector(selectVerifyAccount)
  const navigate = useNavigate()
  const leng = localStorage.getItem('lang')
  const getMessageData = useSelector(getData)
  console.log(accountResp, "accountResp")
console.log(getMessageData, "getMessageDatagetMessageData")
  useEffect(() => {
    const window_token = window.location.href.split('/')
    const renderObj = {
        token: window_token[5],
        email: window_token[6]
    }

    dispatch(postVerifyAccount(renderObj))
    console.log(accountResp.data.success);
}, [])

  return (
    <div className='verify-account'>
        <div className='container'>
            {logoImage}
            <p>{(!accountResp?.data.success) && accountResp?.data.message}</p> 
        </div>
    </div>
  )
}

export default VerifyAccount