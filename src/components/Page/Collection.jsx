import React from 'react';
import styles from '@/css/previousCollections.module.css';
import Cloud from '@/image/cloud.png';
import UpStar from '@/image/little-stars-up.png';
import ImageComponent from '@/components/Page/item.jsx';
import ImageComponentSoldout from "@/components/Page/itemSoldOut";

export default function Collection(props) {
  return (
    <div className={styles.Collection}>
      <div className={styles.season}>
        <h1>SEASON {props.season}</h1>
        <img src={Cloud} alt="Cloud" />
      </div>
      <img src={UpStar} className={styles.UpStar} alt="Up Star" />
      <div className={styles.Vetrine}>
        {props.name1 && <ImageComponentSoldout name={props.name1} price={props.price1} path={props.path1} />}
        {props.name2 && <ImageComponent name={props.name2} price={props.price2} path={props.path2} />}
        {props.name3 && <ImageComponent name={props.name3} price={props.price3} path={props.path3} />}
        {props.name4 && <ImageComponent name={props.name4} price={props.price4} path={props.path4} />}
        {props.name5 && <ImageComponent name={props.name5} price={props.price5} path={props.path5} />}
        {props.name6 && <ImageComponent name={props.name6} price={props.price6} path={props.path6} />}
        {props.name7 && <ImageComponent name={props.name7} price={props.price7} path={props.path7} />}
        {props.name8 && <ImageComponent name={props.name8} price={props.price8} path={props.path8} />}
      </div>
    </div>
  );
}
