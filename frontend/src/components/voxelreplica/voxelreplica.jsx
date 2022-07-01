import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as THREE from 'three';
// eslint-disable-next-line import/no-extraneous-dependencies
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// eslint-disable-next-line import/no-extraneous-dependencies
import Stats from 'three/examples/jsm/libs/stats.module';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import voxelReplica from './withoutclothingrack.glb';

function voxelreplica() {
  const ref = useRef();
  useEffect(() => {
    // scene
    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(100));

    // light
    const pointLight = new THREE.PointLight(0xcccccc);
    pointLight.position.set(-3, 25, 7);
    const pointLightHelper = new THREE.PointLightHelper(pointLight);
    pointLight.castShadow = true;
    pointLight.shadow.bias = -0.001;
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.95);
    scene.add(ambientLight, pointLight, pointLightHelper);

    // camera
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   ref.current.clientWidth / ref.current.clientHeight,
    //   0.1,
    //   1000
    // );
    //
    // camera.position.z = 22.389933119740018;
    // camera.position.y = 11.61866237153789;
    // camera.position.x = -5.410301035552537;
    const aspect = ref.current.clientWidth / ref.current.clientHeight;
    const d = 16;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      1000
    );
    camera.position.set(-10.26, 13.2, 6.3); // all components equal
    camera.lookAt(scene.position); // or the origin

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(ref.current.devicePixelRatio);
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    ref.current.appendChild(renderer.domElement);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // loader
    const loader = new GLTFLoader();
    loader.load(
      voxelReplica,
      function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            console.log('child mesh:', child);
            child.receiveShadow = true;
            child.castShadow = true;
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // stats
    const stats = Stats();
    ref.current.appendChild(stats.dom);
    function render() {
      console.log('3js rendered:', camera.position);
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      console.log('window callback');
      camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      render();
      stats.update();
    }

    animate();
  }, []);
  return (
    <Box
      className="voxelContainer"
      ref={ref}
      sx={{ width: '100%', height: { mobile: '320px', tablet: '500px' } }}
    />
  );
}
export default voxelreplica;
