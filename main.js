// global variables
// window size
var width;
var height;
// scene and camera
var scene ;
var camera;
var controls;
// rendu
var renderer;



// objects
var cylinder;
var cube;

// fix resizing
window.addEventListener('resize', function(){
    renderer.setSize( width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

// setup ( call once at the begining)
var setup = function( ){
    width = window.innerWidth;
    height = window.innerHeight;

    
    // configuration de la scene
    scene = new THREE.Scene( );
    camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    // configuration du rendu
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    // controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    // create the shape
    // cylinder
    var g_cylinder = new THREE.CylinderGeometry( 1, 1, 5, 16 );
    // create a material, color or image texture
    var m_cylinder = new THREE.MeshBasicMaterial( 
        { color: 0xffff00, wireframe: false } // yellow
    );
    // cube
    var g_cube = new THREE.CubeGeometry( 1, 1, 1 );
    var m_cube = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false});
    // bind the material to the mesh
    cylinder = new THREE.Mesh( g_cylinder, m_cylinder );
    cube = new THREE.Mesh(g_cube, m_cube);

    // adding it to the scene  
    scene.add( cylinder, cube ); 

    // set the position of the camera
    camera.position.z = 30;
    // modify object
    cylinder.rotation.z = Math.PI/2;
    cube.position.x = 20;


};

// game logic 
var update = function( ){
    // updating the window's size
    width = window.innerWidth;
    height = window.innerHeight;

    // animations

};

// render ( aka drawing on the screen)
var render = function( ){

    renderer.render( scene, camera );

};

// loop for calculate, update, render and repeat again and again
var GameLoop = function( ){

    requestAnimationFrame( GameLoop );

    update();
    render();

};

setup();
GameLoop();