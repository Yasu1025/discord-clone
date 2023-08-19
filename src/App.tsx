import React from 'react'
import './App.scss'
import Chat from './components/chat/Chat'
import SiderBar from './components/layouts/sideBar/SiderBar'

function App() {
  return (
    <div className='App'>
      <SiderBar />
      <Chat />
    </div>
  )
}

export default App
