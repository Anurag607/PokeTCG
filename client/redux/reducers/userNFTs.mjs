import { createSlice } from "@reduxjs/toolkit";

const userNFTsSlice = createSlice({
    name: 'userNFTs',
    initialState: {
        userNFTs: []
    },
    reducers: {
        setUserNFTs: (state, action) => {
            state.userNFTs = action.payload
        },
        clearUserNFTs: (state) => {
            state.userNFTs = []
        }
    },
})

export const { setUserNFTs, clearUserNFTs } = userNFTsSlice.actions

export default userNFTsSlice.reducer