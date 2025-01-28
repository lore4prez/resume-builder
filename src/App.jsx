import { useState, createContext } from 'react'
import './App.css'
import { MainBtns, GenInfo } from './components/GenInfo'
import { Education } from './components/Educ'
import { Experience } from './components/Exp'

// A universal valuable to keep track whether to show the input fields or not
const Visible = createContext({ 
  isVisible: true, 
  setVisibility: () => {}
});

function App() {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => setVisibility(!isVisible);

  return (
    <Visible.Provider value = {{isVisible, toggleVisibility}}>
      <MainBtns></MainBtns>
      <GenInfo></GenInfo>
      <Education></Education>
      <Experience></Experience>
    </Visible.Provider>
  )
}

export default App
export {Visible}
