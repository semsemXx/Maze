import React, { useState, useRef } from 'react';
import Mateha from '@/image/shirt.png';
import style from '@/css/bestClothes.module.css';
import Cloud from '@/image/cloud.png';
import Circle from '@/image/no.png';
import { useNavigate } from 'react-router-dom';

const items = [
  { imgSrc: Mateha, altText: 'Mateha 1', path: '/path1' },
  { imgSrc: Mateha, altText: 'Mateha 2', path: '/path2' },
  { imgSrc: Mateha, altText: 'Mateha 3', path: '/path3' },
  { imgSrc: Mateha, altText: 'Mateha 3', path: '/path4' },
  { imgSrc: Mateha, altText: 'Mateha 3', path: '/path5' },
  { imgSrc: Mateha, altText: 'Mateha 3', path: '/path6' },
  { imgSrc: Mateha, altText: 'Mateha 3', path: '/path6' },

];

export default function BestClothes() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
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
          {items.map((item, index) => (
            <div
              key={index}
              className={style.item}
              style={{
                '--position': index + 1,
                '--quantity': items.length,
                '--rotation': hoveredItem === index ? '0deg' : '360deg',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.imgSrc}
                alt={item.altText}
                onClick={() => navigate(item.path)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className={style.circleRack}>
       <img src={Circle} alt="Circle rack" />
       </div> */}
    </div>
  );
}
