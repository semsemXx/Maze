import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Opening from '@/module/opening';
import MainPage from '@/module/mainPage';
import Login from './module/login';
import NavBar from './components/Page/NavBar';
import NavBar2 from './components/Page/NavBar2';
import ProductPage from './module/ProductPage';
import SoldOutProductPage from '@/module/soldOutProductPage';
import Cart from '@/module/cart';
import Checkout from '@/module/checkout';
import Resetpass from "@/module/resetpass";
import PreviousCollections from './module/previousCollections';
import Confirmation from './module/ReguPage/Confirmation';
import Philosophy from './module/Philosophy';
import Admindash from './module/admindash';

export default function App() {
  const location = useLocation();
  const [isBackdropShown, setIsBackdropShown] = useState(false);

  const handleBackdropToggle = (isShown) => {
    setIsBackdropShown(isShown);
  };

  useEffect(() => {
    if (location.pathname === '/Previous-Collections' || location.pathname === '/Main-Page') {
      document.body.style.overflowX = 'hidden';
    } else if (location.pathname === '/Our-Philosophy') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [location.pathname]);
  


  return (
    <div>
      {location.pathname !== '/' && !isBackdropShown && location.pathname !== '/Login' && location.pathname !=='/Checkout' && <NavBar />}
      {location.pathname === '/Login' && <NavBar2 />}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/Main-Page" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/resetpass" element={<Resetpass />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admindash" element={<Admindash />} />
        <Route
          path="/ProductPage1"
          element={<SoldOutProductPage 
            name="MATEHA1" 
            onBackdropToggle={handleBackdropToggle} 
            content="Delic"
          />}
        />
        <Route
          path="/ProductPage2"
          element={<ProductPage 
            name="MATEHA2" 
            price={40} 
            onBackdropToggle={handleBackdropToggle} 
            content="Delve into the depths of perception with a thought-provoking mantra delicately inscribed on its high quality fabric. Embodying the enigma of existence, this tee beckons contemplation, reminding us of the paradox within our sight. Adorned with a concealed guardian (a 3D eye on the back) it whispers of hidden safeguards against life's lurking uncertainties. Adorn yourself with this embodiment of profound mystery, where fashion and philosophy converge."
          />}
        />
        <Route
          path="/ProductPage3"
          element={<ProductPage 
            name="MATEHA3" 
            price={60} 
            onBackdropToggle={handleBackdropToggle} 
            content="Delic"
          />}
        />
        <Route path="/Previous-Collections" element={<PreviousCollections />} />
        <Route path="/Our-Philosophy" element={<Philosophy/>} />
      </Routes>
    </div>
  );
}
