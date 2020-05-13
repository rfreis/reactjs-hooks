import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterBOne() {
  const [count, increment, decrement, reset] = useCounter(100, 25)

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterBOne
