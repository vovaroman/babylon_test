import engine from "./engine.js";
import Camera from "./camera.js";
import Box from "./box.js";
import Light from "./light.js";
import Ground from "./ground.js";
import addClick from "./events.js"
import { animateBaseBox, incrementBoxCounter } from "./animation.js";
import Shadow from './shadow.js'
import Player from './player.js'
import Controls from './controls.js'

var scene = new BABYLON.Scene(engine)
scene.clearColor = new BABYLON.Color3(0, 0, 0.2);
scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
scene.collisionsEnabled = true;

var sky = new BABYLON.HemisphericLight("sky", new BABYLON.Vector3(0, 1.0, 0), scene);
sky.intensity = 0.5;


const ground = Ground(scene)


var player = Player(scene, shadowGenerator);

var camera = Camera(scene, player);

var controls = Controls(scene, player, camera)

var light = Light(scene);
var shadowGenerator = Shadow(light);

shadowGenerator.getShadowMap().renderList.push(player);


addClick(scene, function(_proto_vector){
    var b = Box(scene, shadowGenerator);
    b.position.x = _proto_vector._x;
    b.position.y = _proto_vector._y < 1 ? 1 : _proto_vector._y;
    b.position.z = _proto_vector._z;
});




var renderLoop = function () {
    scene.render();
    
    for(let obj of scene.meshes){
        if(obj.name.includes("box"))
            animateBaseBox(obj)
    }
    incrementBoxCounter()
    
};


engine.runRenderLoop(renderLoop);

export default scene;