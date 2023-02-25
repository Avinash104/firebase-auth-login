import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.user
    },
    updateUsername: (state, action) => {
      state.user["displayName"] = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUsername, setUser } = usersSlice.actions
export const selectUser = (state) => state.users.user
export default usersSlice.reducer
