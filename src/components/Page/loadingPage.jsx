import React from 'react';
import classes from '@/css/loading.module.css';

export default function LoadingPage() {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}
