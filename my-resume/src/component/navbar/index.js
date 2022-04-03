import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import style from "./styles.module.css"
import ProfileImage from './ProfileImage';
import AccountLink from './AccountLink';
import CustomerProfile from '../customerProfile';
import { useAuth0, User } from '@auth0/auth0-react';

const postData = (url, data) => 
{
  (async () => {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
} 
const NavBar=()=>{
  const {user} = useAuth0();

  useEffect(() =>{
    postData('https://jsonplaceholder.typicode.com/posts',{CustomerName: user.name, CustomerMail: user.email}) 
  },[]);
  
  return (
    <nav className={style.resumeNav}>
      <div className={style.navAll}>
        <CustomerProfile/>
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
