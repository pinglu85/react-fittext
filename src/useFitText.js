import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFitText = (
  compressor = 1,
  minFontSize = Number.NEGATIVE_INFINITY,
  maxFontSize = Number.POSITIVE_INFINITY
) => {
  // create an array of refs
  const refs = useRef([]);
  const addToRefs = el => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const fit = () => {
      refs.current.map(
        node =>
          (node.style.fontSize =
            Math.max(
              Math.min(
                node.clientWidth / (compressor * 10),
                parseFloat(maxFontSize)
              ),
              parseFloat(minFontSize)
            ) + 'px')
      );
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [refs, compressor, minFontSize, maxFontSize]);

  return addToRefs;
};

useFitText.propTypes = {
  compressor: PropTypes.number,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number
};

export default useFitText;
