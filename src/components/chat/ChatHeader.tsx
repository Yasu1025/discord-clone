import {
  Help,
  Notifications,
  PeopleAlt,
  PushPin,
  Search,
  Send,
} from '@mui/icons-material'
import React from 'react'
import './ChatHeader.scss'

function ChatHeader() {
  return (
    <div className='chatHeader'>
      <div className='chatHeader-left'>
        <h3>
          <span className='chatHeader-hash'>#</span>
          Chat Header
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

export default ChatHeader
