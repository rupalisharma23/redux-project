import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../slices/todoSlices'
import userReducer from '../slices/useSlice'
import readUserReducer from '../slices/readUsers'

const store = configureStore({
    reducer:{
        todo:todoReducers,
        users:userReducer,
        allUsers:readUserReducer
    }
})

export default store