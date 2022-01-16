
var boxMaterial = (scene) => {
    
    var material = new BABYLON.StandardMaterial("material", scene);
    material.emissiveColor = new BABYLON.Color3.Random();
    // material.disableLighting = true;

    return material;
}

var groundMaterial = (scene) => {
    var material = new BABYLON.StandardMaterial("material", scene);
    material.emissiveColor = new BABYLON.Color3(1.2, 0, 0.5);
    material.specularColor = new BABYLON.Color3(1.2, 0, 0.5);
    return material;
}


export { boxMaterial, groundMaterial };
