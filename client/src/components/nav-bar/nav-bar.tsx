import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav-bar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}> 
      <Link className={styles.item} to='/login'>Login</Link>
      <Link className={styles.item} to='/reg'>Reg</Link>
      <Link className={styles.item} to='/user'>User</Link>
    </div>
  )
}

export default NavBar;