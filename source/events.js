


export default function addOnClick(scene, callback) {    
    scene.onPointerDown = function (event, pickResult){
        switch(event.button)
        {
            //left click
            case 0:break;
            case 1:break;
            case 2: callback(pickResult.pickedPoint); break;;
        }
    }
}


export {addOnClick}