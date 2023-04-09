import { combineReducers } from "redux";
import modalSlice from './reducers/modal.mjs'
import metaMaskAuthSlice from './reducers/metaMaskAuth.mjs'
import selectedCardSlice from "./reducers/selectedCardSlice.mjs";
import winnerSlice from "./reducers/winnerSlice.mjs";

export default combineReducers({
    modal: modalSlice,
    metaMaskAuth: metaMaskAuthSlice,
    selectedCard: selectedCardSlice,
    winner: winnerSlice,
});
