class Fish extends MoveableObject {
    height = 80;
    width = 80;
    start_attack = false;
    moveInterval;
    damageType = 'POISON';


    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',

    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ]

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadAllImages();
        this.x = this.randomX;
        this.y = this.randomY;
        this.speed = 0.15 + Math.random() * 0.25; 
        this.animate();
        this.setOffSet();
    }

    setOffSet() {
        return this.offset = {
            top: 10,
            bottom: 20,
            left: 5,
            right: 5,
        }
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_DEAD);
    }


    animate() {
        this.moveLeft();
        this.moveInterval = setInterval(() => this.attackMovement(), 200);
    }

    attackMovement() {
        if (this.attackDistance())
            this.dashAttack();
        else {
            this.playAnimation(this.IMAGES_SWIM);
            this.speed = 0.15 + Math.random() * 0.25;
        }
    }

    dashAttack() {
        this.playAnimation(this.IMAGES_TRANSITION);
        if (!this.start_attack) {
            this.speed = 0;
            setTimeout(() => {
                this.speed = 5;
                this.start_attack = true;
            }, 1000);
        } else {
            this.speed = 5;
        }
    }

    changeAnimation() {
        clearInterval(this.moveInterval);
        this.speed = 0
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
            this.deadAnimation();
        }, 200)
    }

    deadAnimation() {
        setInterval(() => {
            this.y -= 5;
        }, 1000 / 60)

    }
}
