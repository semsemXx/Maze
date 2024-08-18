import React from 'react';
import classes from '@/css/item.module.css'; 
import CadreImage from '@/image/cadre.png';
import Shirt from '@/image/shirt.png'
export default function ImageComponent() {
  return (
    <div className={classes.imageContainer}>
      <img src={CadreImage} className={classes.cadre} alt="Cadre" />
      <p className={classes.price}>Name of the product</p>
      <p className={classes.price}>60DT</p>
      <img src={Shirt} className={classes.shirt} alt="shirt" />
    </div>
  );
}