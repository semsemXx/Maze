import React, { useState } from 'react';
import classes from '@/css/productPage.module.css';
import CadreProd from '@/image/cadre-.png';
import Merch from '@/image/shirt.png';

export default function ProductPage(props) {
  
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={classes.ProdContainer}>
      <div className={classes.PicturesSide}>
        <div className={classes.image1}>
          <img src={CadreProd} className={classes.cadre} />
          <img src={Merch} className={classes.merch} />
        </div>
        <div className={classes.image2}>
          <img src={CadreProd} className={classes.cadre} />
          <img src={Merch} className={classes.merch} />
        </div>
        <div className={classes.image3}>
          <img src={CadreProd} className={classes.cadre} />
          <img src={Merch} className={classes.merch} />
        </div>
      </div>
      <div className={classes.ContentSide}>
        <div className={classes.InformationContainer}>
          <div className={classes.NamePrice}>
            <h1>{props.name}</h1>
            <p>{props.price}DT</p>
          </div>
          <div className={classes.meaning}>
            <p>{props.name} Meaning</p>
            <button>View</button>
          </div>
          <div className={classes.Color}>
            <p>COLOR :</p>
            <button className={classes.black1}></button>
            <button className={classes.black2}></button>
            <button className={classes.interogation}>(?)</button>
          </div>
          <div className={classes.size}>
            <p>SIZE :</p>
            <button
              className={`${classes.S} ${selectedSize === 'S' ? classes.selected : ''}`}
              onClick={() => handleSizeClick('S')}
            >
              S
            </button>
            <button
              className={`${classes.M} ${selectedSize === 'M' ? classes.selected : ''}`}
              onClick={() => handleSizeClick('M')}
            >
              M
            </button>
            <button
              className={`${classes.L} ${selectedSize === 'L' ? classes.selected : ''}`}
              onClick={() => handleSizeClick('L')}
            >
              L
            </button>
            <button
              className={`${classes.XL} ${selectedSize === 'XL' ? classes.selected : ''}`}
              onClick={() => handleSizeClick('XL')}
            >
              XL
            </button>
            <button
              className={`${classes.XXL} ${selectedSize === 'XXL' ? classes.selected : ''}`}
              onClick={() => handleSizeClick('XXL')}
            >
              XXL
            </button>
          </div>
          <div className={classes.Select}>
            {!selectedSize ? (
              <p>SELECT A SIZE</p>
            ) : (
              <button className={classes.addToCart}>ADD TO CART</button>
            )}
          </div>
          <div className={classes.lineBetween}></div>
        </div>
      </div>
    </div>
  );
}
