import React, { useState } from 'react';
import classes from '../css/opening.module.css';
import Mateha from '../video/matehaVid.mp4';
import matehaUnderwear from '../image/matehaUnderwear.jpeg';
import logoWhite from '../logo/mazeWhite.png';
import no from '../image/no.png';
import yes from '../image/yes.png';
import Backdrop from './ReguPage/Backdrop';
import Modal from './ReguPage/Modal';

export default function Opening() {
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  return (
    <div className={classes.Div}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Mateha} type="video/mp4" />
      </video>
      <div className={classes.container}>
        <img src={matehaUnderwear} alt="Mateha Underwear" className={classes.image} />
        <img src={logoWhite} alt="White Logo" className={classes.logo} />
        <p>Are you lost in the world you live in?</p>
        <img src={no} alt="No" className={classes.no} />
        <img src={yes} alt="Yes" className={classes.yes} />
        <button className={classes.ye} onClick={() => setIsShown(true)}>no</button>
        <button className={classes.noo}>No</button>
        {isShown && <Backdrop />}
        {isShown && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
}
