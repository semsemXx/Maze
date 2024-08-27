import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Opening from './module/opening';
import MainPage from './module/mainPage';
import Login from './module/login';
import NavBar from './components/Page/NavBar';
import NavBar2 from './components/Page/NavBar2';
import ProductPage from './module/ProductPage';

export default function App() {
  const location = useLocation();
  const [isBackdropShown, setIsBackdropShown] = useState(false);

  const handleBackdropToggle = (isShown) => {
    setIsBackdropShown(isShown);
  };

  return (
    <div>
      {location.pathname !== '/' && !isBackdropShown && location.pathname !== '/Login' && <NavBar />}
      {location.pathname == '/Login' && <NavBar2 />}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/Main-Page" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/ProductPage1"
          element={<ProductPage 
            name="mateha" 
            price={20} 
            onBackdropToggle={handleBackdropToggle} 
            content="Delve into the depths of perception with a thought-provoking mantra delicately inscribed on its high quality fabric. Embodying the enigma of existence, this tee beckons contemplation, reminding us of the paradox within our sight. Adorned with a concealed guardian (a 3D eye on the back) it whispers of hidden safeguards against life's lurking uncertainties. Adorn yourself with this embodiment of profound mystery, where fashion and philosophy converge."
          />}
        />
        <Route
          path="/ProductPage2"
          element={<ProductPage 
            name="zeb123" 
            price={0.500} 
            onBackdropToggle={handleBackdropToggle} 
            content="Delic"
          />}
        />
      </Routes>
    </div>
  );
}
