import * as THREE from 'three';
import anime from 'animejs';
import { lerp, clamp } from '../utils';

export default class Gl {
  constructor($canvasElement) {
    this.$canvas = $canvasElement;
    this.$container = document.querySelector('.container');
    this.$span = document.querySelector('span');
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

    this.isTouched = false;

    this.percentage = 0;
    this.maxHeight =
      (this.$container.clientHeight || this.$container.offsetHeight) -
      window.innerHeight;
    this.event = {
      y: 0,
      deltaY: 0,
    };
    this.timeline = anime.timeline({
      autoplay: false,
      duration: 4500,
      easing: 'easeOutSine',
    });
  }

  render() {
    this.percentage = lerp(0.7, this.event.y, this.percentage);
    this.$span.innerText =
      'scroll Y : ' + Math.round(this.percentage * 100) / 100;
    this.timeline.seek(this.percentage * (4500 / this.maxHeight));
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

  scroll() {
    const event = this.event;
    // console.log(event.deltaY);
    const scroll = event.y + event.deltaY;
    // const scroll = (event.y + event.deltaY) * -1;
    const adjustedScroll = clamp(scroll, 0, this.maxHeight);
    this.event.y = adjustedScroll;
    console.log({ adjustedScroll });
    // const
  }

  handleResize(e) {
    this.viewProps.width = window.innerWidth;
    this.viewProps.height = window.innerHeight;
    this.setRenderer();
    this.setCamera();
  }

  handleWheel(e) {
    e.preventDefault();
    // console.log(e.deltaY);
    // const deltaY = (e.wheelDeltaY || e.deltaY) * 0.5;
    // const deltaY = e.deltaY * 0.5;
    const deltaY = e.deltaY;
    // console.log(deltaY);
    this.event.deltaY = deltaY;
    this.scroll();
  }

  handleTouchStart(e) {
    this.isTouched = true;
  }

  handleTouchMove(e) {
    if (!this.isTouched) return;
  }

  handleTouchEnd(e) {
    this.isTouched = false;
  }

  bind() {
    window.addEventListener('resize', this.handleResize.bind(this), {
      passive: true,
    });
    window.addEventListener('wheel', this.handleWheel.bind(this), {
      passive: false,
    });
    window.addEventListener('touchstart', this.handleTouchStart.bind(this));
    window.addEventListener('touchmove', this.handleTouchMove.bind(this));
    window.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  initTimeline() {
    this.timeline.add({
      targets: this.cube.position,
      x: 100,
      y: 25,
      z: -50,
      duration: 2250,
      update: this.camera.updateProjectionMatrix(),
    });
    this.timeline.add({
      targets: this.cube.position,
      x: 0,
      y: 0,
      z: 50,
      duration: 2250,
      update: this.camera.updateProjectionMatrix(),
    });

    const value = new THREE.Color(0xfffcfc);
    const initColor = new THREE.Color(0x161216);
    this.timeline.add(
      {
        targets: initColor,
        r: [initColor.r, value.r],
        g: [initColor.g, value.g],
        b: [initColor.b, value.b],
        duration: 4500,
        update: () => {
          this.renderer.setClearColor(initColor);
        },
        // this is the offset of the animation in the timeline.
      },
      0
    );
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

    this.initTimeline();
    this.bind();
    this.animate();
  }
}
