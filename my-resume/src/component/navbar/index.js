import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import style from "./styles.module.css"
import ProfileImage from './ProfileImage';
import AccountLink from './AccountLink';

const NavBar=()=>{
  return (
    <nav className={style.resumeNav}>
      <div className={style.navAll}>
        <ProfileImage/>
          <ul className={style.navList}>
            <li className={style.navElement}><NavLink to="/ReactResume/about">About</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/education">Education</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/career">Career</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/projects">Projects</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/goals">Goals</NavLink></li>
            <li className={style.navElement}><NavLink to="/ReactResume/skills">Skills</NavLink></li>
            <li className={style.navAccount}><AccountLink/></li>

          </ul>  

        </div>
    </nav>
  )
}
export default NavBar;
