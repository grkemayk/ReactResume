import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./styles.module.css"
import ProfileImage from './ProfileImage';

const NavBar=()=>{
  return (
    <nav className={styles.resumeNav}>
     <ProfileImage></ProfileImage>
      <ul>
        <li className={styles.navElement}><NavLink to="/about">About</NavLink></li>
        <li className={styles.navElement}><NavLink to="/education">Education</NavLink></li>
        <li className={styles.navElement}><NavLink to="/career">Career</NavLink></li>
        <li className={styles.navElement}><NavLink to="/projects">Projects</NavLink></li>
        <li className={styles.navElement}><NavLink to="/goals">Goals</NavLink></li>
      </ul>  
    </nav>
  )
}
export default NavBar;
