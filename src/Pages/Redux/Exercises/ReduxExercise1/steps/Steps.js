import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, reset } from './stepsSlice'

export function Steps() {
  const step = useSelector(state => state.steps.value)
  const dispatch = useDispatch()

  for (var i = 0; i <= step.value; i++) {
    const eachStep = step.value[i]
    console.log('For loop log', eachStep)
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#0f0f0f',
          width: '800px',
          height: '210px',
          margin: '10px auto'
        }}
      >
        <div
          style={{
            paddingTop: '100px'
          }}
        >
          <span
            style={{
              color: '#fdfdfd',
              marginRight: '10px',
            }}
          >You have taken {step} so far!</span>

          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Take Step
          </button>
          <button
            aria-label='Reset value'
            onClick={() => dispatch(reset())}
          >
            Reset Steps
          </button>
        </div>

      </div>
    </div>
  )
}