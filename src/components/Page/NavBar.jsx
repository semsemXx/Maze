import React from 'react';
import { Link } from 'react-router-dom';
import classes from '@/css/navBar.module.css';
import maze from '@/gif/gifWhiteLogo.gif'
import SheetSide from '@/components/Page/Sheet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lineNav from "@/image/lineNav.png";


export default function NavBar() {
  return (
    <div>
      <nav className={classes.navBar}>
        <ul className={classes.navList}>
          <li>
          <SheetSide/>
          </li>
          <li>
          <button className={classes.navButton}> 
          <Link to='/Main-Page'><img src={maze} alt="Maze" className={classes.mazeLogo} /> </Link>
           </button>
          </li>
          <li>
            <Link to='/Login' className={classes.navLink}>LOGIN</Link>
          </li>
          <li>
          <button className={classes.cart}><i class="fa-solid fa-cart-shopping"></i></button>
          </li>
        </ul>
          <img src={lineNav} className={classes.lineNav}/>
      </nav>
    </div>
  );
}
