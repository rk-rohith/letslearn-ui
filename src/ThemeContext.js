import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {  
  const [isDarkTheme, setIsDarkTheme] = useState(() => {  
    const savedTheme = localStorage.getItem('theme');  
  
    // Check the saved value and parse it accordingly  
    if (savedTheme === 'true' || savedTheme === 'false') {  
      return savedTheme === 'true';  
    } else if (savedTheme === '"light"') {  
      return false; // Assuming "light" means not dark theme  
    } else if (savedTheme === '"dark"') {  
      return true; // Assuming "dark" means dark theme  
    }  
  
    return false; // Default value if no valid stored value is found  
  });  

  const toggleTheme = () => {  
    setIsDarkTheme(prevTheme => !prevTheme);  
  };  

  useEffect(() => {  
    // Store the theme in localStorage as a boolean  
    localStorage.setItem('theme', JSON.stringify(isDarkTheme));  
  
    // Apply the theme class to the body  
    document.body.classList.toggle('dark-theme', isDarkTheme);  
    document.body.classList.toggle('light-theme', !isDarkTheme);  
  }, [isDarkTheme]);  

  return (  
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>  
      {children}  
    </ThemeContext.Provider>  
  );  
};  

export const useTheme = () => useContext(ThemeContext);