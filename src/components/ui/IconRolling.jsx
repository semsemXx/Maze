import React, { useState, useEffect } from 'react';
import IconImage from "@/logo/mazeWhite.png";
import classes from '@/css/mainPage.module.css';

export default function IconRolling({ scrollToNewColl }) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = document.body.scrollHeight / 4;

      if (scrollPosition > halfPageHeight) {
        setRotate(true);
      } else {
        setRotate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.IconUi} ${rotate ? classes.rotate : ''}`}>
      <button onClick={scrollToNewColl} className={classes.PreUiIcon}>
        <img src={IconImage} alt="IconImage" />
      </button>
    </div>
  );
}
