import { ExpandMore } from '@mui/icons-material'
import React from 'react'
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
          {/* TODO; SideBar channels */}
        </div>
      </div>
    </div>
  )
}

export default SiderBar
