import React from 'react';
import classes from '@/css/itemSoldOut.module.css'; 
import CadreImage from '@/image/cadre-with-lock.png';
import Shirt from '@/image/shirt.png'
export default function ImageComponentSoldout() {
    return (
      <div className={classes.container}>
        <img src={CadreImage} className={classes.cadre} alt="Cadre" />
        <div className={classes.content}>
          <p>Name of product</p>
          <p className={classes.price}>SOLD OUT</p>
        </div>
        <img src={Shirt} className={classes.shirt} alt="shirt" />
      </div>
    );
  }
  