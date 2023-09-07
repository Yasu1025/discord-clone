import React, { useState } from 'react'
import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotions,
  GifOutlined,
} from '@mui/icons-material'
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from 'firebase/firestore'
import { COLLECTIONS } from '../../consts/consts'
import { db } from '../../firebase'
import './ChatInput.scss'
import { useAppSelector } from '../../store/hooks'

type Props = {
  channelId: string | null
}

export const ChatInput = ({ channelId }: Props) => {
  const [inputText, setInputText] = useState<string>('')
  const user = useAppSelector(state => state.user.user)

  const onSendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!channelId) return
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      COLLECTIONS.CHANNELS,
      channelId,
      COLLECTIONS.MESSAGES
    )

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timeStamp: serverTimestamp(),
        user: user,
      }
    )

    setInputText('')
  }

  return (
    <div className='chatInput'>
      <AddCircleOutline fontSize='large' />
      <form>
        <input
          type='text'
          placeholder={`#Send to channel`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
          value={inputText}
        />
        <button
          type='submit'
          className='chatInputButton'
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onSendMessage(e)
          }
        >
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
