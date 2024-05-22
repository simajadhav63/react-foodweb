import React, { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo} alt="" />
      <nav className={`${styles.navCenter} ${showMenu ? styles.showMenu : ''}`}>
        <ul className={styles.navLinks}>
          {/* <li><a href="#" className={activeItem === 'Home' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Home')}>Home</a></li> */}
          {/* <li><a href="#" className={activeItem === 'Quote' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Quote')}>Quote</a></li> */}
          {/* <li><Link to="/" className={activeItem === 'Restaurant' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Restaurant')}>Home</Link></li>
          <li><Link to="/quote" className={activeItem === 'Restaurant' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Restaurant')}>Quote</Link></li>
          <li><a href="#" className={activeItem === 'Restaurant' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Restaurant')}>Restaurant</a></li>
          <li><a href="#" className={activeItem === 'Foods' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Foods')}>Foods</a></li>
          <li><a href="#" className={activeItem === 'Contact' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Contact')}>Contact</a></li> */}
        <li><Link to="/" className={activeItem === 'Home' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Home')}>Home</Link></li>
      <li><Link to="/quote" className={activeItem === 'Quote' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Quote')}>Quote</Link></li>
      <li><Link to="/restaurant" className={activeItem === 'Restaurant' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Restaurant')}>Restaurant</Link></li>
      <li><Link to="/foods" className={activeItem === 'Foods' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Foods')}>Foods</Link></li>
      <li><Link to="/contact" className={activeItem === 'Contact' ? `${styles.navLink} ${styles.active}` : styles.navLink} onClick={() => handleItemClick('Contact')}>Contact</Link></li>
        </ul>
      </nav>
      <button className={styles.getStarted}>Get Started</button>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
      </div>
    </div>
  );
}

export default Navbar;
