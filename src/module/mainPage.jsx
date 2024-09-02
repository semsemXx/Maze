import React, { useState, useEffect, useRef } from 'react';
import classes from "@/css/mainPage.module.css";
import Lightshow from '@/components/Page/Lightshow';
import FatStarGif from '@/gif/FatStarGif.gif';
import ThinStarGif from '@/gif/ThinStarGif.gif';
import ImageComponent from '@/components/Page/item.jsx';
import Cloud from '@/image/cloud.png';
import UpStar from '@/image/little-stars-up.png';
import DownStar from '@/image/little-stars-down.png';
import CircleDeco from '@/image/deco-main-page.png';
import LoadingCircle from '@/components/svg/LoadingCircle.';
import { motion, useInView, useAnimation } from "framer-motion";
import IconRolling from '@/components/ui/IconRolling';
import Rebone from '@/module/Rebone';
import MoreStar1 from '@/image/little-star-1.png';
import MoreStar2 from '@/image/little-star-2.png';
import maze from '@/gif/gifWhiteLogo.gif';
import { Link } from 'react-router-dom';
import ImageComponentSoldout from "@/components/Page/itemSoldOut";



export default function MainPage() {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(-window.scrollY * 0.8);
    };
  
    const throttledHandleScroll = throttle(handleScroll, 16); 
    
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    document.body.style.overflow = loading ? 'hidden' : 'auto';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  const starRef = useRef(null);
  const isStarInView = useInView(starRef, { triggerOnce: true });
  const starControl = useAnimation();

  useEffect(() => {
    if (!loading && isStarInView) {
      starControl.start("visible");
    }
  }, [loading, isStarInView]);

  const newCollRef = useRef(null);
  const isNewCollInView = useInView(newCollRef, { triggerOnce: true });
  const newCollControl = useAnimation();

  useEffect(() => {
    if (!loading && isNewCollInView) {
      newCollControl.start("visible");
    }
  }, [loading, isNewCollInView]);

  const DecoCircleRef = useRef(null);
  const isNewDecoCircleInView = useInView(DecoCircleRef, { triggerOnce: true });
  const newDecoCircleControl = useAnimation();

  useEffect(() => {
    if (!loading && isNewDecoCircleInView) {
      newDecoCircleControl.start("visible");
    }
  }, [loading, isNewDecoCircleInView]);

  const FooterRef = useRef(null);
  const isNewFooterInView = useInView(FooterRef, { triggerOnce: true });
  const newFooterControl = useAnimation();

  useEffect(() => {
    if (!loading && isNewFooterInView) {
      newFooterControl.start("visible");
    }
  }, [loading, isNewFooterInView]);


  const scrollToNewColl = () => {
    const currentScrollY = window.scrollY;
    const newCollOffsetTop = newCollRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const atBottom = currentScrollY + windowHeight >= documentHeight;
  
    if (Math.abs(currentScrollY - newCollOffsetTop) < 10 || atBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: newCollOffsetTop,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className={classes.container}>
      <div className={`${classes.loadingScreen} ${!loading ? classes.hidden : ''}`}>
        <div className={classes.Loading}>Loading...</div>
        <img src={maze} alt="Maze" className={classes.mazeLoadingLogo} />
        <LoadingCircle />
      </div>
      <div className={`${classes.base} ${loading ? classes.hidden : classes.loaded}`}>
      <IconRolling scrollToNewColl={scrollToNewColl} />
        <Lightshow />
        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={classes.FatStarGif1Div}>
          <img src={FatStarGif} className={classes.FatStarGif1} alt="Fat Star" />
        </motion.div>

        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={FatStarGif} className={classes.FatStarGif2} alt="Fat Star" />
        </motion.div>

        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={FatStarGif} className={classes.FatStarGif3} alt="Fat Star" />
        </motion.div>

        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={FatStarGif} className={classes.FatStarGif4} alt="Fat Star" />
        </motion.div>
        
        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={ThinStarGif} className={classes.ThinStarGif1} alt="Fat Star" />
        </motion.div>

        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={ThinStarGif} className={classes.ThinStarGif2} alt="Fat Star" />
        </motion.div>
        
        <motion.div ref={starRef}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={starControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          >
          <img src={ThinStarGif} className={classes.ThinStarGif3} alt="Fat Star" />
        </motion.div>

        <p>The brand that has no idea about the world we live in (?)</p>
         
        <Rebone scrollPosition={scrollPosition}/>

        <div className={classes.ToLower}>
          <img src={MoreStar1} className={classes.MoreStar1}/>
          <img src={MoreStar2} className={classes.MoreStar2}/>
          <img src={MoreStar2} className={classes.MoreStar3}/>
          <motion.div ref={newCollRef}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={newCollControl}
            transition={{ duration: 0.5, delay: 0.10 }}
            className={classes.NewColl}>
            <h1>NEW COLLECTION</h1>
            <img src={Cloud} alt="Cloud" />
          </motion.div>

          <img src={UpStar} className={classes.UpStar} alt="Up Star" />
          <motion.div ref={DecoCircleRef}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={newDecoCircleControl}
            transition={{ duration: 0.5, delay: 0.10 }}
            ><img src={CircleDeco} className={classes.CircleDeco} alt="Circle Decoration" /></motion.div>
          <div className={classes.ProdContainer}>
            <ImageComponentSoldout name="Mateha1" path="/ProductPage1" loading={loading} />
            <ImageComponent name="Mateha2" price={40} path="/ProductPage2" loading={loading} />
            <ImageComponent name="Mateha3" price={60} path="/ProductPage3" loading={loading} />
            <ImageComponent name="Mateha4" price={50} path="/ProductPage4" loading={loading} />
          </div>
          <img src={DownStar} className={classes.DownStar} alt="Down Star" />
        </div>

        <motion.div ref={FooterRef}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={newFooterControl}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={classes.FooterDiv}
            ><footer>
          <ul>
            <li > <Link to='/Terms' className={classes.Term}>Terms</Link></li>
            <li > <Link to='/Contacts' className={classes.Contact}>Contacts</Link></li>
            <li > <Link to='/Our-philosophy' className={classes.philosophy}>Our philosophy</Link></li>
            <li > <Link to='/Login' className={classes.Account}>Accounts</Link></li>
          </ul>
          <div className={classes.CopyRight}>All rights are reserved Mateha Streetwear &copy;</div>
        </footer>
        </motion.div>
      </div>
    </div>
  );
}
