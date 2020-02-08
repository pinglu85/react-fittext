import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ReactFitText = ({
  compressor = 1,
  maxFontSize = Number.POSITIVE_INFINITY,
  minFontSize = Number.NEGATIVE_INFINITY,
  width,
  children
}) => {
  const ref = useRef(null);
  useEffect(() => {
    // turn children into an array
    const children = [].slice.call(ref.current.children);

    const fit = () => {
      children.map(
        child =>
          (child.style.fontSize =
            Math.max(
              Math.min(
                ref.current.clientWidth / (compressor * 10),
                parseFloat(maxFontSize)
              ),
              parseFloat(minFontSize)
            ) + 'px')
      );
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [ref, compressor, maxFontSize, minFontSize]);
  return (
    <div ref={ref} style={{ width: width }}>
      {children}
    </div>
  );
};

ReactFitText.propTypes = {
  compressor: PropTypes.number,
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number,
  width: PropTypes.string,
  children: PropTypes.node
};

export default ReactFitText;
