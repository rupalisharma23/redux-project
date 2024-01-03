import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../slices/todoSlices'
import userReducer from '../slices/useSlice'

const store = configureStore({
    reducer:{
        todo:todoReducers,
        users:userReducer
    }
})

export default store