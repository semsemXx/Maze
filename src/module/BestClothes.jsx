import React, { useState, useRef } from 'react';
import Mateha from '@/image/shirt.png';
import style from '@/css/bestClothes.module.css';
import Cloud from '@/image/cloud.png';
import lineNav from '@/image/lineNav.png';

export default function BestClothes() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const sliderRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    sliderRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    sliderRef.current.style.animationPlayState = 'running';
  };

  return (
    <div className={style.bestOf}>
      <div className={style.bestClo}>
        <h1>BEST COLLECTIONS</h1>
        <img src={Cloud} alt="Cloud" />
      </div>
      <div className={style.banner}>
        <div className={style.slider} ref={sliderRef}>
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={style.item}
              style={{
                '--position': index + 1,
                '--quantity': 10,
                '--rotation': hoveredItem === index ? '0deg' : '360deg',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={Mateha} alt={`Mateha ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={style.circleRack}>
          <img src={lineNav} alt="Circle rack" />
        </div>
      </div>
    </div>
  );
}