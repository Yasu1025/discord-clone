import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../models/User'

interface IFState {
  user: User | null
}

const initialState: IFState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: { payload: User }) => {
      state.user = payload
    },
    logout: state => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
