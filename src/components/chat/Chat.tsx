import React from 'react'
import { COLLECTIONS } from '../../consts/consts'
import { ChannelInfo } from '../../models/Channel'
import { useAppSelector } from '../../store/hooks'
import './Chat.scss'
import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { AMessage } from './AMessage'
import { useSubCollection } from '../../hooks/useSubCollection'

export const Chat = () => {
  const channel: ChannelInfo = useAppSelector(state => state.channel)
  const { subDocuments: messages } = useSubCollection(
    COLLECTIONS.CHANNELS,
    COLLECTIONS.MESSAGES
  )

  return (
    <div className='chat-wrap'>
      {channel.channelId ? (
        <>
          <ChatHeader channel={channel} />
          <div className='chat-msg-wrap'>
            {messages.map((message, index) => (
              <AMessage key={index} message={message} />
            ))}
          </div>
          <div className='chat-input-wrap'>
            <ChatInput channelId={channel.channelId} />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Chat
