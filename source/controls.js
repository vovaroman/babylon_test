
export default (scene, player, camera) => {
    // Keypress events
    window.keyisdown = {};
    window.addEventListener('keydown', function (event) {
        window.keyisdown[event.keyCode] = true;
    });

    window.addEventListener('keyup', function (event) {
        window.keyisdown[event.keyCode] = false;
    });

    window.tempv = new BABYLON.Vector3.Zero();

    scene.registerBeforeRender(function () {
        // Player speed
        var v = 0.5;
        player.nextspeed.x = 0.0;
        player.nextspeed.z = 0.00001;
        if (window.keyisdown[37]) {
            player.nextspeed.x = -v;
            player.nextspeed.z = -v;
        }
        if (window.keyisdown[39]) {
            player.nextspeed.x = v;
            player.nextspeed.z = v;
        }
        if (window.keyisdown[38]) {
            player.nextspeed.x = -v;
            player.nextspeed.z = v;
        }
        if (window.keyisdown[40]) {
            player.nextspeed.x = v;
            player.nextspeed.z = -v;
        }

        player.speed = BABYLON.Vector3.Lerp(player.speed, player.nextspeed, 0.1);

        // Turn to direction
        if (player.speed.length() > 0.01) {
            tempv.copyFrom(player.speed);
            var dot = BABYLON.Vector3.Dot(tempv.normalize(), BABYLON.Axis.Z );
            var al = Math.acos(dot);
            if (tempv.x<0.0) { al = Math.PI * 2.0 - al;}
            if (window.keyisdown[9]) {
                console.log("dot,al:",dot,al);
            }
            if (al > player.rotation.y) {
                var t = Math.PI / 30;
            } else {
                var t = -Math.PI / 30;
            }
            var ad = Math.abs(player.rotation.y - al);
            if (ad > Math.PI) {
                t = -t;
            }
            if (ad < Math.PI / 15) {
                t = 0;
            }
            player.rotation.y += t;
            if (player.rotation.y > Math.PI * 2) { player.rotation.y -= Math.PI * 2; }
            if (player.rotation.y < 0 ) { player.rotation.y += Math.PI * 2; }
        }

        player.moveWithCollisions(player.speed);

        if (player.position.x > 60.0) { player.position.x = 60.0; }
        if (player.position.x < -60.0) { player.position.x = -60.0; }
        if (player.position.z > 60.0) { player.position.z = 60.0; }
        if (player.position.z < -60.0) { player.position.z = -60.0; }                

        camera.position.x = player.position.x + 25;
        camera.position.y = player.position.y + 25;
        camera.position.z = player.position.z - 25;
    });
}