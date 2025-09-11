import { useState } from 'react'
import './App.css'
import CollegeRegistrationForm from './components/CollegeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <CollegeRegistrationForm />
   </>
  )
}

export default App
