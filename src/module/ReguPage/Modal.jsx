import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '@/css/ModDrop.module.css';
import star from '@/image/star.png';

export default function Modal({ onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    const startStarAnimation = () => {
      const stars = document.querySelectorAll(`.${classes.star}`);
      setTimeout(() => {
        stars.forEach(star => {
          star.classList.add(classes.animate);
        });
      }, 500);
    };
    startStarAnimation();
  }, []);

  const handleClick = () => {
    onClose();
    setTimeout(() => {
      navigate('/Main-Page'); 
    }, 0.1);
  };

  return (
    <div className={classes.modal}>
      <p>Step inside our world and embrace the uncertainty with us</p>
      <img src={star} alt="star" className={`${classes.star} ${classes.star1}`} />
      <img src={star} alt="star" className={`${classes.star} ${classes.star2}`} />
      <img src={star} alt="star" className={`${classes.star} ${classes.star3}`} />
      <img src={star} alt="star" className={`${classes.star} ${classes.star4}`} />
      <img src={star} alt="star" className={`${classes.star} ${classes.star5}`} />
      <button className={classes.btn} onClick={handleClick}>I'm Ready</button>
    </div>
  );
}
