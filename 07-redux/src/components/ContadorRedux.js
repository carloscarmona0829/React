import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/counterSlice'

export function ContadorRedux() {

  const count = useSelector((state) => state.counterSlice.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <h3>{count}</h3>  
        <nav> 
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}> - </button>
        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(10))}> +10 </button>          
        <button aria-label="Increment value" onClick={() => dispatch(increment())}> + </button>        
        </nav>        
      </div>
    </div>
  )
}