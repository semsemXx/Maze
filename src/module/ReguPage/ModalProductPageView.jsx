import React, { useEffect, useRef } from 'react';
import classes from '@/css/ModalView.module.css';
import star from '@/image/star.png';

export default function ModalProductPageView({ setIsAppearing, content }) {
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
      <img
        ref={(el) => (starRefs.current[0] = el)}
        src={star}
        alt="star"
        className={`${classes.star} ${classes.star1}`}
      />
      <img
        ref={(el) => (starRefs.current[1] = el)}
        src={star}
        alt="star"
        className={`${classes.star} ${classes.star2}`}
      />
      <img
        ref={(el) => (starRefs.current[2] = el)}
        src={star}
        alt="star"
        className={`${classes.star} ${classes.star3}`}
      />
      <img
        ref={(el) => (starRefs.current[3] = el)}
        src={star}
        alt="star"
        className={`${classes.star} ${classes.star4}`}
      />
      <img
        ref={(el) => (starRefs.current[4] = el)}
        src={star}
        alt="star"
        className={`${classes.star} ${classes.star5}`}
      />
      <button className={classes.x} onClick={() => setIsAppearing(false)}>
        <i className="fa-solid fa-x"></i>
      </button>
      <p className={classes.modContent}>{content}</p>
    </div>
  );
}
