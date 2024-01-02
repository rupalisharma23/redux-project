import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../slices/todoSlices'

const store = configureStore({
    reducer:todoReducers
})

export default store