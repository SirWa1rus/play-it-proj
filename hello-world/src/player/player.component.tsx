import React, { useState } from 'react';
import { Scrollbar } from "react-scrollbars-custom";
import FaderThumb from "./FaderThumb";

const PlayerComponent: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="center-box">
        <div className="lyrics-blur-overlay"></div>
        <Scrollbar
      style={{ width: "100%", height: "94%" }}
      thumbYProps={{
        renderer: ({ elementRef, style, ...restProps }) => (
          <FaderThumb ref={elementRef} style={style} {...restProps} />
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
              width: "32px",
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
      </div>
      <div className="player-menu">
        <button className="player-button">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
          </svg>
        </button>
        <button className="player-button play-pause-button" onClick={() => setIsPlaying(!isPlaying)}>
          <span className={`play-pause-icon ${isPlaying ? "hidden" : "visible"}`}>▶</span>
          <span className={`play-pause-icon ${isPlaying ? "visible" : "hidden"}`}>⏸</span>
        </button>
        <button className="player-button">
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path d="M4 18l8.5-6L4 6v12zm9 0l8.5-6L13 6v12z" />
          </svg>
        </button>
      </div>
  <div className="two-line-box">
  </div>
</div>
  );
};

export default PlayerComponent;