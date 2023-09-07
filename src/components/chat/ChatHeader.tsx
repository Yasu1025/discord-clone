import {
  Help,
  Notifications,
  PeopleAlt,
  PushPin,
  Search,
  Send,
} from '@mui/icons-material'
import React from 'react'
import { ChannelInfo } from '../../models/Channel'
import './ChatHeader.scss'

type Props = {
  channel: ChannelInfo
}

export const ChatHeader = ({ channel }: Props) => {
  return (
    <div className='chatHeader'>
      <div className='chatHeader-left'>
        <h3>
          <span className='chatHeader-hash'>#</span>
          {channel.channelName}
        </h3>
      </div>
      <div className='chatHeader-right'>
        <Notifications />
        <PushPin />
        <PeopleAlt />
        <div className='chatHeader-search'>
          <input type='text' placeholder='Search' />
          <Search />
        </div>
        <Send />
        <Help />
      </div>
    </div>
  )
}
