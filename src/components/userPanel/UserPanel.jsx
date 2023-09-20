import React, { useState } from "react";
import styles from "./user.module.css";
import { useUserContext } from "../../UserContext";
import LogoutBtn from "../buttons/logout";
import { FaUser } from 'react-icons/fa';


function UserPanel() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { currentUser } = useUserContext();


  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className={styles.userMenu}>
      <div className={styles.userAvatar} onClick={toggleUserMenu}>
      <FaUser className={styles.userIcon} />
      </div>
      {currentUser && (
          <span className={styles.userName}>
            {currentUser.username} 
          </span>
        )}
      {isUserMenuOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.userName} >
            <li>Share your car</li>
            <li>Rent car</li>
            <li>My cars</li>
          </ul>
          <LogoutBtn />
        </div>
      )}
    </div>
  );
}

export default UserPanel;





