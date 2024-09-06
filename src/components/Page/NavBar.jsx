import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '@/css/navBar.module.css';
import maze from '@/gif/gifWhiteLogo.gif';
import SheetSide from '@/components/Page/Sheet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import lineNav from "@/image/lineNav.png";
import { UserContext } from '@/context/UserContext'; 

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user, logout } = useContext(UserContext); 
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); 
    } else {
      setVisible(true); 
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    logout(); 
    navigate('/Login'); 
  };

  return (
    <div>
      <nav className={`${classes.navBar} ${visible ? classes.visible : classes.hidden}`}>
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
                <button onClick={handleLogout} className={classes.navlogout}>
                  LOGOUT
                </button>
              ) : (
                <Link to='/Login' className={classes.navLink}>ACCOUNTS</Link>
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
    </div>
  );
}
