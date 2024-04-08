class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    speedX = 2;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    collectedCoins = 0;
    collectedBottles = 0;
    randomX = 420 + Math.random() * 3800;
    randomY = 100 + Math.random() * 300;
    damageType = '';
    firstTimeContact = true;

    deadCounter = 0;
    deadInterval;

    /**
    * Checks if the character is within attack distance of the world's character.
    * @returns {boolean} True if the character is within attack distance, false otherwise.
    */
    attackDistance() {
        if (world) {
            if (this instanceof Endboss)
                return this.x - world.character.x <= 1000;
            else
                return this.x - world.character.x < 400;
        }
    }

    /**
    * Checks for collisions with other moveable objects.
    * @param {MoveableObject} mo - The moveable object to check collision with.
    * @returns {boolean} True if a collision is detected, false otherwise.
    */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
    * Handles characters being hit by an attack.
    */
    hit() {
        if (this instanceof Endboss) {
            this.energy -= 30;
        } else {
            this.energy -= 5;
        }
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
    * Increments the number of collected coins.
    */
    isCollected() {
        this.collectedCoins += 20;
        audio.COIN_AUDIO.currentTime = 0;
        audio.COIN_AUDIO.play();
    }

    /**
    * Increments the number of collected bottles.
    */
    isCollectedBottle() {
        this.collectedBottles += 25;
    }

    /**
    * Checks if the character is hurt.
    * @returns {boolean} True if the character is hurt, false otherwise.
    */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
    * Checks if the character is dead.
    * @returns {boolean} True if the character is dead, false otherwise.
    */
    isDead() {
        return this.energy == 0;
    }

    /**
    * Initiates the dead counter for the characters.
    */
    startDeadCounter() {
        this.deadInterval = setInterval(() => {
            this.deadCounter++;
            this.playAnimation(this.IMAGES_DEAD);
            if (this.deadCounter == this.IMAGES_DEAD.length - 1) {
                this.firstTimeContact = false;
                if (this instanceof Character)
                    this.characterDeadAnimations();
                else
                    this.bossDeadAnimations();
            }
        }, 250);
    };

    
    /**
    * Performs animations for the boss character when dead.
    */
    bossDeadAnimations() {
        this.loadImage(this.IMAGES_DEAD[4]);
        clearInterval(this.deadInterval);
        this.clearAllIntervals();
        setTimeout(winnerScreen, 1000);
    }

    /**
    * Performs animations for the player character when dead.
     */
    characterDeadAnimations() {
        this.loadImage(this.IMAGES_DEAD[11])
        clearInterval(this.deadInterval);
        this.clearAllIntervals();
        setTimeout(gameOverScreen, 1000);
    }

    /**
    * Clears all intervals.
    */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    /**
    * Moves the character to the left continuously.
    */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    /**
    * Plays animation for the character.
    * @param {Array<string>} images - Array of image paths to be animated.
    */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}