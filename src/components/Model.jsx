import React, { useRef, useEffect } from 'react';

const Model = ({ src, alt, ...props }) => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (modelViewerRef.current) {
      // Optional: Access and manipulate the model-viewer API if needed
      // For example, you can set environment images or other properties here
      // modelViewerRef.current.environmentImage = 'neutral';
    }
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt={alt}
      camera-controls  // Enable orbit controls
      auto-scale      // Scale model to fit viewer
      {...props}       // Spread any additional props to the model-viewer
    >
      <slot name="poster"></slot> {/* If you want a custom poster */}
    </model-viewer>
  );
};

export default Model;