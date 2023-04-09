import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
    name: 'selectedCard',
    initialState: {
        selectedCard: []
    },
    reducers: {
        mountCard: (state, action) => {
            let temp = state.selectedCard
            let data = action.payload
            let flag = false
            temp.forEach((el, i) => {
                if (el.player === data.player && el.id === data.id) {
                    flag = true
                    return;
                }
            })
            if (!flag) temp.push(action.payload)
            state.selectedCard = temp
        },
        dismountCard: (state) => {
            state.selectedCard = []
        }
    },
})

export const { mountCard, dismountCard } = selectedCardSlice.actions

export default selectedCardSlice.reducer