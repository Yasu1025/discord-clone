import React, { useEffect, useState } from 'react'
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
} from 'firebase/firestore'
import { db } from '../firebase'
import { Channel } from '../models/Channel'

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([])
  const collectionsRef: Query<DocumentData> = query(collection(db, data))

  useEffect(() => {
    onSnapshot(collectionsRef, querySnapshot => {
      const result: Channel[] = []
      querySnapshot.docs.forEach(doc => {
        result.push({
          id: doc.id,
          channel: doc.data(),
        })
      })
      setDocuments(result)
    })
  }, [])
  return { documents }
}

export default useCollection
