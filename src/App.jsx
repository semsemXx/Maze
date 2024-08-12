import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Opening from './module/opening';
import MainPage from './module/mainPage';
import Login from './module/login';
import NavBar from './components/Page/NavBar';
<script src="https://kit.fontawesome.com/394db41cdb.js" crossorigin="anonymous"></script>


export default function App() {
  const location = useLocation();

  return (
    <div>
       {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/Main-Page" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

