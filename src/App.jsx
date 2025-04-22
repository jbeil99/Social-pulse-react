import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YouTubeShortCreator from './components/forms/YouTubeShortCreator'
import NavbarComponent from "./components/navbar/NavbarComponent";
import SideMenuComponent from "./components/sidemenu/SideMenuComponent";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewButton from './components/navbar/NewButton';
=======
import PostForm from './components/forms/PostForm'
import BufferPostUI from './components/forms/postui'
>>>>>>> 30e2dc6 (remodify)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <SideMenuComponent />
<<<<<<< HEAD
      {/* <YouTubeShortCreator /> */}
      <Router>
      <Routes>
        <Route path="/" element={<NewButton />} />
        {/* <Route path="/youtube-  short-creator" element={<YouTubeShortCreator />} /> */}
      </Routes>
    </Router>
=======
      <YouTubeShortCreator />
      {/* <BufferPostUI /> */}
      {/* <div className="min-h-screen bg-gray-100 p-4">
      <PostForm/>
      
    </div> */}
>>>>>>> 30e2dc6 (remodify)
    </>
    
  )
}

export default App
