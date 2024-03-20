let level1 

function initLevel(){

level1 = new Level(
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),

    ],
    [
        new Endboss(),
    ],

    [
        new Coral(),
        new Coral(),
        new Coral(),
        new Coral(),
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720,),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/4.png', -720,),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0,), // x, y koordinaten
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/4.png', 350),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720,),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/4.png', 1250),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 2), // x, y koordinaten
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/4.png', 2450),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 3),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 4), // x, y koordinaten
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Objects/Seaweed_1.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 5),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 6), // x, y koordinaten
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Objects/Seaweed_1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 6),


    ],

    [
        new Coin(600),
        new Coin(950),
        new Coin(1080),
        new Coin(1200),
        new Coin(2000),
        new Coin(1500),
        new Coin(2500),
        new Coin(2800),
        new Coin(3500),
        new Coin(3900),
        new Coin(4100),
        new Coin(4200),
        new Coin(3700),

    ],

    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),

    ]


);
}