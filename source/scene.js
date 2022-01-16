import engine from "./engine.js";
import Camera from "./camera.js";
import Box from "./box.js";
import Light from "./light.js";
import Ground from "./ground.js";
import addClick from "./events.js"
import { animateBaseBox, incrementBoxCounter } from "./animation.js";

var scene = new BABYLON.Scene(engine)
scene.clearColor = new BABYLON.Color3(0, 0, 0.2);
scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
scene.collisionsEnabled = true;

var sky = new BABYLON.HemisphericLight("sky", new BABYLON.Vector3(0, 1.0, 0), scene);
sky.intensity = 0.5;

var torch = new BABYLON.PointLight("light1",BABYLON.Vector3.Zero(), scene);
torch.intensity = 0.7;
torch.diffuse = BABYLON.Color3.FromHexString('#ff9944');


var shadowGenerator = new BABYLON.ShadowGenerator(1024, torch);
shadowGenerator.setDarkness(0.2);
shadowGenerator.useBlurVarianceShadowMap = true;
shadowGenerator.blurBoxOffset = 1.0;
shadowGenerator.blurScale = 20.0;

const ground = Ground(scene)

var camera = Camera(scene);

// var light = Light(scene);

addClick(scene, function(_proto_vector){
    var b = Box(scene);
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