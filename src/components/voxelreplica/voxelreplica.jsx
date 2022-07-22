import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
// Three JS Dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import * as THREE from 'three';
// eslint-disable-next-line import/no-extraneous-dependencies
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import voxelReplica from './withoutclothingrack.glb';

function voxelreplica() {
  const ref = useRef();
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    // scene.add(new THREE.AxesHelper(100));

    // Light
    const pointLight = new THREE.PointLight(0xcccccc);
    pointLight.position.set(-3, 25, 7);
    // const pointLightHelper = new THREE.PointLightHelper(pointLight);
    pointLight.castShadow = true;
    pointLight.shadow.bias = -0.001;
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.95);
    scene.add(ambientLight, pointLight);

    // camera
    const aspect = ref.current.clientWidth / ref.current.clientHeight;
    const d = 18;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      1000
    );
    camera.position.set(-10.26, 13.2, 6.3); // all components equal
    // camera.lookAt(scene.position); // or the origin

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(ref.current.devicePixelRatio);
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    ref.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Loader
    let voxelObject = null;
    const loader = new GLTFLoader();
    loader.load(
      voxelReplica,
      function (gltf) {
        voxelObject = gltf.scene;
        camera.lookAt(voxelObject.position);
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            // eslint-disable-next-line no-param-reassign
            child.receiveShadow = true;
            // eslint-disable-next-line no-param-reassign
            child.castShadow = true;
          }
        });
        voxelObject.position.x -= 2;
        voxelObject.position.z += 2;
        scene.add(voxelObject);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // stats
    //  const stats = Stats();
    // ref.current.appendChild(stats.dom);
    function render() {
      renderer.render(scene, camera);
    }

    // Window Resize Callback
    function onWindowResize() {
      camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
      render();
    }
    window.addEventListener('resize', onWindowResize, false);

    // Animate Func
    let counterClockwise = true;
    function animate() {
      requestAnimationFrame(animate);

      if (voxelObject) {
        if (counterClockwise) {
          voxelObject.rotation.y += 0.0015;
        } else {
          voxelObject.rotation.y -= 0.0015;
        }
        if (voxelObject.rotation.y <= -0.55) {
          counterClockwise = true;
        } else if (voxelObject.rotation.y >= 0.55) {
          counterClockwise = false;
        }
      }

      render();
      controls.update();
      // stats.update();
    }

    animate();
    return () => {
      pointLight.dispose();
    };
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
