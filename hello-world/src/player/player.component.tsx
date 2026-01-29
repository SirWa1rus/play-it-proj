import React, { useState, useRef, useEffect } from 'react';
import Scrollbar from "react-scrollbars-custom";
import FaderThumb from "./FaderThumb";
import HomeMenuButton from "./HomeMenuButton";
import { useAutoScroll } from "./useAutoScroll";
import styles from "./Player.module.css";

const PlayerComponent: React.FC = () => {
  // --- State Management ---
  // Controls whether the auto-scroll is currently active
  const [isPlaying, setIsPlaying] = useState(false);
  // Controls the visibility of the speed ruler (slider)
  const [isRulerOpen, setIsRulerOpen] = useState(false);
  // The current speed value (0-100)
  const [rulerValue, setRulerValue] = useState(50);
  // Rotation state for the ruler icon animation
  const [rulerRotation, setRulerRotation] = useState(0);
  // Rotation state for the settings icon animation
  const [settingsRotation, setSettingsRotation] = useState(0);
  // Controls the visibility of the settings menu
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // Master toggle for the auto-scroll feature
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(false);

  // --- Refs ---
  // Reference to the scrollbar component to programmatically scroll
  const scrollbarRef = useRef<Scrollbar>(null);
  // References for click-outside detection
  const settingsRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);
  
  // Use the custom hook for auto-scroll logic.
  // It will automatically handle starting/stopping/speed changes.
  useAutoScroll({
    scrollbarRef,
    speed: rulerValue,
    isPlaying,
    isEnabled: isAutoScrollEnabled
  });

  // Effect to handle closing menus when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
      if (rulerRef.current && !rulerRef.current.contains(event.target as Node)) {
        setIsRulerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manual scroll up function
  const handleScrollUp = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop -= 50;
    }
  };

  // Enables the auto-scroll feature toggle
  const activateAutoScrollUp = () => {
    setIsAutoScrollEnabled(true);
  };

  // Stops the auto-scroll process
  const deactivateAutoScroll = () => {
    setIsAutoScrollEnabled(false);
    setIsPlaying(false);
  };

  const handleScrollDown = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop += 50;
    }
  };

  return (
    // Main container filling the viewport
    <div className={styles.container}>
      {/* Navigation button in the top-left */}
      <div className={styles.homeButtonContainer}>
        <HomeMenuButton />
      </div>
      
      {/* Central box containing the lyrics */}
      <div className="center-box" style={{ margin: 0 }}>
        <div className="lyrics-blur-overlay"></div>
        <Scrollbar
      ref={scrollbarRef}
      style={{ width: "100%", height: "94%" }}
      // Custom thumb (the draggable part of the scrollbar)
      thumbYProps={{
        renderer: ({ elementRef, style, ...restProps }) => (
          <FaderThumb ref={elementRef} style={{ ...style, marginLeft: '-1px' }} {...restProps} />
        ),
      }}
      trackYProps={{
        renderer: ({ elementRef, style, children, ...restProps }) => (
          <div
            ref={elementRef}
            style={{
              ...style,
              background: "transparent",
              borderRadius: "16px",
              width: "48px",
              right: "10px",
              position: "absolute",
              overflow: "visible",
              zIndex: 10,
            }}
            {...restProps}
          >
            {/* Decorative center white line in the track */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "6px",
                width: "7px",
                height: "calc(100% - 12px)",
                background: "#fff",
                borderRadius: "2px",
                transform: "translateX(-50%)",
                zIndex: 1,
                opacity: 0.9,
              }}
            />
            {children}
          </div>
        ),
      }}
    >
        {/* Lyrics content */}
        <div className="box-content">
          <pre>So close, no matter how far</pre>
          <pre>Couldn't be much more from the heart</pre>
          <pre>Forever trusting who we are</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Never opened myself this way</pre>
          <pre>Life is ours, we live it our way</pre>
          <pre>All these words, I don't just say</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Trust I seek and I find in you</pre>
          <pre>Every day for us something new</pre>
          <pre>Open mind for a different view</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Never cared for what they do</pre>
          <pre>Never cared for what they know</pre>
          <pre>But I know</pre>
          <pre></pre><br />
          <pre>So close, no matter how far</pre>
          <pre>It couldn't be much more from the heart</pre>
          <pre>Forever trusting who we are</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Never cared for what they do</pre>
          <pre>Never cared for what they know</pre>
          <pre>But I know</pre>
          <pre></pre><br />
          <pre>I never opened myself this way</pre>
          <pre>Life is ours, we live it our way</pre>
          <pre>All these words, I don't just say</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Trust I seek and I find in you</pre>
          <pre>Every day for us something new</pre>
          <pre>Open mind for a different view</pre>
          <pre>And nothing else matters</pre>
          <pre></pre><br />
          <pre>Never cared for what they say</pre>
          <pre>Never cared for games they play</pre>
          <pre>Never cared for what they do</pre>
          <pre>Never cared for what they know</pre>
          <pre>And I know, yeah, yeah</pre>
          <pre></pre><br />
          <pre>So close, no matter how far</pre>
          <pre>Couldn't be much more from the heart</pre>
          <pre>Forever trusting who we are</pre>
          <pre>No, nothing else matters</pre>
        </div>
        </Scrollbar>
      </div>

      {/* Bottom player control menu - Moved outside center-box to avoid blur overlap */}
      <div className={styles.playerMenu}>
        {/* Speed Ruler Control */}
        <div ref={rulerRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            className="player-button" 
            style={{ 
              borderRadius: '50%', 
              background: isRulerOpen ? 'rgba(255, 255, 255, 0.2)' : '',
              width: '48px',
              height: '48px'
            }}
            onClick={() => {
              setIsRulerOpen(!isRulerOpen);
              setRulerRotation(prev => prev + 180);
            }}
          >
            {/* Ruler Icon */}
            <svg 
              viewBox="0 0 24 24" 
              width="1.5em" 
              height="1.5em" 
              fill="currentColor"
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `rotate(${rulerRotation}deg)`
              }}
            >
              <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H10V10H7V12H10V14H7V16H10V18H7V20H17V4H7Z" />
            </svg>
          </button>
          {/* Speed Ruler Popup */}
          <div 
            className={styles.rulerPopup}
            style={{
              opacity: isRulerOpen ? 1 : 0,
              transform: isRulerOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
              visibility: isRulerOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s',
              pointerEvents: isRulerOpen ? 'auto' : 'none'
            }}
          >
              <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', minWidth: '20px' }}>0</span>
              <div style={{ position: 'relative', flex: 1, height: '40px', display: 'flex', alignItems: 'center' }}>
                {/* Slider Track */}
                <div className={styles.sliderTrack} />
                {/* Slider Handle */}
                <div style={{
                  left: `${rulerValue}%`,
                }} className={styles.sliderHandle} />
                {/* Hidden range input for interaction */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rulerValue}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setRulerValue(val);
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                />
              </div>
              <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', minWidth: '40px' }}>100</span>
              {/* Numeric input for speed */}
              <div className={styles.numericInputContainer}>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={rulerValue}
                  onChange={(e) => {
                    let val = parseInt(e.target.value, 10);
                    val = isNaN(val) ? 0 : Math.min(100, Math.max(0, val));
                    setRulerValue(val);
                  }}
                  className={styles.numericInput}
                />
              </div>
            </div>
        </div>
        {/* Manual Scroll Up Button */}
        <button 
          className="player-button" 
          style={{ 
            width: '48px', 
            height: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
          onClick={handleScrollUp}
        >
          <svg viewBox="0 0 24 24" width="1.8em" height="1.8em" fill="currentColor">
            <path d="M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59ZM12.41,16.59L7.82,12L12.41,7.41L11,6L5,12L11,18L12.41,16.59Z" />
          </svg>
        </button>
        {/* Play/Pause Button */}
        <button 
          className="player-button play-pause-button" 
          style={{ 
            position: 'relative', 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 0,
            width: '64px',
            height: '64px'
          }} 
          onClick={() => {
          setIsPlaying(!isPlaying);
        }}>
          <svg 
            viewBox="0 0 24 24" 
            width="2.5em" 
            height="2.5em" 
            fill="currentColor"
            style={{
              position: 'absolute',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying ? 'scale(1)' : 'scale(0.8)',
            }}
          >
            <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
          <svg 
            viewBox="0 0 24 24" 
            width="2.5em" 
            height="2.5em" 
            fill="currentColor" 
            style={{ 
              position: 'absolute',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: isPlaying ? 0 : 1,
              transform: isPlaying ? 'scale(0.8) translateX(1px)' : 'scale(1) translateX(1px)',
            }}
          >
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </button>
        {/* Manual Scroll Down Button */}
        <button 
          className="player-button" 
          style={{ 
            width: '48px', 
            height: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
          onClick={handleScrollDown}
        >
          <svg viewBox="0 0 24 24" width="1.8em" height="1.8em" fill="currentColor">
            <path d="M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41ZM11.59,7.41L16.18,12L11.59,16.59L13,18L19,12L13,6L11.59,7.41Z" />
          </svg>
        </button>
        {/* Settings Button */}
        <div ref={settingsRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            className="player-button" 
            style={{ width: '48px', height: '48px' }}
            onClick={() => {
              setSettingsRotation(prev => prev + 360);
              setIsSettingsOpen(!isSettingsOpen);
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="1.5em" 
              height="1.5em" 
              fill="currentColor"
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `rotate(${settingsRotation}deg)`
              }}
            >
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.35 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.47,5.34 14.86,5.08L14.47,2.44C14.43,2.21 14.23,2 14,2H10C9.77,2 9.57,2.21 9.53,2.44L9.14,5.08C8.53,5.34 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.35 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.04 4.95,18.95L7.44,17.95C7.96,18.34 8.53,18.66 9.14,18.92L9.53,21.56C9.57,21.79 9.77,22 10,22H14C14.23,22 14.43,21.79 14.47,21.56L14.86,18.92C15.47,18.66 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
            </svg>
          </button>
          {/* Settings Menu Popup */}
          <div 
            className={styles.settingsMenu}
            style={{
              opacity: isSettingsOpen ? 1 : 0,
              transform: isSettingsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
              visibility: isSettingsOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s',
              pointerEvents: isSettingsOpen ? 'auto' : 'none'
            }}
          >
              <label className={styles.settingsLabel}>
                <input 
                  type="checkbox" 
                  checked={isAutoScrollEnabled}
                  onChange={(e) => {
                    if (e.target.checked) {
                      activateAutoScrollUp();
                    } else {
                      deactivateAutoScroll();
                    }
                  }}
                  className={styles.settingsCheckbox}
                />
                <span className={styles.settingsText}>Enable Auto-scroll</span>
              </label>
            </div>
        </div>
      </div>
  <div className="two-line-box"></div>
</div>
  );
};

export default PlayerComponent;