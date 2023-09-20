import React from "react";
import PropTypes from "prop-types"; // Импортируйте PropTypes
import styles from "./styles.module.css";

function SignupBtn({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Sign Up
    </button>
  );
}

// Добавьте PropTypes для вашего компонента
SignupBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // Убедитесь, что onClick - это функция и она обязательна
};

export default SignupBtn;