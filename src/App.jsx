import { useState } from 'react'
import './App.css'
import { HomePage } from './components/Home'
import { Index } from './components/Index'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className="App">

      { isLoggedIn ? 
      (<HomePage setIsLoggedIn={setIsLoggedIn} />)
      :
      (<Index setIsLoggedIn={setIsLoggedIn}/>)}
      
    

    </div>
  )
}

export default App
