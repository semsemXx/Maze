import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from '@/css/productPage.module.css';
import CadreProd from '@/image/cadre-.png';
import Backdrop from './ReguPage/Backdrop';
import ModalProductPage from './ReguPage/ModalProductPage';
import ModalProductPageView from './ReguPage/ModalProductPageView';
import { UserContext } from '@/context/UserContext';
import axios from 'axios';
import Merch from '@/image/shirt.png'

export default function ProductPage(props) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  
  const ProdContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (location.state?.scrollToProdContainer && ProdContainerRef.current) {
      ProdContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/cart/add', {
        userId: user._id,
        name: props.name,
        size: selectedSize,
        price: props.price,
        image : {Merch} //Lezmek thot url kemel apparm , tnajamch thot hakeka juste {Merch} khater hathika synonyme l src/image/blahblahblah mahouch el url kemel
      });
      if (response.status === 201) {
        navigate('/cart');
      } else {
        alert('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error occurred while adding item to cart:', error);
      alert('An error occurred while adding the item to the cart');
    }
  };
  
  useEffect(() => {
    props.onBackdropToggle(isShown || isAppearing);
  }, [isShown, isAppearing]);

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
            ) : (user ? (
              <button 
                className={classes.addToCart} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            ) : (
              <button 
                className={classes.LoginFirst}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate('/Login', { state: { from: location } })}
              >
                LOGIN FIRST
              </button>
            ))}
          </div>
          <div className={classes.lineBetween}></div>
        </div>
      </div>
    </div>
  );
}
