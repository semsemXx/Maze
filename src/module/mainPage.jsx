import React from 'react';
import classes from "@/css/mainPage.module.css";
import Lightshow from '@/components/Page/Lightshow';
import FatStarGif from '@/gif/FatStarGif.gif';
import ThinStarGif from '@/gif/ThinStarGif.gif';

 
export default function MainPage() {
  return (
    <div className={classes.base}>
      <Lightshow/>
      <img src={FatStarGif} className={classes.FatStarGif1}/>
      <img src={FatStarGif} className={classes.FatStarGif2}/>
      <img src={FatStarGif} className={classes.FatStarGif3}/>
      <img src={FatStarGif} className={classes.FatStarGif4}/>
      <img src={ThinStarGif} className={classes.ThinStarGif1}/>
      <img src={ThinStarGif} className={classes.ThinStarGif2}/>
      <img src={ThinStarGif} className={classes.ThinStarGif3}/>
      <p>The brand that has no idea about the world we live in (?)</p>
    </div>
  );
}
