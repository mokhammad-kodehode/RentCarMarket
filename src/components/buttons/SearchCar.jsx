import React from "react";
import styles from "./styles.module.css"; // Подключите стили для футера

function SearchCar() {
  return (
    <button className={styles.btn_search} >
      Search a car
    </button>
  );
}


export default SearchCar;