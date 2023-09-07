import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { COLLECTIONS } from '../../consts/consts'
import { db } from '../../firebase'
import { ChannelInfo, Message } from '../../models/Channel'
import { useAppSelector } from '../../store/hooks'
import './Chat.scss'
import { ChatHeader } from './ChatHeader'
import { ChatInput } from './ChatInput'
import { AMessage } from './AMessage'

export const Chat = () => {
  const channel: ChannelInfo = useAppSelector(state => state.channel)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!channel.channelId) return
    let collectionRef = collection(
      db,
      COLLECTIONS.CHANNELS,
      channel.channelId,
      COLLECTIONS.MESSAGES
    )

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy('timeStamp', 'asc')
    )

    onSnapshot(collectionRefOrderBy, snapshot => {
      const rslt: Message[] = []
      snapshot.docs.forEach(doc =>
        rslt.push({
          message: doc.data().message,
          timestamp: doc.data().timeStamp,
          user: doc.data().user,
        })
      )

      setMessages(rslt)
    })
  }, [channel.channelId])
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
