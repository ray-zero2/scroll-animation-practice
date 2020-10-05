import * as THREE from 'three';

export default class Gl {
  constructor($canvasElement) {
    this.$canvas = $canvasElement;
    this.viewProps = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: Math.min(devicePixelRatio, 2 || 1),
    };
  }

  init() {}
}
