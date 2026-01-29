import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMenuButton.module.css';

const HomeMenuButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside of the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={styles.container}
    >
      <button
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.button}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36px" height="36px" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      <div 
        className={styles.menu}
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
        }}
      >
        <div className={styles.menuInner}>
          <ul className={styles.menuList}>
            <li>
              <Link
                to="/"
                className={styles.menuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/player"
                className={styles.menuItem}
                onClick={() => setIsMenuOpen(false)}
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