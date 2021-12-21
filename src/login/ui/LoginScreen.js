import React, { useState } from 'react'
import './LoginScreen.css'
import logo from '../../img/secret-santa.png'
import { Input, Button, notification } from 'antd'
import { showLoader, hideLoader } from '../../core/loader/state/loaderSlice'
import { useDispatch } from 'react-redux'
import LoginNetwork from '../network/LoginNetwork'
import { setGiftee, setToken, setUser } from '../state/loginSlice'

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const dispatch = useDispatch()

  const onLoginClick = async () => {
    dispatch(showLoader())
    try {
      const response = await LoginNetwork.login(phoneNumber)
      dispatch(setToken(response.token))
      dispatch(setUser(response.user))
      dispatch(setGiftee(response.giftee))
    } catch (e) {
      notification.warn({ message: e })
    }
    dispatch(hideLoader())
  }
  return (
    <div className='container'>
      <img src={logo} />
      <div className='form-container'>
        <Input
          placeholder='Phone Number'
          onChange={(e) => { setPhoneNumber(e.target.value) }}
          size='large'
          allowClear />
        <Button
          className='login-button'
          type="primary"
          onClick={onLoginClick}>
          Login
        </Button>
      </div>
    </div>
  )
}


export default LoginScreen