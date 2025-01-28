import { useState, createContext } from 'react'
import './App.css'
import { MainBtns, GenInfo } from './components/GenInfo'
import { Education } from './components/Educ'

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
    </Visible.Provider>
  )
}

export default App
export {Visible}
