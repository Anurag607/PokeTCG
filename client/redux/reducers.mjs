import { combineReducers } from "redux";
import modalSlice from './reducers/modal.mjs'
import metaMaskAuthSlice from './reducers/metaMaskAuth.mjs'

export default combineReducers({
    modal: modalSlice,
    metaMaskAuth: metaMaskAuthSlice
});
