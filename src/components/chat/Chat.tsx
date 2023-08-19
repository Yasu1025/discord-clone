import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import Message from './Message'

function Chat() {
  return (
    <div className='chat-wrap'>
      <ChatHeader />
      <div className='chat-msg-wrap'>
        <Message />
        <Message />
        <Message />
      </div>
      <div className='chat-input-wrap'>
        <ChatInput />
      </div>
    </div>
  )
}

export default Chat
