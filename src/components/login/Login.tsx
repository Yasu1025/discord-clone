import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import React from 'react'
import './Login.scss'

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(error => {
      alert(error.message)
    })
  }

  return (
    <div className='login'>
      {/* <h2>ログインページです。</h2> */}

      <div className='loginLogo'>
        <img src='./discordIcon.png' alt='' />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login
