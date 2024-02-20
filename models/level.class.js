class Level {
    enemies;
    corals;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 4300;
    background_audio = new Audio('audio/backgroundMusik.mp3')

    constructor(enemies, corals, backgroundObjects, coins, bottles){
        this.enemies = enemies;
        this.corals = corals;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.background_audio.play();
    }
}