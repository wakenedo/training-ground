import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'


export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div

    >
      <div
        style={{
          margin: '10px auto',
          alignItems: 'center',
        }}
      >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{
            padding: '20px',
            fontSize: '55px'
          }}
        >
          +
        </button>
        <span
          style={{
            margin: '0 10px',
            fontSize: '55px'
          }}
        >{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{
            padding: '20px 26.95px 20px 26.95px',
            fontSize: '55px'
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}