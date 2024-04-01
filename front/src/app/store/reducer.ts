
// // gestions des états généraux du Store

// import type { PayloadAction } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

// interface Action {
//     type: string,
//     payload: any;
// }

// const initialState = {
//     isAuthenticated: false,
//     token: null,
//     userName: null,
//     userEmail: null,
// } as {
//     isAuthenticated: boolean;
//     token: string | null;
//     userName: string | null;
//     userEmail: string | null;
// }

// // const reducer = (state: State = initialState, action: Action) => {
// const reducer = (state = initialState, action: Action) => {
//     switch (action.type) {
//         case 'SET_ISAUTHENTICATED':
//             return {
//                 ...state,
//                 isAuthenticated: action.payload
//             };
//         default:
//             return state;
//     }
// }

// export default reducer;
