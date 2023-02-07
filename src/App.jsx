import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import FatherComponent from './components/react_hooks/use_ref/practice_1/father_component'
import InputComponent from './components/react_hooks/use_ref/practice_2/input_component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
			<InputComponent />
    </div>
  )
}

export default App
