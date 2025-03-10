// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const countReducer = (_prevValue, newValue) => newValue
// const countReducer = (prevValue, step) => prevValue + step
// const countReducer = (prevValueObj, newValueObj) => newValueObj
// const countReducer = (prevValue, newValue) => {
//   if (typeof newValue === 'function') return newValue(prevValue)
//   else return newValue
// }
const countReducer = (currentState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: currentState.count + action.step}
    default:
      return currentState
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useReducer(countReducer, initialCount)
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)
  // const increment = () => setCount(step)
  // const increment = () => setState({count: count + step})
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})
  // return <button onClick={increment}>{count}</button>
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
