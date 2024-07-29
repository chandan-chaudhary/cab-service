

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import  bookingReducer from "./bookingSlice";

const reducer = combineReducers({
    bookingRoute : bookingReducer
});


export default configureStore({reducer});