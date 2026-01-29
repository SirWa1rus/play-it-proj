import { useRef, useEffect } from 'react';
import Scrollbar from "react-scrollbars-custom";

/**
 * The amount of pixels to scroll in each step. 
 * 1px is used to ensure the smoothest possible visual movement.
 */
const SCROLL_STEP_PIXELS = 1;

/**
 * A base constant used to calculate the millisecond delay between scroll steps.
 * The formula (BASE_DELAY / speed) maps the 0-100 user setting to a usable interval.
 * A value of 200 means at speed 100, we scroll every 2ms (very fast).
 */
const BASE_DELAY_FACTOR = 200;

interface AutoScrollOptions {
  scrollbarRef: React.RefObject<Scrollbar | null>;
  speed: number;
  isPlaying: boolean;
  isEnabled: boolean;
}

/**
 * Custom hook to encapsulate the recursive auto-scroll logic.
 * It automatically starts/stops/updates based on the provided state.
 */
export const useAutoScroll = ({ scrollbarRef, speed, isPlaying, isEnabled }: AutoScrollOptions) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const stop = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (!isEnabled || !isPlaying || speed <= 0) {
      stop();
      return;
    }

    const scroll = () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollTop += SCROLL_STEP_PIXELS;
      }
      const delay = Math.floor(BASE_DELAY_FACTOR / speed);
      timerRef.current = setTimeout(scroll, delay);
    };

    timerRef.current = setTimeout(scroll, Math.floor(BASE_DELAY_FACTOR / speed));
    return stop;
  }, [speed, isPlaying, isEnabled, scrollbarRef]);
};