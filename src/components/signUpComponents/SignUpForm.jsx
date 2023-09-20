import React, { useState } from "react";
import styles from "./signUp.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import SignupBtn from "../buttons/SignupBtn";



 function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const createUserOnServer = async (userData) => {
      const response = await axios.post("http://localhost:3500/register", userData); 
      return response.data; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
        user: formData.username,
        pwd: formData.password,
        firstname:formData.firstname,
        lastname:formData.lastname
      };
    
      try {
        const response = await createUserOnServer(userData);
        console.log(response);
        if (response.success) {
            setRegistrationSuccess(true)
            navigate("/");
            console.log(response.message)
        } else {
            console.error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
  };



  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <h2>Sign Up</h2>
            <p className={styles.login_new}>
                Already have an account?
                <Link to="/login">
                    <button className={styles.btn}>Log in</button>
                </Link>
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
            </div>
            <div className={styles.formGroup}>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
            </div>
            <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.user}
                        onChange={handleInputChange}
                        placeholder="Username"
                        required
                    />
            </div>
            <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                    />
            </div>
             <SignupBtn onClick={handleSubmit} />
        </form>
        <div>
            {registrationSuccess && (
                 <div className={styles.successMessage}>
                Registration successful! You can now log in.
                </div>
            )}
        </div>
    </div>
    
    
  );
}

export default SignUpForm;