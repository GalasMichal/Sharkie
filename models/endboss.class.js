class Endboss extends MoveableObject {

    height = 350;
    width = 300;
    y = -120;
    UpperPosition = this.y;
    bottomPosition = this.y + 200;
    goBack = false;
    endPointX;
    StartPoint;
    speedX = 8;
    speedY = 8;
    topPosition = true;

    IMAGES_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ]



    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 600 //4600 ;
        this.StartPoint = this.x;
        this.endPointX = this.StartPoint - 500;
        this.animate();
    }

    animate() {
        let intervalMovementX = setInterval(() => {
            if (this.x > this.endPointX && !this.goBack) {
                this.otherDirection = false;
                this.playAnimation(this.IMAGES_ATTACK);
                this.x -= this.speedX; // Bewegung in Richtung Endpunkt
                if (this.x <= this.endPointX) {
                    this.goBack = true
                    this.x = this.endPointX;
                }
            }
            else if (this.x >= this.endPointX && this.x < this.StartPoint && this.goBack) {
                // Rückkehr zur Ausgangsposition
                this.otherDirection = true;
                this.playAnimation(this.IMAGES_SWIM);
                this.x += this.speedX;
                if (this.x >= this.StartPoint) {
                    this.x = this.StartPoint;
                    this.otherDirection = false;
                    // clearInterval(intervalMovementX);
                }
            }
            else if (this.x == this.StartPoint && this.goBack && this.y <= this.UpperPosition && this.topPosition) {
                this.moveDown();
            }
            else if (this.y == this.bottomPosition && !this.topPosition && this.x == this.StartPoint && this.goBack) {
                this.moveUp();
            }
        }, 80);
    };

    
    moveUp() {
        let goDown = setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
            this.y -= this.speedY;
            if (this.y <= this.UpperPosition) {
                this.y = this.UpperPosition;
                this.goBack = false;
                this.topPosition = true;
                clearInterval(goDown);
            };
        }, 500)
    }

    moveDown() {
        if (this.y < this.bottomPosition) {
            let goDown = setInterval(() => {
                this.playAnimation(this.IMAGES_SWIM);
                this.y += this.speedY;
                if (this.y >= this.bottomPosition) {
                    this.y = this.bottomPosition;
                    clearInterval(goDown);
                    this.goBack = false;
                    this.topPosition = false;
                    // this.animate();
                }
            }, 500);
        }

    }

}




