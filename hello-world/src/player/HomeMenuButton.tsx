import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeMenuButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0', // Align with the top of the button to prevent it from going off-screen
    left: '100%',
    paddingLeft: '10px', // Bridge the gap so hover isn't lost when moving to the menu
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
    transformOrigin: 'left top',
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
    zIndex: 1000,
  };

  const menuInnerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    borderRadius: '8px',
    padding: '10px 0',
    minWidth: '150px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  };

  const menuItemStyle: React.CSSProperties = {
    display: 'block',
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s',
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', zIndex: 100 }}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <button
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        style={{
          width: '60px', // Larger button size
          height: '60px', // Larger button size
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          outline: 'none', // Remove default focus outline
          padding: 0, // Ensure no padding pushes the icon off-center
          color: '#fff',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      <div style={menuStyle}>
        <div style={menuInnerStyle}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <Link
                to="/"
                style={menuItemStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/player"
                style={menuItemStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Player
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuButton;