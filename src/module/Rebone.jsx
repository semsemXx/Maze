import React from 'react';
import styles from '@/css/rebone.module.css';

export default function Rebone({ scrollPosition }) {
  return (
    <div className={styles.reboneContainer}>
      <p className={styles.scrollingText} style={{ transform: `translate3d(${-scrollPosition}px, 0, 0)` }}>
        EXPLORE WITH CAUTION ! • ZONE OF MESS • EXPLORE WITH CAUTION ! • ZONE OF MESS • EXPLORE WITH CAUTION ! 
      </p>
    </div>
  );
}
