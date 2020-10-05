import Gl from './Gl/Gl';

class App {
  constructor() {
    this.gl = new Gl(document.querySelector('#canvas'));
    this.init();
  }

  init() {
    this.gl.init();
  }
}
new App();
