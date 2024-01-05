import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk('usergetapi',async()=>{
    try{
      const response = await axios.get(`https://65967d276bb4ec36ca02b939.mockapi.io/api/users/users`)
      console.log(response)
      return response.data
    }
    catch(error){
     return 'error in getApi'
    }
})

export const actionsOnUsers = createSlice({
    name:'oprations',
    initialState:{
        loader : false,
        allUsers:[],
        error:''
    },
    reducers:{

        deleteUser:(sate,action)=>{
           console.log(sate)
        },
        updateUser:(state,action)=>{
          console.log(state)
        }

    },
    extraReducers:(builder) =>{
        builder.addCase(getApi.pending,(state)=>{
            state.loader=true
        })

        .addCase(getApi.fulfilled,(state,action)=>{
            state.loader=false
            state.allUsers = action.payload
        })

        .addCase(getApi.rejected,(state,action)=>{
            state.loader=false
            state.error = action.payload
        })
    }
})

export const {deleteUser,updateUser} = actionsOnUsers.actions

export default actionsOnUsers.reducer