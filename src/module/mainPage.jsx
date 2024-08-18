import React from 'react';
import classes from "@/css/mainPage.module.css";
import Lightshow from '@/components/Page/Lightshow';
import FatStarGif from '@/gif/FatStarGif.gif';
import ThinStarGif from '@/gif/ThinStarGif.gif';
import ImageComponent from '@/components/Page/item.jsx';
import Cloud from '@/image/cloud.png';
import UpStar from '@/image/little-stars-up.png';
import DownStar from '@/image/little-stars-down.png';
import CircleDeco from '@/image/deco-main-page.png';

 
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
      <div className={classes.NewColl}>
        <h1>NEW COLLECTION</h1>
        <img src={Cloud}/>
      </div>
      <img src={UpStar} className={classes.UpStar}/>
      <img src={CircleDeco} className={classes.CircleDeco}/>
      <div className={classes.ProdContainer}>
        <ImageComponent name="Mateha1" price={40} path="/ProductPage1"/>
        <ImageComponent name="Mateha2" price={60} path="/ProductPage2"/>
        <ImageComponent name="Mateha3" price={70} path="/ProductPage3"/>
        <ImageComponent name="Mateha4" price={50} path="/ProductPage4"/>
      </div>
      <img src={DownStar} className={classes.DownStar}/>
      <footer>
        <ul>
          <li>Terms</li>
          <li>Contacts</li>
          <li>Our philosophy</li>
          <li>Login</li>
          <div className={classes.CopyRight}>All rights are reserved Mateha Streetwear &copy;</div>
        </ul>
      </footer>
    </div>
  );
}
