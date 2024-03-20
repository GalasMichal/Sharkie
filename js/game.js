let canvas;
let world;
let keyboard = new Keyboard();
let background_audio = new Audio('audio/backgroundMusik.mp3');
let audio = [];




function init() {
    initLevel();
    const startScreen = document.getElementById('start_screen');
    if (startScreen) {
        startScreen.classList.add('d-none');
    }
    background_audio.play();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);  // welt wird in init funktion initiert (ubergeben), keyboard auch
    //console.log('My character is', world.character);
}


function mainMenu() {
    let main = document.getElementById('game_content');
    main.innerHTML = '';
    main.innerHTML += renderMainMenu(), `
   `;
    document.getElementById('info').addEventListener('click', info);
    document.getElementById('sound').addEventListener('click', toggleMuteAllHTMLAudio);
}

function renderMainMenu() {
    return `
   <img id="sound" src="./img/7.Backgrounds/lautsprecher (1).png" alt="" srcset="">
   <div id="start_screen" class="start-game">
            <h1>Welcome to the Sharkie world</h1>
            <img onclick="init()" class="hvr-wobble-vertical" src="img/6.Botones/Start/2.png" alt="" srcset="">
            <img id="info" src="./img/7.Backgrounds/information.png" alt="" srcset="">
        </div>
        <canvas id="canvas" width="720" height="480"></canvas>
   `
};

function gameOverScreen() {
    
        let gameEnd = document.getElementById('game_content');
        
        gameEnd.innerHTML = `  <div id="gameover">
         <img id="over_img" class="heartbeat" src="img/6.Botones/Tittles/Game Over/Recurso 11.png" alt="" srcset="">
        <img id="try_again" class="roll-in-left" src="img/6.Botones/Try again/Recurso 16.png" alt="" srcset="">
        </div>`;
        document.getElementById('try_again').addEventListener('click', mainMenu);
        
    }





function toggleMuteAllHTMLAudio() {

    background_audio.pause();
    console.log(background_audio);
    world.character.COIN_AUDIO.muted = true;
    world.character.dive_sound.muted = true;

}

function info() {
    let info = document.getElementById('game_content');
    info.innerHTML = renderInfo();
    document.getElementById('back').addEventListener('click', mainMenu);
}

function renderInfo() {
    return `
    <div id="how_to_play">
            <span class="descryption">
                "How to play:
                Move Sharkie using the arrow keys. To perform an attack, you need to collect green bottles. Press the space bar to attack."</span>
            <img src="./img/6.Botones/Instructions 2.png" alt="" srcset="">
            <img id="back" src="./img/7.Backgrounds/back.png" alt="" srcset="">
        </div>
    `
}






document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    // console.log(e);
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    // console.log(e);
});