export default (light) => {
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
    shadowGenerator.setDarkness(0.2);
    // shadowGenerator.useBlurVarianceShadowMap = true;
    // shadowGenerator.blurBoxOffset = 1.0;
    // shadowGenerator.blurScale = 20.0;
    return shadowGenerator;
};