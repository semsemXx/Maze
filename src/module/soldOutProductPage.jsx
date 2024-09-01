import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import classes from '@/css/productPage.module.css';
import CadreProd from '@/image/cadre-.png';
import Merch from '@/image/shirt.png';
import Backdrop from './ReguPage/Backdrop';
import ModalProductPageView from './ReguPage/ModalProductPageView';

export default function SoldOutProductPage(props) {
  const ProdContainerRef = useRef(null);
  const location = useLocation();
  const [isAppearing, setIsAppearing] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToProdContainer && ProdContainerRef.current) {
      ProdContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    props.onBackdropToggle(isAppearing);
  }, [isAppearing]);

  return (
    <div className={classes.ProdContainer} ref={ProdContainerRef}>
      <div className={classes.PicturesSide}>
        <div className={classes.image1}>
          <img src={CadreProd} className={classes.cadre} alt="Cadre" />
          <img src={Merch} className={classes.merch} alt="Merch" />
        </div>
        <div className={classes.image2}>
          <img src={CadreProd} className={classes.cadre} alt="Cadre" />
          <img src={Merch} className={classes.merch} alt="Merch" />
        </div>
        <div className={classes.image3}>
          <img src={CadreProd} className={classes.cadre} alt="Cadre" />
          <img src={Merch} className={classes.merch} alt="Merch" />
        </div>
      </div>
      <div className={classes.ContentSide}>
        <div className={classes.InformationContainer}>
          <div className={classes.NamePrice}>
            <h1>{props.name}</h1>
            <p>SOLD OUT</p>
          </div>
          <div className={classes.meaning}>
            <p className={classes.prodname}>{props.name} Meaning</p>
            <button onClick={() => setIsAppearing(true)}>View</button>
            {isAppearing && <Backdrop />}
            {isAppearing && <ModalProductPageView setIsAppearing={setIsAppearing} content={props.content} />}
          </div>
        </div>
      </div>
    </div>
  );
}
