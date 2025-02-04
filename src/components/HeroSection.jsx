import React from 'react';
import Model from './Model';

function HeroSection() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <Model
        src="/something.glb"
        alt="A 3D Model"
        style={{ width: '80vw', height: '80vh' }} // Key change: style on model-viewer
        // ... other model-viewer attributes
      />
    </div>
  );
}

export default HeroSection;