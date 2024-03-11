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
    COIN_AUDIO = new Audio('audio/coin.mp3');




    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    attackDistance() {
        if (world) {
            return this.x - world.character.x < 400;
        }
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable object should always fall
            return true;
        } else {
            return this.y < 180;
        }
    }

    moveObject(ctx) {
        ctx.beginPath();
    }




    /**
     * check colisions with objects
     * @param {*moveableobject} mo 
     * @returns true 
     */

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isCollected() {
        this.collectedCoins += 20;
        this.COIN_AUDIO.play();
    }
    isCollectedBottle() {
        this.collectedBottles += 20;
    }

    

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // differenz in ms
        timepassed = timepassed / 1000; // differenz in s

        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }



    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);  // berechnung 60 mal pro sekunde werden 0.15 piksel abgezogen    
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // modulu % let i = 0 % 18; = > 0, rest 18 
        // i = 0, 1, 2, => 17 , dann wieder von 0, 1, 2, unendliche reinfolge
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}