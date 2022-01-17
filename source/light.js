

export default (scene) => {
    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(10, 50, 40), scene);
    light.intensity = 0.2
    light.diffuse = BABYLON.Color3.FromHexString('#ff9944');
    return light;
    // var torch = new BABYLON.PointLight("light1",BABYLON.Vector3.Zero(), scene);
    // torch.intensity = 0.7;
    // torch.diffuse = BABYLON.Color3.FromHexString('#ff9944');

}