
// global letiables
// window size

let container = document.getElementById('container');
// get the size
let width = container.offsetWidth;
let height = container.offsetHeight;


// scene and camera
let scene ;
let camera;
let controls;

// rendu
let renderer;



// objects
let cylinder;   
let cube;

// fix resizing
window.addEventListener('resize', function(){
    renderer.setSize( width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

// setup ( call once at the begining)
let setup = function( ){

    // configuration de la scene
    scene = new THREE.Scene( );
    camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    // configuration du rendu
    renderer.setSize( width, height );

    container.appendChild(renderer.domElement);
    //
    //document.body.appendChild( renderer.domElement );
    //
    // controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    // creating the shapes
    // cylinder
    let g_cylinder = new THREE.CylinderGeometry( 1, 1, 5, 16 );
    // create a material, color or image texture
    let m_cylinder = new THREE.MeshBasicMaterial( 
        { color: 0xffff00, wireframe: false } // yellow
    );
    // cube
    let g_cube = new THREE.CubeGeometry( 1, 1, 1 );
    let m_cube = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
    // bind the material to the mesh
    cylinder = new THREE.Mesh( g_cylinder, m_cylinder );
    cube = new THREE.Mesh(g_cube, m_cube);

    // adding it to the scene  
    scene.add( cylinder, cube ); 
    myObjects = createObjects();

    // set the position, rotation and scale of the elements
    camera.position.z = 30;
    cylinder.rotation.z = Math.PI/2;
    cube.position.x = 20;
    myObjects[2].position.z += 20;
    myObjects[3].position.z += 20;


};

// game logic 
let update = function( ){
    // updating the window's size
    width = container.offsetWidth;
    height = container.offsetWidth;

    // animating

};

// render ( aka drawing on the screen)
let render = function( ){

    renderer.render( scene, camera );

};

// loop for calculate, update, render and repeat again and again
let GameLoop = function( ){

    requestAnimationFrame( GameLoop );

    update();
    render();

};

setup();
GameLoop();