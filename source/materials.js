
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

var playerMaterial = (scene) => {
    var material = new BABYLON.StandardMaterial("pmat", scene);
    material.emissiveColor = BABYLON.Color3.FromHexString('#ff9900');
    material.specularPower = 64;
    return material;
}


export { boxMaterial, groundMaterial, playerMaterial };
