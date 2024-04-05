let canvas;
let world;
let keyboard = new Keyboard();
let audio = [];
let isMuted = false;
let levelLoaded = false;

playableAudio();

/**
 * Initializes the game.
 */
function init() {
    const startScreen = document.getElementById('start_screen');
    if (startScreen)
        startScreen.classList.add('d-none');
    startloader();
    initLevel();
    if (levelLoaded) {
        audio.background_audio.play();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
    }
    document.getElementById('buttons').style.display = 'flex';
}

/**
 * Starts the loader animation.
 */
function startloader() {
    let loader = document.getElementById('loader');
    loader.classList.remove('d-none');
    setTimeout(() => {
        loader.classList.add('d-none');
    }, 2000);
}

/**
 * Initializes playable audio objects.
 */
function playableAudio() {
    sounds.forEach(soundObj => {
        audio[soundObj.name] = new Audio(soundObj.file);
    });
}

/**
 * Initializes the main menu.
 */
async function mainMenu() {
    let main = document.getElementById('game_content');
    main.innerHTML = '';
    main.innerHTML += renderMainMenu(), `
   `;
    document.getElementById('info').addEventListener('click', info);
    document.getElementById('sound').addEventListener('click', toggleMuteAllAudio);
}

/**
 * Renders the main menu HTML.
 * @returns {string} HTML code for the main menu.
 */
function renderMainMenu() {
    return `
   <div id="loader" class="d-none">
   <p>Loading level</p>
   <div class="loader"></div>
   </div>
   <img id="sound" src="./img/7.Backgrounds/lautsprecher (1).png" alt="" srcset="">
   <div id="start_screen" class="start-game">
            <h1>Welcome to the Sharkie world</h1>
            <img onclick="init()" class="hvr-wobble-vertical" src="img/6.Botones/Start/2.png" alt="" srcset="">
            <img id="info" src="./img/7.Backgrounds/information.png" alt="" srcset="">
            <span id="htP"><<< How to Play</span>
        </div>
        <canvas id="canvas" width="720" height="480"></canvas>
   `
};

/**
 * Displays the game over screen.
 */
function gameOverScreen() {
    document.getElementById('buttons').style.display = 'none';
    audio.background_audio.pause();
    audio.game_over.play();
    let gameEnd = document.getElementById('game_content');
    gameEnd.innerHTML = ` 
        <div id="gameover">
            <img id="over_img" class="heartbeat" src="img/6.Botones/Tittles/Game Over/Recurso 11.png" alt="" srcset="">
            <img id="try_again" class="roll-in-left" src="img/6.Botones/Try again/Recurso 16.png" alt="" srcset="">
        </div>`;
    document.getElementById('try_again').addEventListener('click', mainMenu);
}

/**
 * Displays the winner screen.
 */
function winnerScreen() {
    document.getElementById('buttons').style.display = 'none';
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

/**
 * Toggles mute for all audio.
 */
function toggleMuteAllAudio() {
    isMuted = !isMuted;
    for (let key in audio) {
        if (audio.hasOwnProperty(key))
            audio[key].muted = isMuted;
    }
    let imageElement = document.getElementById('sound');
    if (isMuted) {
        imageElement.src = 'img/7.Backgrounds/lautsprecher-mute.png';
    } else {
        imageElement.src = 'img/7.Backgrounds/lautsprecher (1).png';
    }
}

/**
 * Displays game information.
 */
function info() {
    let info = document.getElementById('game_content');
    info.innerHTML = renderInfo();
    document.getElementById('back').addEventListener('click', mainMenu);
}

/**
 * Renders the game information HTML.
 * @returns {string} HTML code for the game information.
 */
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

/**
 * Handles keydown events.
 * @param {Event} e - The keydown event object.
 */
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

/**
 * Handles keyup events.
 * @param {Event} e - The keyup event object.
 */
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

/**
 * Handles touchstart events.
 * @param {Event} e - The touchstart event object.
 */
/**
 * Handles touchend events.
 * @param {Event} e - The touchend event object.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    document.getElementById('btnDown').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });

    document.getElementById('btnDown').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });

    document.getElementById('btnAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
});