import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import style from "./styles.module.css"
import ProfileImage from './ProfileImage';


const NavBar=()=>{
  return (
    <nav className={style.resumeNav}>
      <div className={style.navAll}>
        <ProfileImage></ProfileImage>
          <ul>
            <li className={style.navElement}><NavLink to="/ReactResume/about">About</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/education">Education</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/career">Career</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/projects">Projects</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/goals">Goals</NavLink></li>
          </ul>  
        </div>
    </nav>
  )
}
export default NavBar;
