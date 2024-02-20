class Coin extends MoveableObject {
    height = 50;
    width = 50;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    collectedCoins = 8;

    

    IMAGES = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ]


    constructor(x) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.x = x;
        this.loadImages(this.IMAGES);
        this.animate();
        this.y = Math.random() * 400;
        
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 200);
    }

};


