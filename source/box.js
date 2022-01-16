
import scene from './scene.js'
import {boxMaterial} from './materials.js'

var counter = 0;

export default (scene) => {
    counter++;
    var box = BABYLON.Mesh.CreateBox("box" + counter, 2, scene);
    console.log(scene)
    box.material = boxMaterial(scene);
    box.rotation.x = 0;
    box.rotation.y = 0;
    return box;
}