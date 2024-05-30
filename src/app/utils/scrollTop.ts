import { useEffect } from 'react';

function ScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default ScrollTop;
