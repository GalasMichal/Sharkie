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
    playOnce = true;
    energy = 100;
    goDown;
    goUp;
    intervalMovementX;
    BossHurtIntervall;
    playAnimationIntervall;


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
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]



    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadAllImages();
        this.x = 600;
        this.loadOffSet();
        this.StartPoint = this.x;
        this.endPointX = this.StartPoint - 500;

        this.animate();
    }

    loadOffSet() {
        return this.offset = {
            top: 150,
            bottom: 60,
            left: 15,
            right: 15,
        };
    }

    loadAllImages() {
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
    }

    animate() {

        this.BossHurtIntervall = setInterval(() => this.damage(), 50);
        this.playAnimationIntervall = setInterval(() => this.bossPlayAnimation(), 20)
        this.intervalMovementX = setInterval(() => this.bossMovement(), 120);
        

    };

    bossPlayAnimation() {
        if (this.attackDistance()) {
            if (this.isHurt())
                this.playAnimation(this.IMAGES_HURT);
            else if (this.attackMovement())
                this.playAnimation(this.IMAGES_ATTACK);
            else if (this.backwardMovement())
                this.playAnimation(this.IMAGES_SWIM);
            else if (this.downwardMovement())
                this.playAnimation(this.IMAGES_SWIM);
            else if (this.moveUp())
                this.playAnimation(this.IMAGES_SWIM);
        }
    }

    bossMovement() {
        if (this.canMoveForwards())
            this.attackMovement();
        else if (this.canMoveBack())
            this.backwardMovement();
        else if (this.canMoveDown())
            this.downwardMovement();
        else if (this.canMoveUp())
            this.moveUp();

    }

    downwardMovement() {
        this.moveDown();
        if (this.bottomPositionReached())
            this.playOnce = true;
    }

    backwardMovement() {
        this.moveBack();
        if (this.startPointReached())
            this.startPoint();
    }

    attackMovement() {
        this.moveForwards();
        if (this.endPointReached())
            this.endPoint();
    }

    canMoveUp() {
        return this.y == this.bottomPosition && !this.topPosition && this.x == this.StartPoint && this.goBack;
    }

    bottomPositionReached() {
        return this.y == this.bottomPosition;
    }

    canMoveDown() {
        return this.x == this.StartPoint && this.goBack && this.y <= this.UpperPosition && this.topPosition;
    }

    startPoint() {
        this.x = this.StartPoint;
        this.playOnce = true;
        this.otherDirection = false;
    }

    startPointReached() {
        return this.x >= this.StartPoint;
    }

    moveBack() {
        this.otherDirection = true;
        this.x += this.speedX;
    }

    canMoveBack() {
        return this.x >= this.endPointX && this.x < this.StartPoint && this.goBack;
    }

    endPoint() {
        this.goBack = true;
        this.x = this.endPointX;
        this.playOnce = false;
    }


    endPointReached() {
        return this.x <= this.endPointX;
    }

    canMoveForwards() {
        return this.x > this.endPointX && !this.goBack && this.playOnce;
    }

    moveForwards() {
        this.otherDirection = false;
        this.x -= this.speedX;
    }


    damage() {
        if (this.isHurt())
            audio.boss_hurt.play()
        else if (this.isDead() && this.firstTimeContact) {
            this.clearMovementIntervalls();
            this.startDeadCounter();
        };
    }


    clearMovementIntervalls() {
        clearInterval(this.goDown);
        clearInterval(this.goUp);
        clearInterval(this.intervalMovementX);
        clearInterval(this.BossHurtIntervall);
    }


    moveUp() {
        this.goUp = setInterval(() => {
            this.y -= this.speedY;
            if (this.y <= this.UpperPosition) {
                this.stopUpMovement()
            };
        }, 500)
    }

    stopUpMovement() {
        this.y = this.UpperPosition;
        this.goBack = false;
        this.topPosition = true;
        clearInterval(this.goUp);
        this.playOnce = true;
    }

    moveDown() {
        this.goDown = setInterval(() => {
            this.y += this.speedY;
            if (this.y >= this.bottomPosition) {
                this.stopDownMovement();
            }
        }, 500);
    }

    stopDownMovement() {
        this.y = this.bottomPosition;
        clearInterval(this.goDown);
        this.goBack = false;
        this.topPosition = false;
    }
}




