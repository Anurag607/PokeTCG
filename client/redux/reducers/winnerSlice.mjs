import { createSlice } from "@reduxjs/toolkit";

const winnerSlice = createSlice({
    name: 'winner',
    initialState: {
        winner: null
    },
    reducers: {
        setWinner: (state, action) => {
            state.winner = action.payload
        }
    },
})

export const { setWinner } = winnerSlice.actions

export default winnerSlice.reducer