import React from "react";
import styles from "./Footer.module.css"; // Подключите стили для футера

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} All rights reserved</p>
        <p>Rent Car</p>
      </div>
    </footer>
  );
}

export default Footer;