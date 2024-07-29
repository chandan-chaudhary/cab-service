

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookingRouteProps {
  [key: string]: boolean
}

interface bookRoute {
    bookingRoute:BookingRouteProps
}
const initialState : bookRoute= {
  bookingRoute: []
}
// const initialState={
   
export const bookingSlice = createSlice({
    name: 'bookings',
    initialState ,
    // :{
    //     bookingRoute:{},
    //     error: {
    //         error: 'something went wrong!'
    //     },
    // },
    reducers: {
        bookingRouteState :(state, action:PayloadAction<BookingRouteProps>) =>{
            state.bookingRoute.push(action.payload);
        }
    }
});

export const {bookingRouteState} = bookingSlice.actions;
export default bookingSlice.reducer; 