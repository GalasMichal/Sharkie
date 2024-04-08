class Endboss extends MoveableObject {

    height = 350;
    width = 300;
    y = -120;
    UpperPosition = this.y;
    bottomPosition = this.y + 200;
    goBack = false;
    StartPoint = 4600;
    endPointX = this.StartPoint - 500;
    speedX = 10;
    speedY = 10;
    topPosition = true;
    playOnce = true;
    energy = 100;
    goDown;
    goUp;
    intervalMovementX;
    BossHurtIntervall;
    playAnimationIntervall;
    x;


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
        this.x = 4600;
        this.loadOffSet();
        this.animate();
    }

    /**
    * Loads the offset for the boss character.
    * @returns {Object} An object containing top, bottom, left, and right offsets.
    */
    loadOffSet() {
        return this.offset = {
            top: 150,
            bottom: 60,
            left: 15,
            right: 15,
        };
    }

    /**
    * Loads all required images for the boss character.
    */
    loadAllImages() {
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
    }

    /**
    * Animates the boss character.
    */
    animate() {
        this.BossHurtIntervall = setInterval(() => this.damage(), 50);
        this.playAnimationIntervall = setInterval(() => this.bossPlayAnimation(), 120)
        this.intervalMovementX = setInterval(() => this.bossMovement(), 120);
    };

    /**
    * Plays animations for the boss character.
    */
    bossPlayAnimation() {
        if (this.attackDistance()) {
            if (this.isHurt())
                this.playAnimation(this.IMAGES_HURT);
            else if (this.canMoveForwards())
                this.playAnimation(this.IMAGES_ATTACK);
            else if (this.canMoveBack() || this.canMoveDown() || this.canMoveUp())
                this.playAnimation(this.IMAGES_SWIM);
        }
    }

    /**
    * Moves the boss character.
    */
    bossMovement() {
        if (this.attackDistance()) {
            if (this.canMoveForwards())
                this.attackMovement();
            else if (this.canMoveBack())
                this.backwardMovement();
            else if (this.canMoveDown())
                this.downwardMovement();
            else if (this.canMoveUp())
                this.moveUp();
        }
    }

    /**
    * Moves the boss character downwards.
    */
    downwardMovement() {
        this.moveDown();
        if (this.bottomPositionReached())
            this.playOnce = true;
    }

    /**
    * Moves the boss character backwards.
    */
    backwardMovement() {
        this.moveBack();
        if (this.startPointReached())
            this.startPoint();
    }

    /**
    * Moves the boss character forwards.
    */
    attackMovement() {
        this.moveForwards();
        if (this.endPointReached())
            this.endPoint();
    }

    /**
    * Checks if the boss character can move upwards.
    * @returns {boolean} True if the boss character can move upwards, false otherwise.
    */
    canMoveUp() {
        return this.y == this.bottomPosition && !this.topPosition && this.x == this.StartPoint && !this.goBack && !this.playOnce;
    }

    /**
    * Checks if the boss character has reached the bottom position.
    * @returns {boolean} True if the boss character has reached the bottom position, false otherwise.
    */
    bottomPositionReached() {
        return this.y == this.bottomPosition;
    }

    /**
    * Checks if the boss character can move downwards.
    * @returns {boolean} True if the boss character can move downwards, false otherwise.
    */
    canMoveDown() {
        return this.x == this.StartPoint && !this.goBack && this.y <= this.UpperPosition && this.topPosition && !this.playOnce;
    }

    /**
    * Resets the boss character to the start point.
    */
    startPoint() {
        this.otherDirection = false;
        this.goBack = false;
        this.x = this.StartPoint;
        this.playOnce = false;
    }

    /**
    * Checks if the boss character has reached the start point.
    * @returns {boolean} True if the boss character has reached the start point, false otherwise.
    */
    startPointReached() {
        return this.x >= this.StartPoint;
    }

    /**
    * Moves the boss character backwards.
    */
    moveBack() {
        this.otherDirection = true;
        this.x += this.speedX;
    }

    /**
    * Checks if the boss character can move backwards.
    * @returns {boolean} True if the boss character can move backwards, false otherwise.
    */
    canMoveBack() {
        return this.x >= this.endPointX && this.x < this.StartPoint && this.goBack && this.playOnce;
    }

    /**
    * Resets the boss character to the end point.
    */
    endPoint() {
        this.x = this.endPointX;
        this.goBack = true;
        this.playOnce = true;
    }

    /**
    * Checks if the boss character has reached the end point.
    * @returns {boolean} True if the boss character has reached the end point, false otherwise.
    */
    endPointReached() {
        return this.x <= this.endPointX;
    }

    /**
    * Checks if the boss character can move forwards.
    * @returns {boolean} True if the boss character can move forwards, false otherwise.
    */
    canMoveForwards() {
        return this.x >= this.endPointX && !this.goBack && this.playOnce;
    }

    /**
    * Moves the boss character forwards.
    */
    moveForwards() {
        this.otherDirection = false;
        this.x -= this.speedX;
    }

    /**
    * Handles the damage logic for the boss character.
    */
    damage() {
        if (this.isHurt())
            audio.boss_hurt.play()
        else if (this.isDead() && this.firstTimeContact) {
            this.clearMovementIntervalls();
            this.startDeadCounter();
        };
    }

    /**
    * Clears movement intervals for the boss character.
    */
    clearMovementIntervalls() {
        clearInterval(this.goDown);
        clearInterval(this.goUp);
        clearInterval(this.intervalMovementX);
        clearInterval(this.BossHurtIntervall);
    }

    /**
    * Moves the boss character upwards.
    */
    moveUp() {
        this.goUp = setInterval(() => {
            this.y -= this.speedY;
            if (this.y <= this.UpperPosition)
                this.stopUpMovement()
        }, 120)
    }

    /**
    * Stops the upward movement of the boss character.
    */
    stopUpMovement() {
        this.y = this.UpperPosition;
        this.topPosition = true;
        this.playOnce = true;
        clearInterval(this.goUp);
    }

    /**
    * Moves the boss character downwards.
    */
    moveDown() {
        this.goDown = setInterval(() => {
            this.y += this.speedY;
            if (this.y >= this.bottomPosition)
                this.stopDownMovement();
        }, 500);
    }

    /**
    * Stops the downward movement of the boss character.
    */
    stopDownMovement() {
        this.y = this.bottomPosition;
        this.playOnce = true;
        this.topPosition = false;
        clearInterval(this.goDown);
    }
}
