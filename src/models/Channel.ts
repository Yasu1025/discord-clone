import { DocumentData, Timestamp } from 'firebase/firestore'
import { User } from './User'

export interface Channel {
  id: string
  channel: DocumentData
}

export interface ChannelInfo {
  channelId: string | null
  channelName: string | null
}

export interface Message {
  message: string
  timestamp: Timestamp
  user: User
}
