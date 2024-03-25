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
    COIN_AUDIO = new Audio('audio/coin.mp3');
    background_audio; //= new Audio('audio/backgroundMusik.mp3')
    deadCounter = 0;

    // playMusic() {
    //     if(character) {
    //         this.background_audio.play();
    //     }
    // }

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

    startDeadCounter() {

        let deadInterval = setInterval(() => {
            this.deadCounter++;
            this.playAnimation(this.IMAGES_DEAD);
            if (this.deadCounter == this.IMAGES_DEAD.length - 1) {
                this.firstTimeContact = false;
                if (this instanceof Character) {
                    this.loadImage(this.IMAGES_DEAD[11])
                    clearInterval(deadInterval);
                    this.clearAllIntervals();
                    setTimeout(gameOverScreen, 1000);
                    
                } else {
                    this.loadImage(this.IMAGES_DEAD[4]);
                    clearInterval(deadInterval);
                    this.clearAllIntervals();
                    setTimeout(winnerScreen, 2000);
                    
                }
                
            }
        }, 250);
    };


    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    // gameIsOver() {
    //     this.clearAllIntervals();
    //     setTimeout(gameOverScreen, 1000);
    // }



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