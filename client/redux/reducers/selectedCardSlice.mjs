import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
    name: 'selectedCard',
    initialState: {
        selectedCard: []
    },
    reducers: {
        mountCard: (state, action) => {
            state.selectedCard = action.payload
        },
        dismountCard: (state) => {
            state.selectedCard = []
        }
    },
})

export const { mountCard, dismountCard } = selectedCardSlice.actions

export default selectedCardSlice.reducer