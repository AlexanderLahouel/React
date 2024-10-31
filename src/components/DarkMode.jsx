import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkmode');
    return storedPreference
      ? storedPreference === 'on'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkmode', 'on');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkmode', 'off');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label htmlFor="darkmode-switch" className="toggle-switch">
        <input
          type="checkbox"
          id="darkmode-switch"
          checked={darkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;

