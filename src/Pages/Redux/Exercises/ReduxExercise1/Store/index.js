import { configureStore } from '@reduxjs/toolkit'
import stepsReducer from '../steps/stepsSlice'


export default configureStore({
  reducer: {
    steps: stepsReducer,
  }
})