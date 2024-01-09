let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);  // welt wird in init funktion initiert (ubergeben), keyboard auch
    
    

    
    console.log('My character is', world.character);
}


document.addEventListener('keydown', (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38 ) {
        keyboard.UP = true;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    } 

    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    console.log(e);
});

document.addEventListener('keyup', (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38 ) {
        keyboard.UP = false;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    } 

    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    console.log(e);
});