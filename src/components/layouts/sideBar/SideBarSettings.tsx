import { Headphones, Mic, Settings } from '@mui/icons-material'
import React from 'react'
import './SideBarSettings.scss'

function SideBarFooter() {
  return (
    <div className='sidebar-settings'>
      <div className='account'>
        <img src='./logo192.png' alt='' />
        <div className='accountName'>
          <h4>Account Name</h4>
          <span>#ID1234</span>
        </div>
      </div>
      <div className='sidebarVoice'>
        <Mic />
        <Headphones />
        <Settings />
      </div>
    </div>
  )
}

export default SideBarFooter
