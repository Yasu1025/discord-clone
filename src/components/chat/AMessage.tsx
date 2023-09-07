import { Avatar } from '@mui/material'
import React from 'react'
import { Message } from '../../models/Channel'
import './Message.scss'

type Props = {
  message: Message
}

export const AMessage = ({ message }: Props) => {
  return (
    <div className='message'>
      <Avatar src={message.user.photo} />
      <div className='message-info'>
        <h4>
          {message.user.name}
          <span className='message-timestamp'>
            {new Date(message.timestamp.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  )
}
