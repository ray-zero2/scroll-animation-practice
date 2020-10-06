import * as THREE from 'three';

export default class Gl {
  constructor($canvasElement) {
    this.$canvas = $canvasElement;
    this.viewProps = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: Math.min(devicePixelRatio, 2 || 1),
    };
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGL1Renderer({
      antialias: false,
      canvas: this.$canvas,
    });
    this.camera = new THREE.PerspectiveCamera();
    this.clock = new THREE.Clock();
    this.cube = null;
  }

  render() {
    console.log('render');
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.0125;
    this.cube.rotation.z += 0.012;
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  createObject() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshNormalMaterial()
    );
    this.cube.position.y = 5;
    this.cube.position.z = 1;
  }

  setRenderer() {
    const width = this.viewProps.width;
    const height = this.viewProps.height;
    this.renderer.width = width;
    this.renderer.height = height;
    this.renderer.setSize(width, height);
  }

  setCamera() {
    const width = this.viewProps.width;
    const height = this.viewProps.height;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  handleResize() {
    this.viewProps.width = window.innerWidth;
    this.viewProps.height = window.innerHeight;
    this.setRenderer();
    this.setCamera();
  }

  bind() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  init() {
    this.renderer.setPixelRatio(this.viewProps.dpr);
    this.renderer.setClearColor(0x161216);
    this.setRenderer();
    this.camera.position.y = 10;
    this.camera.position.z = 150;
    this.setCamera();
    this.createObject();
    this.scene.add(this.cube);

    this.bind();
    this.animate();
  }
}
