import { useState } from 'react'
// import { data } from "./data"
import './App.css'
import People from './People'
import User from './User'
import UseEffectSam from './UseEffectSam'
import Conditional from './Conditional'
import UseEffectCleanUp from './UseEffectCleanUp'
// import GreetingsComp from './pages/GreetingsFolder/GreetingsComp'
// import HelloWorldComp from './pages/HelloWorldFolder/HelloWorldComp'
import {GreetingsComp, HelloWorldComp} from './pages'
import Form from './Form'
import Challenge from './Challenge'
import Form2 from './Form2'


function App() {
  const [count, setCount] = useState(0)
  const [useEfft, setUseEfft] = useState(false)

  // let count = 0
  function add(){
  //   count = count + 1
  setCount(prev => {
      const newState = prev + 1
      return newState
    })
    console.log(count)
  } 
  
  
  function toggleEffectCleanUp(){
    // setUseEfft(!useEfft)

    if(useEfft){
      setUseEfft(false)
      return;
    }
    setUseEfft(true)
  }


  return (
    <>
      <p>{count}</p>
      <button onClick={add}>click Add</button>
      <br />
      <br />
      <br />
      <People />
      <User />
      <UseEffectSam />
      <Conditional />
      <button onClick={toggleEffectCleanUp}>
      This button is for UseEffect CleanUp
      </button>
      {useEfft && <UseEffectCleanUp />}
      <GreetingsComp />
      <HelloWorldComp />
      <Form />
      <Challenge />
      <Form2 />
    </>
  )
}

export default App
