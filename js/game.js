let canvas;
let world;
let keyboard = new Keyboard();
let audio = [];
let isMuted = false;

playableAudio();



function init() {
    initLevel();
    const startScreen = document.getElementById('start_screen');
    if (startScreen) {
        startScreen.classList.add('d-none');
    }
    audio.background_audio.play();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

function playableAudio(){
    sounds.forEach(soundObj => {
        audio[soundObj.name] = new Audio(soundObj.file);
    });
}


async function mainMenu() {
    
    let main = document.getElementById('game_content');
    main.innerHTML = '';
    main.innerHTML += renderMainMenu(), `
   `;
    document.getElementById('info').addEventListener('click', info);
    document.getElementById('sound').addEventListener('click',  toggleMuteAllAudio);
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
    audio.background_audio.pause();
    audio.game_over.play();
    let gameEnd = document.getElementById('game_content');

    gameEnd.innerHTML = `  <div id="gameover">
         <img id="over_img" class="heartbeat" src="img/6.Botones/Tittles/Game Over/Recurso 11.png" alt="" srcset="">
        <img id="try_again" class="roll-in-left" src="img/6.Botones/Try again/Recurso 16.png" alt="" srcset="">
        </div>`;
    document.getElementById('try_again').addEventListener('click', mainMenu);

}

function winnerScreen() {
    audio.background_audio.pause();
    audio.victory.play();
    let win = document.getElementById('game_content');
    win.innerHTML = `
        <div id="winning_screen">
          <img id="winner" class="winner roll-in-right" src="img/6.Botones/Try again/Recurso 16.png" alt="" srcset="">
        </div>
        `
    document.getElementById('winner').addEventListener('click', mainMenu);
}

function toggleMuteAllAudio() {
    isMuted = !isMuted; 
    for (let key in audio) {
        if (audio.hasOwnProperty(key)) {
            audio[key].muted = isMuted;
        }
    }
    let imageElement = document.getElementById('sound');
    if (isMuted) {
        imageElement.src = 'img/7.Backgrounds/lautsprecher-mute.png';
    } else {
        imageElement.src = 'img/7.Backgrounds/lautsprecher (1).png';
    }
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

});