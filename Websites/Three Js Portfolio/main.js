
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();
// // import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';


// class Canvas{
//     constructor(){
//         this.container = document.querySelector('main')
//         this.scene = new THREE.Scene()
//         this.perspective = 1000
//         this.sizes = new THREE.Vector2( 0, 0 )
//         this.offset = new THREE.Vector2( 0, 0 )
//         this.setupCamera()
//         this.createMesh()
//         this.render() 
//     }

//     get viewport(){
//         let width = window.innerWidth
//         let height = window.innerHeight

//         let aspectRadio = width / height

//         return {
//             width,
//             height,
//             aspectRadio
//         }
//     }

//     setupCamera(){

//         let fov = ( 100 * ( 2 * Math.atan(this.viewport.height / 2 / this.perspective ) )) / Math.PI

//         this.camera = new THREE.PerspectiveCamera( fov, this.viewport.aspectRadio, 0, 1, 1000 )

//         this.camera.position.set( 0, 0, this.perspective )

//         this.renderer = new THREE.WebGL1Renderer({antialias: true, alpha: treu})
//         this.renderer.setSize( this.viewport.width, this.viewport.height )
//         this.renderer.setPixelRatio( window.setPixelRatio )
//         this.container.appendChild( this.renderer.domElement )
//     }

//     createMesh(){
//         this.geometry = new THREE.PlaneGeometry( 1, 1, 20, 20 )
//         this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

//         this.mesh = new THREE.Mesh( this.geometry, this.material )
//         this.sizes.set( 650, 850 )
//         this.mesh.scale.set( this.sizes.x, this.sizes.y )
//         this.mesh.position.set( this.offset.x, this.offset.y )

//         this.scene.add( this.mesh )
//     }

//     render(){
//         this.renderer.render( this.scene, this.camera )
//     }
// }

// new Canvas()