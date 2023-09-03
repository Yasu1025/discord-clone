import { Add, ExpandMore } from '@mui/icons-material'
import React from 'react'
import SideBarChannel from './SideBarChannel'
import './SideBar.scss'
import SideBarSettings from './SideBarSettings'
import { COLLECTIONS } from '../../../consts/consts'
import useCollection from '../../../hooks/useCollection'
import { Channel } from '../../../models/Channel'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebase'

const SiderBar = () => {
  const { documents: channels }: { documents: Channel[] } = useCollection(
    COLLECTIONS.CHANNELS
  )

  const addChannel = async () => {
    let channelName = prompt('Create new channel')
    if (channelName) {
      await addDoc(collection(db, COLLECTIONS.CHANNELS), {
        channelName,
      })
    }
  }

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
            <Add className='channel-add lead' onClick={addChannel} />
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
