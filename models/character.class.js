class Character extends MoveableObject {
    width = 210;
    speed = 10;
    y = 80;
    x = 0;


    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ]

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',

    ];

    IMAGES_HURT_POISON = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];

    IMAGES_HURT_SHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',

    ];


    IMAGES_ATTACK_NO_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png',
    ];

    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    damageType = '';
    world;


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadAllImages();
        this.animate();
        this.setOffset();
        this.canShoot = true;
    }
    /**
    * Sets the offset for the character.
    * @returns {Object} An object containing top, bottom, left, and right offsets.
    */
    setOffset() {
        return this.offset = {
            top: 90,
            bottom: 40,
            left: 35,
            right: 35,
        };
    }

    /**
     * Loads all required images for the character.
    */
    loadAllImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_HURT_SHOCK);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_NO_BUBBLE);
    }

    /**
    * Animates the character's movements and actions.
    */
    animate() {
        let moveAround = setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.playCharacter(moveAround), 250);
    }

    /**
     * Moves the character based on keyboard input.
     */
    moveCharacter() {
        audio.dive_sound.pause();
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canMoveUp())
            this.moveUp();
        if (this.canMoveDown())
            this.moveDown();
        if (this.canAttack())
            this.startAttack();
        this.world.camera_x = -this.x + 30;
    }

    /**
     * Starts the attack action of the character.
     */
    startAttack() {
        if (this.collectedBottles > 0)
            this.attack();
        else
            this.playAnimation(this.IMAGES_ATTACK_NO_BUBBLE);
    }

    /**
    * Checks if the character can move right.
    * @returns {boolean} True if the character can move right, false otherwise.
    */
    canMoveRight() {
        return this.world && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    /**
    * Checks if the character can move left.
    * @returns {boolean} True if the character can move left, false otherwise.
    */
    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    /**
    * Checks if the character can move up.
    * @returns {boolean} True if the character can move up, false otherwise.
    */
    canMoveUp() {
        return this.world.keyboard.UP && this.y > -90;
    }

    /**
    * Checks if the character can move down.
    * @returns {boolean} True if the character can move down, false otherwise.
    */
    canMoveDown() {
        return this.world.keyboard.DOWN && this.y < 300;
    }

    /**
    * Checks if the character can attack.
    * @returns {boolean} True if the character can attack, false otherwise.
    */
    canAttack() {
        return this.world.keyboard.SPACE && this.canShoot;
    }

    /**
    * Performs the attack action.
    */
    attack() {
        this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
        this.world.checkThrowObjects();
        this.collectedBottles -= 5;
        this.canShoot = false;
        setTimeout(() => {
            this.canShoot = true;
        }, 1000);
        this.world.statusBarBottle.setPercentage(this.collectedBottles);
    }

    /**
     * Moves the character downwards.
    */
    moveDown() {
        this.y += this.speed;
        audio.dive_sound.play();
    }
    
    /**
    * Moves the character rightwards.
    */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        audio.dive_sound.play();
    }

    /**
    * Moves the character leftwards.
    */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        audio.dive_sound.play();
    }

    /**
    * Moves the character upwards.
    */
    moveUp() {
        this.y -= this.speed;
        audio.dive_sound.play();
    }

    /**
    * Plays hurt animations based on the type of damage.
    */
    hurtAnimations() {
        if (this.damageType == 'POISON') {
            audio.hurt.play();
            this.playAnimation(this.IMAGES_HURT_POISON);
        }
        else if (this.damageType == 'SHOCK') {
            audio.schock.play();
            this.playAnimation(this.IMAGES_HURT_SHOCK);
        } else
            this.playAnimation(this.IMAGES_HURT_POISON);
    }

    /**
    * Checks if the character is moving in any direction.
    * @returns {boolean} True if the character is moving, false otherwise.
    */
    moveDirection() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
    }

    /**
    * Plays character animations based on actions and movements.
    * @param {number} moveAround - The interval for moving the character.
    */
    playCharacter(moveAround) {
        if (this.isDead() && this.firstTimeContact) {
            clearInterval(moveAround);
            this.startDeadCounter();
        }
        else if (this.isHurt())
            this.hurtAnimations();
        else if (this.moveDirection())
            this.playAnimation(this.IMAGES_SWIM);
        else
            this.playAnimation(this.IMAGES_IDLE);
    }
}