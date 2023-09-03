import { Headphones, Mic, Settings } from '@mui/icons-material'
import React from 'react'
import { auth } from '../../../firebase'
import { useAppSelector } from '../../../store/hooks'
import './SideBarSettings.scss'

const SideBarFooter = () => {
  const user = useAppSelector(state => state.user)

  return (
    <div className='sidebar-settings'>
      <div className='account'>
        <img
          src={user?.photo}
          alt={`${user?.name}-${user?.photo}`}
          onClick={() => auth.signOut()}
        />
        <div className='accountName'>
          <h4>{user?.name}</h4>
          <span>#{user?.uid.substring(0, 4)}</span>
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
