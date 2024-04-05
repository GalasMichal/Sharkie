
class World {
    character = new Character();
    level = level1;
    canvas;
    gameOver = false;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    statusBarBoss = new StatusBarBoss();
    Throwable_Object = [];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
    * Initiates the running action to check collisions periodically.
    */
    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 200);
    }

    /**
    * Checks and throws objects based on character direction.
    */
    checkThrowObjects() {
        let bottle
        if (this.character.otherDirection)
            bottle = new ThrowableObject(this.character.x - 40, this.character.y + 90);
        else
            bottle = new ThrowableObject(this.character.x + 150, this.character.y + 90);
        this.Throwable_Object.push(bottle);
    };

    /**
    * Removes a thrown object from the world when it attacks an enemy.
    * @param {number} index - The index of the thrown object to remove.
    */
    enemyAttacked(index) {
        this.Throwable_Object.splice(index, 1);
    }

    /**
    * Checks for collisions between the characters and various objects in the world.
    */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => this.enemyCollision(enemy));
        this.level.boss.forEach((endBoss) => this.bossCollision(endBoss));
        this.level.coins.forEach((coin) => this.coinCollision(coin));
        this.level.bottles.forEach((bottle) => this.bottleCollision(bottle));
    }

    /**
    * Handles collision detection with bottles.
    * @param {Bottle} bottle - The bottle object to check collision with.
    */
    bottleCollision(bottle) {
        if (this.character.isColliding(bottle)) {
            this.setBottleStatus(bottle);
        }
    }

    /**
    * Sets the status of a collected bottle.
    * @param {Bottle} bottle - The bottle object to set the status for.
    */
    setBottleStatus(bottle) {
        this.character.isCollectedBottle();
        this.statusBarBottle.setPercentage(this.character.collectedBottles);
        let indexOfBottle = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(indexOfBottle, 1);
        audio.bottle_collect.currentTime = 0;
        audio.bottle_collect.play();
    }

    /**
    * Handles collision detection with coins.
    * @param {Coin} coin - The coin object to check collision with.
    */
    coinCollision(coin) {
        if (this.character.isColliding(coin))
            this.setCoinStatus(coin);
    }

    /**
    * Sets the status of a collected coin.
    * @param {Coin} coin - The coin object to set the status for.
    */
    setCoinStatus(coin) {
        this.character.isCollected();
        this.statusBarCoin.setPercentage(this.character.collectedCoins);
        let indexOfCoin = this.level.coins.indexOf(coin);
        this.level.coins.splice(indexOfCoin, 1);
    }

    /**
    * Handles collision detection with the boss character.
    * @param {EndBoss} endBoss - The boss character object to check collision with.
    */
    bossCollision(endBoss) {
        if (this.character.isColliding(endBoss)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        };
        this.Throwable_Object.forEach((thrownObject) => this.bossIsColliding(thrownObject, endBoss));
    }

    /**
    * Checks for collision between a thrown object and the boss character.
    * @param {ThrowableObject} thrownObject - The thrown object to check collision with.
    * @param {EndBoss} endBoss - The boss character object to check collision with.
    */
    bossIsColliding(thrownObject, endBoss) {
        if (thrownObject.isColliding(endBoss)) {
            let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
            this.enemyAttacked(indexOfBubble);
            endBoss.hit();
            this.statusBarBoss.setPercentage(endBoss.energy);
        }
    }

    /**
    * Handles collision detection with enemies.
    * @param {Enemy} enemy - The enemy object to check collision with.
    */
    enemyCollision(enemy) {
        if (this.character.isColliding(enemy))
            this.setCharacterStatus(enemy);
        this.Throwable_Object.forEach((thrownObject) => {
            this.enemyIsColliding(thrownObject, enemy);
        });
    }

    /**
    * Checks for collision between a thrown object and an enemy.
    * @param {ThrowableObject} thrownObject - The thrown object to check collision with.
    * @param {Enemy} enemy - The enemy object to check collision with.
    */
    enemyIsColliding(thrownObject, enemy) {
        if (thrownObject.isColliding(enemy)) {
            let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
            this.enemyAttacked(indexOfBubble);
            enemy.changeAnimation();
        }
    }

    /**
    * Handles setting character status after a collision.
    * @param {Enemy} enemy - The enemy object causing the collision.
    */
    setCharacterStatus(enemy) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.character.damageType = enemy.damageType;
    }

    /**
    * Sets up the world environment.
    */
    setWorld() {
        this.character.world = this;
    }

    /**
    * Draws all objects onto the canvas.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addDrawableObjects();
        this.ctx.translate(this.camera_x, 0);
        this.addAllObjectsToMap();
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
    * Adds all objects in the world to the map for drawing.
    */
    addAllObjectsToMap() {
        this.addObjectsToMap(this.level.corals);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.boss);
        this.addObjectsToMap(this.Throwable_Object);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    }

    /**
    * Adds drawable objects to the map for drawing.
    */
    addDrawableObjects() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        if (this.character.x >= 3500) {
            this.addToMap(this.statusBarBoss);
        }
    }

    /**
    * Adds objects to the map for drawing.
    * @param {Array<Object>} objects - The array of objects to add to the map.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
    * Adds an object to the map for drawing.
    * @param {Object} mo - The object to add to the map.
    */
    addToMap(mo) {
        if (mo.otherDirection)
            this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.otherDirection)
            this.flipImageBack(mo);
    }

    /**
    * Flips the image horizontally for drawing.
    * @param {Object} mo - The object whose image needs to be flipped.
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    
    /**
    * Restores the image to its original orientation after flipping.
    * @param {Object} mo - The object whose image needs to be restored.
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

