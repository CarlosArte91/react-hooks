import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import FatherComponent from './components/react_hooks/use_ref/practice_1/father_component'
import InputComponent from './components/react_hooks/use_ref/practice_2/input_component'
import NoRenderAgain from './components/react_hooks/use_ref/practice_3/no_render_again'
import DidMountFather from './components/react_hooks/use_effect/practice_1/did_mount_father'
import DidUpdateFather from './components/react_hooks/use_effect/practice_2/did_update_father'
import WillUnmountFather from './components/react_hooks/use_effect/practice_3/will_unmount_father'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
			<WillUnmountFather />
    </div>
  )
}

export default App
