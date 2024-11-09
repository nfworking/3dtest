import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Duck extends React.Component {
  constructor(props) {
    super(props);
    this.meshRef = React.createRef();
    this.state = {
      model: null
    };
  }

  componentDidMount() {
    const loader = new GLTFLoader();
    loader.load('/something.glb', (gltf) => {
      this.setState({ model: gltf.scene });
    });
  }

  render() {
    return this.state.model ? (
      <primitive 
        object={this.state.model} 
        ref={this.meshRef}
        scale={[2, 2, 2]}
        position={[0, -1, 0]}
      />
    ) : null;
  }
}

class Scene extends React.Component {
  render() {
    return (
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Duck />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Canvas>
    );
  }
}

class ThreeDModelViewer extends React.Component {
  render() {
    return (
      <div className='mt-20 ml-48' style={{ width: '100%', height: '100vh' }}>
        <Scene />
      </div>
    );
  }
}

export default ThreeDModelViewer;