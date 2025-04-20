import React, { useState, useEffect } from 'react';
import './NavBar.css'
import './index.css'
import darkModeSvg from './assets/dark_mode.svg'
import lightModeSvg from './assets/light_mode.svg'
const ThemeWrapper: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    return () => {
      document.body.classList.remove('dark-theme');
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-container">
     <div>
     <img
        onClick={toggleTheme}
        className='theme-toggle-button'
        src={`${theme === 'light' ? darkModeSvg : lightModeSvg}`}
        alt={`${theme === 'light' ? 'Dark' : 'Light'} Theme`}
      />
     </div>

    </div>
  );
};

export default ThemeWrapper;
