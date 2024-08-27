import React from 'react';
import styles from '@/css/LoadingCircle.module.css'; 

export default function LoadingCircle() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileMainLoader}>
        <div className={styles.loader}>
          <svg className={styles.circularLoader} viewBox="25 25 50 50">
            <circle className={styles.loaderPath} cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
