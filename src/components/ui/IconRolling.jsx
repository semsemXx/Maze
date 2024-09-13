import React, { useState, useEffect } from 'react';
import IconImage from "@/image/logo-part-1.png";
import classes from '@/css/mainPage.module.css';
import EyeHole from '@/image/logo-part-2.png';

export default function IconRolling({ scrollToNewColl }) {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const eye = document.querySelector(`.${classes.eye}`);
      const eyeHole = document.querySelector(`.${classes.eyeHole}`);

      if (eye && eyeHole) {
        const rekt = eye.getBoundingClientRect();
        const eyeX = rekt.left + rekt.width / 2;
        const eyeY = rekt.top + rekt.height / 2;

        let angleDeg = angle(mouseX, mouseY, eyeX, eyeY);

        const minRotation = 30;  
        const maxRotation = 115;

        angleDeg = Math.max(minRotation, Math.min(maxRotation, angleDeg));

        eyeHole.style.transform = `rotate(${90 + angleDeg}deg)`;
      }
    };

    const angle = (cx, cy, ex, ey) => {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = rad * 180 / Math.PI;
      return deg;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [classes.eye, classes.eyeHole]);

  return (
    <div className={`${classes.IconUi} ${rotate ? classes.rotate : ''}`}>
      <button onClick={scrollToNewColl} className={classes.PreUiIcon}>
        <img src={IconImage} className={classes.eye} alt="IconImage" />
        <img src={EyeHole} className={classes.eyeHole} alt="EyeHole" />
      </button>
    </div>
  );
}
