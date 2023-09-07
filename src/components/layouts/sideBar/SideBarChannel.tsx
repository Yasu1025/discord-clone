import React from 'react'
import { Channel, ChannelInfo } from '../../../models/Channel'
import { setChannelInfo } from '../../../store/feature/channelSlice'
import { useAppDispatch } from '../../../store/hooks'
import './SideBarChannel.scss'

type Props = {
  id: string
  channel: Channel
}

const SiderChannel = ({ id, channel }: Props) => {
  const channelName: string = channel.channel.channelName
  const dispatch = useAppDispatch()

  const onSelectChannel = (channelInfo: ChannelInfo) => {
    dispatch(setChannelInfo(channelInfo))
  }

  return (
    <div
      className='sideBarChannel'
      onClick={() => onSelectChannel({ channelId: id, channelName })}
    >
      <h5>
        <span className='sideBarChannel-hash'>#</span>
        {channelName}
      </h5>
    </div>
  )
}

export default SiderChannel
