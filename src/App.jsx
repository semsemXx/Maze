import React from 'react'
import Opening from './module/opening';
import { Routes, Route } from "react-router-dom";
import MainPage from './module/mainPage';

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Opening />} />
            <Route path="/Main-Page" element={<MainPage />} />
        </Routes>
    </div>
  );
}

