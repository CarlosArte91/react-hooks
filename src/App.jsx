import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FatherComponent from './components/react_hooks/use_ref/practice_1/father_component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
			<FatherComponent />
    </div>
  )
}

export default App
