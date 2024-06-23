// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers:{
//         setCredentials:(state, action) => {
//             state.userInfo=action.payload
//             localStorage.setItem('userInfo', JSON.stringify(action.payload))
//         },
//         logout:(state, action) => {
//             state.userInfo=null
//             localStorage.removeItem('userInfo')
//         }
//     }
// })

// export default authSlice.reducer
// export const { setCredentials, logout} = authSlice.actions 
import { createSlice } from "@reduxjs/toolkit";

const getUserInfoFromLocalStorage = () => {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
        try {
            return JSON.parse(userInfoString);
        } catch (error) {
            console.error('Error parsing userInfo from localStorage:', error);
            return null;
        }
    }
    return null;
}

const initialState = {
    userInfo: getUserInfoFromLocalStorage()
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;
