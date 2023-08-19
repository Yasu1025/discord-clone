import { Avatar } from '@mui/material'
import React from 'react'
import './Message.scss'

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message-info'>
        <h4>
          Message Info
          <span className='message-timestamp'>2023/01/01</span>
        </h4>
        <p>Message body</p>
      </div>
    </div>
  )
}

export default Message
