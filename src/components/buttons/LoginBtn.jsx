
import React from "react";
import styles from "./styles.module.css"; // Подключите стили для футера
import PropTypes from "prop-types";

function LoginBtn({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Log In
    </button>
  );
}

LoginBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // Убедитесь, что onClick - это функция и она обязательна
};

export default LoginBtn;