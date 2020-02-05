import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFitText = (kompressor, minSize, maxSize) => {
  const ref = useRef(null);
  const compressor = kompressor || 1;

  useEffect(() => {
    const minFontSize = minSize || Number.NEGATIVE_INFINITY;
    const maxFontSize = maxSize || Number.POSITIVE_INFINITY;
    const fit = () => {
      const size = Math.max(
        Math.min(
          ref.current.clientWidth / (compressor * 10),
          parseFloat(maxFontSize)
        ),
        parseFloat(minFontSize)
      );
      ref.current.style.fontSize = `${size}px`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [ref, compressor, minSize, maxSize]);

  return [ref];
};

useFitText.propTypes = {
  kompressor: PropTypes.number,
  minSize: PropTypes.number,
  maxSize: PropTypes.number
};

export default useFitText;
