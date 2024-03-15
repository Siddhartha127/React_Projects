import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <ContactHeader/>
    </div>
  )
}

export default App
