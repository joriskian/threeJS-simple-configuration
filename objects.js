// here we create objects
function createObjects(){
    let objects = [];
    for (let i = 0; i < 10; i++) {
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        let cube = new THREE.Mesh( geometry, material );
        cube.position.x = i * 10 ;
        objects.push(cube);

        scene.add( cube );
    };
    return objects;
};