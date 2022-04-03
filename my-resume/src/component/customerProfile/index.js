import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import style from "./styles.module.css"

const CustomerProfile = () => {
    
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  const { logout, isLoading, user} = useAuth0();
 return (
    <div className={style.ProfileDropDownMenu+" dropdown"}>
      
        <button className={style.dropDownButton} onClick={toggleOpen}>
          <img  className={style.userProfilePhoto} src={user.picture}></img>
        </button>
        <div
          className={`dropdown-menu ${dropdown ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton"
          >
            <p className="dropdown-item">{user.name}</p>
            <p className="dropdown-item" href="#">
              {user.email}
            </p>
            <a
            className={style.logoutButton} onClick={logout} href="#">LOGOUT</a>
         </div>
     </div>
  );
}
export default CustomerProfile;