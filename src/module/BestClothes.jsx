import React from 'react';
import Mateha from '@/image/shirt.png';
import style from '@/css/bestClothes.module.css';
import Cloud from '@/image/cloud.png';

export default function BestClothes() {
  return (
    <div className={style.bestOf}>
      <div className={style.bestClo}>
      <h1>BEST COLLECTIONS</h1>
      <img src={Cloud} alt="Cloud" />
      </div>
    <div className={style.banner}>
      <div className={style.slider}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className={style.item} style={{ '--position': index + 1, '--quantity': 10 }}>
            <img src={Mateha} alt={`Mateha ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
