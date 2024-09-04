import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '@/css/navBar.module.css';
import maze from '@/gif/gifWhiteLogo.gif';
import SheetSide from '@/components/Page/Sheet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lineNav from "@/image/lineNav.png";
import { UserContext } from '@/context/UserContext';
import Backdrop from '@/module/ReguPage/Backdrop';

export default function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { user, logout } = useContext(UserContext);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); 
    } else {
      setVisible(true); 
    }
    setLastScrollY(window.scrollY);
  };

  const handleLogout = () => {
    setShowBackdrop(true);
    setShowNotification(true);
    setTimeout(() => {
      logout();
      setShowBackdrop(false);
      setShowNotification(false);
    }, 1500); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (showBackdrop) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [showBackdrop]);

  return (
    <div>
      <nav className={classes.navBar}>
        <ul className={classes.navList}>
          <li>
            <SheetSide />
          </li>
          <li>
            <button className={classes.navButton}>
              <Link to='/Main-Page'>
                <img src={maze} alt="Maze" className={classes.mazeLogo} />
              </Link>
            </button>
          </li>
          <li>
            <div className={classes.NavLinkDiv}>
              {user ? (
                <button onClick={handleLogout} className={classes.logoutButton}>
                  LOGOUT
                </button>
              ) : (
                <Link to='/Login' className={classes.navLink}>
                  ACCOUNTS
                </Link>
              )}
            </div>
          </li>
          <li>
            <Link to='/Cart' className={classes.cart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
        <img src={lineNav} className={classes.lineNav} />
      </nav>

      {showBackdrop && <Backdrop />}
      {showNotification && (
        <div className={classes.notificationn}>
          <p>You have been logged out.</p>
        </div>
      )}
    </div>
  );
}
