import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; 

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user)); // Save user in localStorage
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");  // Remove user in localStorage
    setCurrentUser(null);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
      } catch (error) {
        console.error("Error parsing user from LocalStorage", error);
        localStorage.removeItem("user"); // Удаляем неправильные данные из LocalStorage
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
