import React, { useEffect, useRef } from 'react';
import classes from '@/css/Modal.module.css';
import star from '@/image/star.png';

export default function ModalProductPage({ setIsShown }) {
  const starRefs = useRef([]);

  useEffect(() => {
    starRefs.current.forEach((star, index) => {
      setTimeout(() => {
        star.classList.add(classes.animate);
      }, index * 500);
    });
  }, []);

  return (
    <div className={classes.Modal}>
      <img ref={(el) => (starRefs.current[0] = el)} src={star} alt="star" className={`${classes.star} ${classes.star1}`} />
      <img ref={(el) => (starRefs.current[1] = el)} src={star} alt="star" className={`${classes.star} ${classes.star2}`} />
      <img ref={(el) => (starRefs.current[2] = el)} src={star} alt="star" className={`${classes.star} ${classes.star3}`} />
      <img ref={(el) => (starRefs.current[3] = el)} src={star} alt="star" className={`${classes.star} ${classes.star4}`} />
      <img ref={(el) => (starRefs.current[4] = el)} src={star} alt="star" className={`${classes.star} ${classes.star5}`} />
      <button className={classes.x} onClick={() => setIsShown(false)}><i class="fa-solid fa-x"></i></button>
      <p>We will stop wearing black  when they come up with a darker color</p>
    </div>
  );
}
