
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import UserPanel from "../userPanel/UserPanel";
import { useUserContext } from "../../UserContext";

function Navbar() {
    const { currentUser } = useUserContext();

  return (
      <nav  className={styles.navbar}>
          <div className={styles.navbar_logo}>RentCar</div>
          <ul className={styles.navbar_items}  >
              <li className={styles.navbar_item}>
                  <a className={styles.nav_item} href="#"  >Home</a> 
              </li>
              <li className={styles.nav_item}>
                     <Link to="/rent" className={styles.nav_item}>Rent car</Link>
              </li>
              <li className={styles.nav_item}>
                     <Link to="/share" className={styles.nav_item}>Share car</Link>
              </li>
              <li className={styles.nav_item} >
                  <a className={styles.nav_item} href="#" >Contats</a> 
              </li>
          </ul>
          {currentUser ? <UserPanel/> : (     
                 <Link to="/login">
                    <button className={styles.btn}>Log in</button>
                </Link>)}
      </nav>
  );
}


export default Navbar;
