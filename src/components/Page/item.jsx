import React from 'react';
import classes from '@/css/item.module.css'; 
import CadreImage from '@/image/cadre.png';
import Shirt from '@/image/shirt.png'
import { useNavigate } from 'react-router-dom';
import { useEffect , useRef } from 'react';
import {motion , useInView , useAnimation} from "framer-motion";

export default function ImageComponent(props) {
  const navigate = useNavigate();
  const { loading } = props;
  const handleCadreClick = () => {
    navigate(props.path, { state: { scrollToProdContainer: true } });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  const MainControl = useAnimation();

  useEffect(() => {
    if (!loading && isInView) {
      MainControl.start("visible");
    }
  }, [loading, isInView]);
  
  return (
    <motion.div ref={ref}
    variants={{
      hidden: { opacity: 0, y: 75},
      visible: { opacity: 1, y: 0 },
    }}
    initial = "hidden"
    animate ={MainControl}
    transition={{duration : 0.5 ,delay : 0.25}}
    className={classes.container}>
      <img src={CadreImage} className={classes.cadre} alt="Cadre" onClick={handleCadreClick} />
      <div className={classes.content}>
        <p>{props.name}</p>
        <p className={classes.price}>{props.price}DT</p>
      </div>
      <img src={Shirt} className={classes.shirt} alt="shirt" />
    </motion.div>
  );
}
