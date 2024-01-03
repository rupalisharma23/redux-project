import { createSlice } from "@reduxjs/toolkit";

export const useSlices = createSlice({
    name:'users',
    initialState:{
        user:{
            email:'',
            password:'',
            isLoggedIn:false
        }
    },

    reducers:{
        login:(state,action)=>{
            console.log(action.payload)
           state.user.email = action.payload.email
           state.user.password = action.payload.password
           state.user.isLoggedIn = true
        },

        logout:(state,action)=>{
           state.user.email = ''
           state.user.password = ''
           state.user.isLoggedIn = false
        }
    }
})

export const {login,logout} = useSlices.actions

export default useSlices.reducer