class JellyFish extends MoveableObject {
    height = 80;
    width = 80;
    start_attack = false;
    maxY = this.y + 100;
    minY = this.y - 100;
    speed = 0.5;
    moveInterval;
    damageType = 'SHOCK';

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    IMAGES_DANGER = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadAllImages();
        this.x = this.randomX;
        this.y = this.randomY;
        this.speed = 6;
        this.direction = 1;
        this.animate();
    };

    loadAllImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_DANGER);
        this.loadImages(this.IMAGES_DEAD);
    }

    animate() {
        this.moveInterval = setInterval(() => this.playEnemy(), 200);
    }

    playEnemy() {
        if (this.attackDistance())
            this.playAnimation(this.IMAGES_DANGER);
        else
            this.playAnimation(this.IMAGES_SWIM);
        if (this.y >= this.maxY) {
            this.direction = -1;
            setTimeout(() => this.moveLeft(), 200);
        } else if (this.y <= this.minY) {
            this.direction = 1;
        }
        this.y += this.speed * this.direction;
    }

    changeAnimation() {
        clearInterval(this.moveInterval);
        this.speed = 0
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
            this.deadAnimation();
        }, 200)
    }

    moveLeft() {
        setInterval(() => this.x -= this.speed, 800);
    }

    deadAnimation() {
        setInterval(() => {
            this.x += 5;
            this.y -= 5;
        }, 1000 / 60)
    }
}




