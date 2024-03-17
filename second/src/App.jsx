import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App
