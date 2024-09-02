import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from '@/css/productPage.module.css';
import CadreProd from '@/image/cadre-.png';
import Merch from '@/image/shirt.png';
import Backdrop from './ReguPage/Backdrop';
import ModalProductPage from './ReguPage/ModalProductPage';
import ModalProductPageView from './ReguPage/ModalProductPageView';
import { CartContext } from '@/context/CartContext'; 

export default function ProductPage(props) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  
  const ProdContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    if (location.state?.scrollToProdContainer && ProdContainerRef.current) {
      ProdContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const item = {
        id: Math.random(),  
        name: props.name,
        size: selectedSize,
        price: props.price,
        image: Merch,  
      };

      addToCart(item);  
      navigate('/cart');  
    } else {
      alert('Please select a size.');
    }
  };

  useEffect(() => {
    props.onBackdropToggle(isShown);
  }, [isShown]);

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
            <p>{props.price}DT</p>
          </div>
          <div className={classes.meaning}>
            <p className={classes.prodname}>{props.name} Meaning</p>
            <button onClick={() => setIsAppearing(true)}>View</button>
            {isAppearing && <Backdrop />}
            {isAppearing && <ModalProductPageView setIsAppearing={setIsAppearing} content={props.content} />}
          </div>
          <div className={classes.Color}>
            <p>COLOR :</p>
            <button className={classes.black1}></button>
            <button className={classes.black2}></button>
            <button className={classes.interogation} onClick={() => setIsShown(true)}>(?)</button>
            {isShown && <Backdrop />}
            {isShown && <ModalProductPage setIsShown={setIsShown} />}
          </div>
          <div className={classes.size}>
            <p>SIZE :</p>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                className={`${classes[size]} ${selectedSize === size ? classes.selected : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className={`${classes.Select} ${isHovered ? classes.hovered : ''}`}>
            {!selectedSize ? (
              <p>SELECT A SIZE</p>
            ) : (
              <button 
                className={classes.addToCart} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            )}
          </div>
          <div className={classes.lineBetween}></div>
        </div>
      </div>
    </div>
  );
}
