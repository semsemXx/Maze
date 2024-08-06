import React from 'react';
import classes from '@/css/mainPage.module.css';
import NavBar from '@/components/Page/NavBar';

export default function MainPage() {
  return (
    <div className={classes.mainPage}>
      <NavBar />
    </div>
  );
}
