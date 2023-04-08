import { createSlice } from "@reduxjs/toolkit";

const metaMaskAuthSlice = createSlice({
    name: 'metaMaskAuth',
    initialState: {
        isConnected: false
    },
    reducers: {
        connected: (state) => {
            state.isConnected = true
        },
        notConnected: (state) => {
            state.isConnected = false
        }
    },
})

export const { connected, notConnected } = metaMaskAuthSlice.actions

export default metaMaskAuthSlice.reducer