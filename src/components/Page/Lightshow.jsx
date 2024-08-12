import React, { useState, useEffect } from 'react';
import whiteLight from "@/image/matehaLightshowWhite.png";
import blackLight from "@/image/matehaLightshowBlack.png";
import classes from "@/css/mainPage.module.css";

export default function Lightshow() {
  const [isWhiteVisible, setIsWhiteVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsWhiteVisible(prev => !prev);
    }, 500); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className={classes.lightContainer}>
      <img 
        src={whiteLight} 
        className={`${classes.whiteLight} ${isWhiteVisible ? classes.show : ''}`} 
        alt="White Light"
      />
      <img 
        src={blackLight} 
        className={`${classes.blackLight} ${!isWhiteVisible ? classes.show : ''}`} 
        alt="Black Light"
      />
    </div>
  );
}
