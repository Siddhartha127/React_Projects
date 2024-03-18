import { useState } from "react"
import StartGame from "./components/StartGame"


function App() {
 
  const[isGameStarted, setIsGameStarted]= useState(false);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev)
  }
  return (
    <>
      <StartGame/>
    </>
  )
}

export default App
