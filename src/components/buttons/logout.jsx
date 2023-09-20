import React from "react";
import styles from "./styles.module.css"; // Подключите стили для футера
import axios from "axios";
import { useUserContext } from "../../UserContext";

function LogoutBtn() {
  const { logout } = useUserContext();

    const handleLogout = async () => {
      try {
        const response = await axios.post("http://localhost:3500/logout");
  
        if (response.status === 204 ) {
          logout(response.data.username);
          console.log("Logout successful!");
        } else {
          console.error("Logout failed: No refreshToken");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

  return (
    <button onClick={handleLogout} className={styles.btn_logout} >
      Log out
    </button>
  );
}



export default LogoutBtn;