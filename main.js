// global variables
// window size
var width;
var height;
// scene and camera
var scene ;
var camera;

// rendu
var renderer;

// object
var cylinder;

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


    // cylinder
    // create the shape
    var geometry = new THREE.CylinderGeometry( 1, 1, 5, 16 );
    // create a material, color or image texture
    var material = new THREE.MeshBasicMaterial( 
        { color: 0xffff00, wireframe: false } // yellow

    );
    // bind the material to the mesh
    cylinder = new THREE.Mesh( geometry, material );

    // adding it to the scene  
    scene.add( cylinder ); 

    // set the position of the camera
    camera.position.z = 30;


};

// game logic 
var update = function( ){
    // updating the window's size
    width = window.innerWidth;
    height = window.innerHeight;

    // animations
    //cylinder.position.z = -20;
    cylinder.rotation.x += 0.01;
    //cylinder.rotation.y += 0.02;
    cylinder.rotation.z += 0.01;
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