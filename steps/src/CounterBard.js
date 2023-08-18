import React from 'react'

const CounterBard = ({count, setState}) => {
  return (
    <div>
        <h1>The count is: {count}</h1>
        <button onClick={() => setState({ count: count + 1 })}>Increment</button>
    </div>
  )
}

export default CounterBard