import React, { useState, useRef, useEffect } from 'react';
import Scrollbar from "react-scrollbars-custom";
import FaderThumb from "./FaderThumb";
import HomeMenuButton from "./HomeMenuButton";

const PlayerComponent: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRulerOpen, setIsRulerOpen] = useState(false);
  const [rulerValue, setRulerValue] = useState(50);
  const [rulerRotation, setRulerRotation] = useState(0);
  const [settingsRotation, setSettingsRotation] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(false);
  const scrollbarRef = useRef<Scrollbar>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollEnabledRef = useRef(isAutoScrollEnabled);
  const isPlayingRef = useRef(isPlaying);
  const rulerValueRef = useRef(rulerValue);

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

  const handleScrollUp = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop -= 50;
    }
  };

  const activateAutoScrollUp = () => {
    setIsAutoScrollEnabled(true);
    isAutoScrollEnabledRef.current = true;
    setIsPlaying(true);
    isPlayingRef.current = true;
    
    // Clear any existing timer before starting a new one
    if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
    
    if (rulerValueRef.current > 0) {
      const delay = Math.floor(200 / rulerValueRef.current);
      autoScrollTimerRef.current = setTimeout(handleScrollDown, delay);
    }
  };

  const deactivateAutoScroll = () => {
    setIsAutoScrollEnabled(false);
    isAutoScrollEnabledRef.current = false;
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  };

  const handleScrollDown = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop += 1;
    }
    
    // Recursive call to continue scrolling if enabled
    if (isAutoScrollEnabledRef.current && isPlayingRef.current && rulerValueRef.current > 0) {
      const delay = Math.floor(200 / rulerValueRef.current);
      autoScrollTimerRef.current = setTimeout(handleScrollDown, delay);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {/* HomeMenuButton moved to top-left */}
      <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 101 }}>
        <HomeMenuButton />
      </div>
      <div className="center-box" style={{ margin: 0 }}>
        <div className="lyrics-blur-overlay"></div>
        <Scrollbar
      
      ref={scrollbarRef}
      style={{ width: "100%", height: "94%" }}
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
            {/* Center white line */}
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

      <div className="player-menu" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', overflow: 'visible', width: '70%' }}>
        <div ref={rulerRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            className="player-button" 
            style={{ borderRadius: '50%', background: isRulerOpen ? 'rgba(255, 255, 255, 0.2)' : '' }}
            onClick={() => {
              setIsRulerOpen(!isRulerOpen);
              setRulerRotation(prev => prev + 180);
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="1em" 
              height="1em" 
              fill="currentColor"
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `rotate(${rulerRotation}deg)`
              }}
            >
              <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H10V10H7V12H10V14H7V16H10V18H7V20H17V4H7Z" />
            </svg>
          </button>
          {isRulerOpen && (
            <div style={{ 
              position: 'absolute',
              bottom: '100%',
              left: '-700%',
              transform: 'scale(0.5)',
              transformOrigin: 'bottom left',
              width: '1600px',
              height: '120px',
              marginBottom: '20px',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              padding: '0 60px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            }}>
              <span style={{ color: '#fff', fontSize: '48px', fontWeight: 'bold', minWidth: '40px' }}>0</span>
              <div style={{ position: 'relative', flex: 1, height: '120px', display: 'flex', alignItems: 'center' }}>
                {/* Slider Track */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '7px',
                  background: '#fff',
                  borderRadius: '2px',
                  opacity: 0.9
                }} />
                {/* Slider Handle (White Notch) */}
                <div style={{
                  position: 'absolute',
                  left: `${rulerValue}%`,
                  width: '6px',
                  height: '48px',
                  background: '#fff',
                  borderRadius: '2px',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 15px rgba(0,0,0,0.5)',
                  zIndex: 1
                }} />
                {/* Invisible Range Input for Interaction */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rulerValue}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setRulerValue(val);
                    rulerValueRef.current = val;
                    // Update timer speed immediately if auto-scroll is active
                    if (isAutoScrollEnabledRef.current && isPlayingRef.current) {
                      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
                      if (val > 0) autoScrollTimerRef.current = setTimeout(handleScrollDown, Math.floor(200 / val));
                    }
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
              <span style={{ color: '#fff', fontSize: '48px', fontWeight: 'bold', minWidth: '80px' }}>100</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '4px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                minWidth: '120px',
                height: '90px',
              }}>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={rulerValue}
                  onChange={(e) => {
                    let val = parseInt(e.target.value, 10);
                    val = isNaN(val) ? 0 : Math.min(100, Math.max(0, val));
                    setRulerValue(val);
                    rulerValueRef.current = val;
                    // Update timer speed immediately if auto-scroll is active
                    if (isAutoScrollEnabledRef.current && isPlayingRef.current) {
                      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
                      if (val > 0) autoScrollTimerRef.current = setTimeout(handleScrollDown, Math.floor(200 / val));
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                    outline: 'none',
                    padding: 0,
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <button className="player-button" onClick={handleScrollUp}>
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
          </svg>
        </button>
        <button className="player-button play-pause-button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
          const nextPlaying = !isPlaying;
          setIsPlaying(nextPlaying);
          isPlayingRef.current = nextPlaying;

          if (isAutoScrollEnabledRef.current) {
            if (nextPlaying) {
              // Resume scrolling
              if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
              if (rulerValueRef.current > 0) {
                const delay = Math.floor(200 / rulerValueRef.current);
                autoScrollTimerRef.current = setTimeout(handleScrollDown, delay);
              }
            } else {
              // Pause scrolling
              if (autoScrollTimerRef.current) {
                clearTimeout(autoScrollTimerRef.current);
                autoScrollTimerRef.current = null;
              }
            }
          }
        }}>
          <span className={`play-pause-icon ${isPlaying ? "hidden" : "visible"}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateX(1px)', lineHeight: 0 }}>▶</span>
          <span className={`play-pause-icon ${isPlaying ? "visible" : "hidden"}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', lineHeight: 0 }}>⏸</span>
        </button>
        <button className="player-button" onClick={handleScrollDown}>
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path d="M4 18l8.5-6L4 6v12zm9 0l8.5-6L13 6v12z" />
          </svg>
        </button>
        {/* Settings Button - Opens the configuration menu */}
        <div ref={settingsRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            className="player-button" 
            onClick={() => {
              setSettingsRotation(prev => prev + 360);
              setIsSettingsOpen(!isSettingsOpen);
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="1em" 
              height="1em" 
              fill="currentColor"
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `rotate(${settingsRotation}deg)`
              }}
            >
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.35 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.47,5.34 14.86,5.08L14.47,2.44C14.43,2.21 14.23,2 14,2H10C9.77,2 9.57,2.21 9.53,2.44L9.14,5.08C8.53,5.34 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.35 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.04 4.95,18.95L7.44,17.95C7.96,18.34 8.53,18.66 9.14,18.92L9.53,21.56C9.57,21.79 9.77,22 10,22H14C14.23,22 14.43,21.79 14.47,21.56L14.86,18.92C15.47,18.66 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
            </svg>
          </button>
          {isSettingsOpen && (
            <div style={{
              position: 'absolute',
              bottom: '100%',
              left: '100%',
              marginBottom: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '15px',
              minWidth: '150px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              color: '#fff',
              zIndex: 1000
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
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
                  style={{ cursor: 'pointer' }} 
                />
                <span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Enable Auto-scroll</span>
              </label>
            </div>
          )}
        </div>
      </div>
      </div>
  <div className="two-line-box"></div>
</div>
  );
};

export default PlayerComponent;