import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTubeShortCreator from './components/forms/YouTubeShortCreator'
import NavbarComponent from "./components/navbar/NavbarComponent";
import SideMenuComponent from "./components/sidemenu/SideMenuComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewButton from './components/navbar/NewButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <SideMenuComponent />
      {/* <YouTubeShortCreator /> */}
      <Router>
        <Routes>
          <Route path="/" element={<NewButton />} />
          {/* <Route path="/youtube-short-creator" element={<YouTubeShortCreator />} /> */}
        </Routes>
      </Router>
    </>
    
  )
}

export default App
