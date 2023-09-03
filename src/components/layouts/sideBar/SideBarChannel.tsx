import React from 'react'
import { Channel } from '../../../models/Channel'
import './SideBarChannel.scss'

type Props = {
  id: string
  channel: Channel
}

const SiderChannel = ({ id, channel }: Props) => {
  return (
    <div className='sideBarChannel'>
      <h5>
        <span className='sideBarChannel-hash'>#</span>
        {channel.channel.channelName}
      </h5>
    </div>
  )
}

export default SiderChannel
