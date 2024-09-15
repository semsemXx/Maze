import React, { useState, useEffect } from 'react';
import IconImage from "@/image/logo-part-1.png";
import classes from '@/css/mainPage.module.css';
import EyeHole from '@/image/logo-part-2.png';

export default function IconRolling({ scrollToNewColl }) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = document.querySelector(`.${classes.eye}`);
      const eyeHole = document.querySelector(`.${classes.eyeHole}`);

      if (!eye || !eyeHole) {
        return;
      }

      const eyeRect = eye.getBoundingClientRect();
      const mouseX = e.clientX - eyeRect.left;
      const mouseY = e.clientY - eyeRect.top;

      const normalizedX = (mouseX / eyeRect.width) * 2 - 1;
      const normalizedY = (mouseY / eyeRect.height) * 2 - 1;

      const minX = -0.9;
      const maxX = 1.5;
      const minY = -0.4;
      const maxY = 0.2;

      let offsetX = Math.max(minX, Math.min(maxX, normalizedX));
      let offsetY = Math.max(minY, Math.min(maxY, normalizedY));

      eyeHole.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [classes.eye, classes.eyeHole]);

  return (
    <div className={`${classes.IconUi} ${rotate ? classes.classes.rotate : ''}`}>
      <button onClick={scrollToNewColl} className={classes.PreUiIcon}>
        <img src={IconImage} className={classes.eye} alt="IconImage" />
        <img src={EyeHole} className={classes.eyeHole} alt="EyeHole" />
      </button>
    </div>
  );
}