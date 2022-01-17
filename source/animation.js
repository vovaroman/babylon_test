
var boxCounter = 0;

var incrementBoxCounter = () => boxCounter+=0.01;


var animateBaseBox = (box) => {
    // box.rotation.y = boxCounter;
    // box.position.y = Math.sin(boxCounter * 3)
};


export { animateBaseBox, incrementBoxCounter }