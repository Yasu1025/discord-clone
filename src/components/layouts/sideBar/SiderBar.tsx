import { Add, ExpandMore } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import SideBarChannel from './SideBarChannel'
import './SideBar.scss'
import SideBarSettings from './SideBarSettings'
import { onSnapshot, collection, query } from 'firebase/firestore'
import { db } from '../../../firebase'
import { COLLECTIONS } from '../../../consts/consts'
import { Channel } from '../../../models/Channel'

const SiderBar = () => {
  const [channels, setChannels] = useState<Channel[]>([])
  const q = query(collection(db, COLLECTIONS.CHANNELS))

  useEffect(() => {
    onSnapshot(q, querySnapshot => {
      const channelsRslt: Channel[] = []
      querySnapshot.docs.forEach(doc => {
        channelsRslt.push({
          id: doc.id,
          channel: doc.data(),
        })
      })
      setChannels(channelsRslt)
    })
  }, [])

  return (
    <div className='siderBar'>
      <div className='sideBar-left'>
        <div className='server-icon'>
          <img src='./discordIcon.png' alt='' />
        </div>
        <div className='server-icon round'>
          <img src='./logo192.png' alt='' />
        </div>
      </div>
      <div className='sideBar-right'>
        <div className='siderBar-top lead'>
          <h3>Discordish</h3>
          <ExpandMore />
        </div>
        {/* TODO; SideBar channels */}
        <div className='channels'>
          <div className='channels-header'>
            <div className='channel-header lead'>
              <ExpandMore />
              <h4>チャンネル親</h4>
            </div>
            <Add className='channel-add lead' />
          </div>
          <div className='channels-list'>
            {channels.map(channel => (
              <SideBarChannel
                key={channel.id}
                id={channel.id}
                channel={channel}
              />
            ))}
          </div>
          <SideBarSettings />
        </div>
      </div>
    </div>
  )
}

export default SiderBar
