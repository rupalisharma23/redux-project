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

export const updateApi = createAsyncThunk('userputapi',async(data)=>{
    try{
      const response = await axios.put(`https://65967d276bb4ec36ca02b939.mockapi.io/api/users/users/${data.id}`,{
        name:data.name
      })
      console.log(response)
      return data
    }
    catch(error){
     return {id:data.id,error:'error in getApi'}
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
            let temp = state.allUsers.filter((i)=>i.id==action.payload.id)[0]
            temp.name = action.payload.name
        }

    },
    extraReducers:(builder) =>{
        builder.addCase(getApi.pending,(state)=>{
            state.loader=true
        })

        .addCase(getApi.fulfilled,(state,action)=>{
            state.loader=false
            let temp = []
            action.payload.forEach((i)=>{
                temp.push({...i,loader:false,error:''})
            })
            state.allUsers = temp
        })

        .addCase(getApi.rejected,(state,action)=>{
            state.loader=false
            state.error = action.payload
        })

        .addCase(updateApi.pending,(state,action)=>{
            let temp = state.allUsers.filter((i)=>i.id==action.payload.id)[0]
            temp.loader=true
        })

        .addCase(updateApi.fulfilled,(state,action)=>{
            let temp = state.allUsers.filter((i)=>i.id==action.payload.id)[0]
            temp.loader=false
        })

        .addCase(updateApi.rejected,(state,action)=>{
            let temp = state.allUsers.filter((i)=>i.id==action.payload.id)[0]
            temp.loader=false
            temp.error = action.payload.error
        })
    }
})

export const {deleteUser,updateUser} = actionsOnUsers.actions

export default actionsOnUsers.reducer