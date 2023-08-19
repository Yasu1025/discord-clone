import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotions,
  GifOutlined,
} from '@mui/icons-material'
import React from 'react'
import './ChatInput.scss'

function ChatInput() {
  return (
    <div className='chatInput'>
      <AddCircleOutline fontSize='large' />
      <form>
        <input type='text' placeholder={`#Send to hogehoge`} />
        <button type='submit' className='chatInputButton'>
          Send
        </button>
      </form>

      <div className='chatInputIcons'>
        <CardGiftcardOutlined />
        <GifOutlined />
        <EmojiEmotions />
      </div>
    </div>
  )
}

export default ChatInput
