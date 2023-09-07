import { createSlice } from '@reduxjs/toolkit'
import { ChannelInfo } from '../../models/Channel'

const initialState: ChannelInfo = {
  channelId: null,
  channelName: null,
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo(state, { payload }: { payload: ChannelInfo }) {
      state.channelId = payload.channelId
      state.channelName = payload.channelName
    },
  },
})

export const { setChannelInfo } = channelSlice.actions
export default channelSlice.reducer
