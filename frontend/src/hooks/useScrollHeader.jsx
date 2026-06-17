import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverWhite, setIsOverWhite] = useState(false); // Default to dark header
  const location = useLocation();
  const lastCheckTimeRef = useRef(0);

  useEffect(() => {
    const checkPosition = () => {
      const now = Date.now();
      // Throttle to 60fps
      if (now - lastCheckTimeRef.current < 16) return;
      lastCheckTimeRef.current = now;

      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Find all elements with data-white-header
      const whiteSections = document.querySelectorAll('[data-white-header="true"]');
      const headerHeight = 80;
      const checkY = scrollY + headerHeight / 2; // Check at the middle of the header

      let overWhiteSection = false;
      
      whiteSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the header (middle point) is inside this section
        if (checkY >= rect.top + scrollY && checkY <= rect.bottom + scrollY) {
          overWhiteSection = true;
        }
      });
      
      setIsOverWhite(overWhiteSection);
    };

    // Use both scroll and resize
    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition, { passive: true });
    
    // Initial check
    checkPosition();
    
    // Also check after a small delay to make sure everything is rendered
    const timeoutId = setTimeout(checkPosition, 100);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return { isScrolled, isOverWhite, isLightMode: isOverWhite };
};
