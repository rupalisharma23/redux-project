import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSaveApi = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(
      `https://65967d276bb4ec36ca02b939.mockapi.io/api/users/users`,
      {
        name: data.name,
        password: data.password,
      }
    );

    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

export const useSlices = createSlice({
  name: "users",
  initialState: {
    user: {
      name: "",
      password: "",
      isLoggedIn: false,
      loader: false,
      error: "",
    },
  },

  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
      state.user.isLoggedIn = true;
    },

    logout: (state, action) => {
      state.user.name = "";
      state.user.password = "";
      state.user.isLoggedIn = false;
    },
  },

  extraReducers:(buider) =>{
    buider.addCase(userSaveApi.pending,(state)=>{
        state.user.loader=true
    })
    buider.addCase(userSaveApi.fulfilled,(state,action)=>{
        state.user.loader=false
        state.user.name = action.payload.name
        state.user.password = action.payload.password
    })
    buider.addCase(userSaveApi.rejected,(state)=>{
        state.user.error='error in create api'
    })
  }
});

export const { login, logout } = useSlices.actions;

export default useSlices.reducer;
