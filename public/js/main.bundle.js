!function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(h&&h(t);d.length;)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={0:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=c;o.push([97,1]),r()}({97:function(e,t,r){"use strict";r.r(t);r(8),r(11),r(20),r(50),r(93),r(95);var n=r(0),i=new(r(55).a),o=function(e){return new Promise((function(t,r){i.load(e,t,null,r)}))};function a(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,c,"next",e)}function c(e){a(o,n,i,s,c,"throw",e)}s(void 0)}))}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t,r,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.src=t,this.resolution=r,console.log(n),this.uniforms={texture:{type:"t",value:n},backTexture:{type:"t",value:i},resolution:{type:"vec2",value:{x:r.width*r.dpr,y:r.height*r.dpr}}},this.backFaceMaterial=null,this.refractionMaterial=null,this.mesh=null,this.time=0}var t,r,i,a,u,h;return t=e,(r=[{key:"resize",value:function(e){this.resolution=e,this.uniforms.resolution.value={x:e.width*e.dpr,y:e.height*e.dpr}}},{key:"setSide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"front";this.mesh.material="front"===e||null===e?this.refractionMaterial:this.backFaceMaterial}},{key:"update",value:function(e,t){this.time+=e,this.mesh.rotation.x=this.time/6,this.mesh.rotation.y=this.time/4}},{key:"createGeometry",value:(h=s(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(this.src);case 2:return t=e.sent,r=t.scene.children[0],(n=r.geometry).computeVertexNormals(),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"createMaterial",value:function(){return this.backFaceMaterial=new n.db({vertexShader:"#define GLSLIFY 1\nvarying vec3 worldNormal;\n\nvoid main() {\n\tworldNormal = normalize( modelViewMatrix * vec4(normal, 0.)).xyz;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:"#define GLSLIFY 1\nvarying vec3 worldNormal;\n\nvoid main() {\n\tgl_FragColor = vec4(worldNormal, 1.0);\n}\n",side:n.b}),this.refractionMaterial=new n.db({vertexShader:"#define GLSLIFY 1\nvarying vec3 worldNormal;\nvarying vec3 viewDirection;\n\nvoid main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0);\n\tworldNormal = normalize( modelViewMatrix * vec4(normal, 0.)).xyz;\n\tviewDirection = normalize(worldPosition.xyz - cameraPosition);\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D texture;\nuniform sampler2D backTexture;\nuniform vec2 resolution;\n\nvarying vec3 worldNormal;\nvarying vec3 viewDirection;\n\nfloat ior = 2.42;\nfloat a = 0.33;\n// float a = 0.45;\n\nvec3 reflectionColor = vec3(1.0);\n\nfloat Fresnel(vec3 eyeVector, vec3 worldNormal) {\n\treturn min(pow( 1.0 + dot( eyeVector, worldNormal), 3.0 ), 1.0);\n\t// return min(pow( (1.0 + dot( eyeVector, worldNormal)) / 2.0, 3.0 ), 1.0);\n}\n\nvoid main() {\n\t// screen coordinates\n\tvec2 st = gl_FragCoord.xy / resolution;\n\n\tvec3 backfaceNormal = texture2D(backTexture, st).rgb;\n\tvec3 normal = worldNormal * (1.0 - a) - backfaceNormal * a;\n\t// vec3 normal = mix(-backfaceNormal, worldNormal, a);\n\n\t// calculate refraction and apply to bst\n\tvec3 refracted = refract(viewDirection, normal, 1.0/ior);\n\tst += refracted.xy;\n\n\tvec4 tex = texture2D(texture, st);\n\tfloat f = Fresnel(viewDirection, normal);\n\n\tvec4 color = tex;\n\tvec3 outputColor = mix(color.rgb, reflectionColor, f);\n\n\tgl_FragColor = vec4(outputColor, 1.0);\n\n}\n",uniforms:this.uniforms}),this.refractionMaterial}},{key:"createMesh",value:(u=s(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createGeometry();case 2:return t=e.sent,r=this.createMaterial(),i=new n.H(t,r),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"init",value:(a=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createMesh();case 2:return this.mesh=e.sent,e.abrupt("return");case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})}])&&c(t.prototype,r),i&&c(t,i),e}(),h=new(r(56).a),l=function(e){return new Promise((function(t,r){h.load(e,t,null,r)}))};function d(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){d(o,n,i,a,s,"next",e)}function s(e){d(o,n,i,a,s,"throw",e)}a(void 0)}))}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.src=t,this.resolution=r,this.mesh=null,this.time=0}var t,r,i,o,a,s;return t=e,(r=[{key:"resize",value:function(e){this.resolution=e,this.mesh.scale.set(this.resolution.wu,this.resolution.width,1)}},{key:"update",value:function(e){this.time+=e}},{key:"createGeometry",value:function(){return new n.T}},{key:"createMaterial",value:(s=f(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(this.src);case 2:return this.texture=e.sent,t=new n.I({map:this.texture}),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"createMesh",value:(a=f(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.createGeometry(),e.next=3,this.createMaterial();case 3:return r=e.sent,(i=new n.H(t,r)).scale.set(2*this.resolution.height,this.resolution.width,1),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"init",value:(o=f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createMesh();case 2:return this.mesh=e.sent,e.abrupt("return");case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}])&&v(t.prototype,r),i&&v(t,i),e}();function m(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$canvas=t,this.viewProps={width:window.innerWidth,height:window.innerHeight,dpr:Math.min(devicePixelRatio,2)},this.isTouched=null,this.position=new n.mb(0,0),this.time=0,this.velocity=0,this.renderer=null,this.envFbo=null,this.backFaceFbo=null,this.scene=null,this.camera=null,this.orthoCamera=null,this.clock=null,this.background=null,this.diamond=null}var t,r,i,o,a;return t=e,(r=[{key:"render",value:function(){var e=this.clock.getDelta();this.time+=e,this.background.update(e),this.diamond.update(e,this.velocity),this.renderer.clear(),this.renderer.setRenderTarget(this.envFbo),this.renderer.render(this.scene,this.orthoCamera),this.renderer.clearDepth(),this.diamond.setSide("back"),this.renderer.setRenderTarget(this.backFaceFbo),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.orthoCamera),this.renderer.clearDepth(),this.diamond.setSide(null),this.renderer.render(this.scene,this.camera)}},{key:"animate",value:function(){this.render(),requestAnimationFrame(this.animate.bind(this))}},{key:"setObjects",value:function(){var e=this;return this.diamond=new u("./model/diamond.glb",this.viewProps,this.envFbo.texture,this.backFaceFbo.texture),this.background=new p("./images/texture.jpg",this.viewProps),new Promise((function(t){Promise.all([e.diamond.init(),e.background.init()]).then((function(){t()}))}))}},{key:"createScene",value:function(){var e=this.viewProps.width,t=this.viewProps.height;this.scene=new n.cb,this.camera=new n.S(50,e/t,.1,1e3),this.orthoCamera=new n.R(-e/2,e/2,t/2,-t/2,1,1e3),this.renderer=new n.pb({antialias:!0,canvas:this.$canvas}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.viewProps.dpr),this.renderer.autoClear=!1,this.clock=new n.i}},{key:"start",value:function(){this.animate()}},{key:"resize",value:function(){var e=this.viewProps;e.width=window.innerWidth,e.height=window.innerHeight,this.renderer.setSize(e.width,e.height),this.envFbo.setSize(e.width*e.dpr,e.height*e.dpr),this.backFaceFbo.setSize(e.width*e.dpr,e.height*e.dpr),this.background.resize(e),this.diamond.resize(e),this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix(),this.orthoCamera.left=-e.width/2,this.orthoCamera.right=e.width/2,this.orthoCamera.top=e.height/2,this.orthoCamera.bottom=-e.height/2,this.orthoCamera.updateProjectionMatrix()}},{key:"handleResize",value:function(){this.resize()}},{key:"bind",value:function(){var e=this;window.addEventListener("resize",(function(t){e.handleResize(t)}))}},{key:"init",value:(o=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.createScene(),this.envFbo=new n.qb(this.viewProps.width*this.viewProps.dpr,this.viewProps.height*this.viewProps.dpr),this.backFaceFbo=new n.qb(this.viewProps.width*this.viewProps.dpr,this.viewProps.height*this.viewProps.dpr),e.next=5,this.setObjects();case 5:this.background.mesh.layers.set(1),this.orthoCamera.layers.set(1),this.scene.add(this.diamond.mesh),this.scene.add(this.background.mesh),this.camera.position.z=5,this.orthoCamera.position.z=5,this.bind();case 12:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=o.apply(e,t);function a(e){m(i,r,n,a,s,"next",e)}function s(e){m(i,r,n,a,s,"throw",e)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&w(t.prototype,r),i&&w(t,i),e}();function b(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gl=new y(document.querySelector("#canvas")),this.init()}var t,r,n,i,o;return t=e,(r=[{key:"init",value:(i=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gl.init();case 2:this.gl.start();case 3:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=i.apply(e,t);function a(e){b(o,r,n,a,s,"next",e)}function s(e){b(o,r,n,a,s,"throw",e)}a(void 0)}))},function(){return o.apply(this,arguments)})}])&&g(t.prototype,r),n&&g(t,n),e}())}});