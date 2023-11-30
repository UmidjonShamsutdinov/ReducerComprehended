import { useReducer } from 'react'
import './App.css'

const reducer = (state, action)=>{
  switch(action.type){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("initState")) || 0)
  localStorage.setItem("initState", JSON.stringify(state))

  const increment = ()=>{
    dispatch({type: "INCREMENT"})
  }
  const decrement = ()=>{
    dispatch({type: "DECREMENT"})
  }

  return (
    <>
      <div>
        <button onClick={increment}>+</button>
          <h3>{state}</h3>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
