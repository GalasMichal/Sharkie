class Level {
    enemies;
    boss;
    corals;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 4300;


    constructor(enemies, boss, corals, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.boss = boss;
        this.corals = corals;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}