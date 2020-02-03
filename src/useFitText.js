import { useRef, useEffect } from 'react';

const useFitText = kompressor => {
  const ref = useRef(null);
  const compressor = kompressor || 1;
  useEffect(() => {
    const minFontSize = Number.NEGATIVE_INFINITY;
    const maxFontSize = Number.POSITIVE_INFINITY;
    const fit = () => {
      if (ref.current) {
        const size = Math.max(
          Math.min(
            ref.current.clientWidth / (compressor * 10),
            parseFloat(maxFontSize)
          ),
          parseFloat(minFontSize)
        );
        ref.current.style.fontSize = `${size}px`;
      }
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [ref, compressor]);
  return [ref];
};

export default useFitText;
