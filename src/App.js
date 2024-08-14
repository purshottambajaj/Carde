import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './component/Card';
import Testimonial from './component/testimonial';
import Footer from './component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <button className="toggle-button" onClick={toggleTheme}>
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 3.1a1 1 0 00-.92.61l-2.73 6.19-6.38.51a1 1 0 00-.56 1.74l4.85 4.35-1.48 6.07a1 1 0 001.53 1.05l5.48-3.37 5.48 3.37a1 1 0 001.53-1.05l-1.48-6.07 4.85-4.35a1 1 0 00-.56-1.74l-6.38-.51-2.73-6.19A1 1 0 0012 3.1zM12 21.9l-4.14 2.54 1.19-4.89-3.91-3.52 5.17-.42L12 6.6l1.69 3.9 5.17.42-3.91 3.52 1.19 4.89L12 21.9z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 3.1a1 1 0 00-.92.61l-2.73 6.19-6.38.51a1 1 0 00-.56 1.74l4.85 4.35-1.48 6.07a1 1 0 001.53 1.05l5.48-3.37 5.48 3.37a1 1 0 001.53-1.05l-1.48-6.07 4.85-4.35a1 1 0 00-.56-1.74l-6.38-.51-2.73-6.19A1 1 0 0012 3.1zM12 21.9l-4.14 2.54 1.19-4.89-3.91-3.52 5.17-.42L12 6.6l1.69 3.9 5.17.42-3.91 3.52 1.19 4.89L12 21.9z" />
          </svg>
        )}
      </button>
      <Card />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
