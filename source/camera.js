import {canvas} from './settings.js'

export default (scene, player) => {

    const camera = new BABYLON.FollowCamera(
     "camera", 
     new BABYLON.Vector3(
        player.position.x + 20, 
        player.position.y + 25,
        player.position.z - 35), 
    scene
    );
    
    camera.radius = 25; // how far from the object to follow
    camera.heightOffset = 3; // how high above the object to place the camera
    camera.rotationOffset = 90; // the viewing angle
    camera.cameraAcceleration = 0; // how fast to move
    camera.maxCameraSpeed = 20; // speed limit
    camera.attachControl(canvas, true);
    // //camera.target = player;
    camera.lockedTarget = player;
    scene.activeCamera = camera;
    // const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
    // camera.attachControl(canvas, true);
    return camera;
};