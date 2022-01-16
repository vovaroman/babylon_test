
import scene from './scene.js'
import {groundMaterial} from './materials.js'


export default (scene) => {
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:80, height:80});
    // ground.material = groundMaterial(scene);
    // ground.position.y = - 1;

    var ground = BABYLON.Mesh.CreatePlane("g", 120, scene);
    ground.position = new BABYLON.Vector3(0, 0, 0);
    ground.rotation.x = Math.PI / 2;
    ground.receiveShadows = true;
    ground.checkCollisions = true;
    return ground;
}