import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { COLLECTIONS } from '../consts/consts'
import { db } from '../firebase'
import { ChannelInfo, Message } from '../models/Channel'
import { useAppSelector } from '../store/hooks'

export const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const channel: ChannelInfo = useAppSelector(state => state.channel)
  const [subDocuments, setSubDocuments] = useState<Message[]>([])

  useEffect(() => {
    if (!channel.channelId) return
    let collectionRef = collection(
      db,
      collectionName,
      channel.channelId,
      subCollectionName
    )

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy('timeStamp', 'asc')
    )

    onSnapshot(collectionRefOrderBy, snapshot => {
      const rslt: Message[] = []
      snapshot.docs.forEach(doc =>
        rslt.push({
          message: doc.data().message,
          timestamp: doc.data().timeStamp,
          user: doc.data().user,
        })
      )

      setSubDocuments(rslt)
    })
  }, [channel.channelId, collectionName, subCollectionName])

  return { subDocuments }
}
