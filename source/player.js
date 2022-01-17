import { playerMaterial } from "./materials.js";

export default (scene) => {
    var player = BABYLON.Mesh.CreateSphere("playerbody", 8, 1.8, scene); 
    player.position.y = 1;
    player.checkCollisions = true;
    player.applyGravity = true;
    player.material = playerMaterial();
    player.speed = new BABYLON.Vector3(0, 0, 0.08);
    player.nextspeed = new BABYLON.Vector3.Zero();
    player.nexttorch = new BABYLON.Vector3.Zero();
    return player;
}