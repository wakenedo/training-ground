import { createSlice } from '@reduxjs/toolkit'

export const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    reset: state => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, reset, incrementByAmount } = stepsSlice.actions

export default stepsSlice.reducer