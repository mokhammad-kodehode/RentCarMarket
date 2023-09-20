import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../buttons/LoginBtn";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import axios from "axios";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login} = useUserContext();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Value of username:", username);
    console.log("Value of password:", password);

    const userData = {
      user: username,
      pwd: password
    };

    try {
      
      const response = await axios.post("http://localhost:3500/auth", userData)

      if (response.data.accessToken) {
        login(response.data);
        navigate("/");
        console.log("Login succesful!")
      } else {
        console.error("Login failed:", response.data.error)
      }
    } catch (error) {
      console.log("Error", error)
    }

  };

  return (
    <div className={styles.container}>
        <div className={styles.login}>
             <h2>Login</h2>
             <p className={styles.login_new}>
                 New user? 
                 <Link to="/signup">
                    <button className={styles.btn}>Sign Up</button>
                 </Link>
            </p>
        </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <span className={styles.forget} >Forget password?</span>
      </form>
      <LoginBtn onClick={handleSubmit}  />
    </div>
  );
}

export default LoginForm;