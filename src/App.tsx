import React, { useEffect } from 'react'
import './App.scss'
import Chat from './components/chat/Chat'
import SiderBar from './components/layouts/sideBar/SiderBar'
import Login from './components/login/Login'
import { auth } from './firebase'
import { login, logout } from './store/feature/userSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'

function App() {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(loginUser => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL!,
            email: loginUser.email!,
            name: loginUser.displayName!,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='App'>
      {user ? (
        <>
          <SiderBar />

          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
