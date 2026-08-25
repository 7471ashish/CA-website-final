import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const rawId = hash.replace('#', '');
      // Handle possible aliases
      const targetId = rawId === 'audit' ? 'audit-assurance' : rawId;

      const scrollToElement = () => {
        const element = document.getElementById(targetId) || document.getElementById(rawId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // Try immediately, then fallback with slight delays for React render cycles
      if (!scrollToElement()) {
        const timer1 = setTimeout(scrollToElement, 100);
        const timer2 = setTimeout(scrollToElement, 300);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

