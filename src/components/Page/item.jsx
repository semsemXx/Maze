  import React from 'react';
  import classes from '@/css/item.module.css'; 
  import CadreImage from '@/image/cadre.png';
  import Shirt from '@/image/shirt.png'
  import { useNavigate } from 'react-router-dom';


  export default function ImageComponent(props) {
    const navigate = useNavigate();

    const handleCadreClick = ()=> {
      navigate(props.path )
    };
    return (
      <div className={classes.container}>
        <img src={CadreImage} className={classes.cadre} alt="Cadre"  onClick={handleCadreClick}/>
        <div className={classes.content}>
        <p>{props.name}</p>
        <p className={classes.price}>{props.price}DT</p>
        </div>
        <img src={Shirt} className={classes.shirt} alt="shirt" />
      </div>
    );
  }