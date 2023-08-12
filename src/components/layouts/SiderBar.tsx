import { Add, ExpandMore } from '@mui/icons-material'
import React from 'react'
import SideBarChannel from '../SideBarChannel'
import './SideBar.scss'

function SiderBar() {
  return (
    <div className='siderBar'>
      <div className='sideBar-left'>
        <div className='server-icon'>
          <img src='./logo192.png' alt='' />
        </div>
        <div className='server-icon'>
          <img src='./logo192.png' alt='' />
        </div>
      </div>
      <div className='sideBar-right'>
        <div className='siderBar-top'>
          <h3>Discordish</h3>
          <ExpandMore />
        </div>
        {/* TODO; SideBar channels */}
        <div className='channels'>
          <div className='channels-header'>
            <div className='channel-header'>
              <ExpandMore />
              <h4>チャンネル親</h4>
            </div>
            <Add className='channel-add' />
          </div>
          <div className='channels-list'>
            <SideBarChannel />
            <SideBarChannel />
            <SideBarChannel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiderBar
