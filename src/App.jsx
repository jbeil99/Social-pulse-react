import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import YouTubeShortCreator from './components/forms/YouTubeShortCreator';
import NavbarComponent from "./components/navbar/NavbarComponent";
import SideMenuComponent from "./components/sidemenu/SideMenuComponent";
import NewButton from './components/navbar/NewButton';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavbarComponent />
      <SideMenuComponent />
      <Routes>
        <Route path="/" element={<NewButton />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/youtube-short-creator" element={<YouTubeShortCreator />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
