import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTubeShortCreator from './components/forms/YouTubeShortCreator'
import NavbarComponent from "./components/navbar/NavbarComponent";
import SideMenuComponent from "./components/sidemenu/SideMenuComponent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <SideMenuComponent />
      <YouTubeShortCreator />
    </>
  )
}

export default App
