
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

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 200);
    }

    checkThrowObjects() {
        let bottle = new ThrowableObject(this.character.x + 150, this.character.y + 90);
        this.Throwable_Object.push(bottle);

    };

    enemyAttacked(index) {
        this.Throwable_Object.splice(index, 1);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => this.enemyCollision(enemy));
        this.level.boss.forEach((endBoss) => this.bossCollision(endBoss));
        this.level.coins.forEach((coin) => this.coinCollision(coin));
        this.level.bottles.forEach((bottle) => this.bottleCollision(bottle));
    }

    bottleCollision(bottle) {
        if (this.character.isColliding(bottle)) {
           this.setBottleStatus(bottle);
        }
    }

    setBottleStatus(bottle){
        this.character.isCollectedBottle();
        this.statusBarBottle.setPercentage(this.character.collectedBottles);
        let indexOfBottle = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(indexOfBottle, 1);
    }

    coinCollision(coin) {
        if (this.character.isColliding(coin))
            this.setCoinStatus(coin);
    }

    setCoinStatus(coin) {
        this.character.isCollected();
        this.statusBarCoin.setPercentage(this.character.collectedCoins);
        let indexOfCoin = this.level.coins.indexOf(coin);
        this.level.coins.splice(indexOfCoin, 1);
    }

    bossCollision(endBoss) {
        if (this.character.isColliding(endBoss)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        };
        this.Throwable_Object.forEach((thrownObject) => this.bossIsColliding(thrownObject, endBoss));
    }

    bossIsColliding(thrownObject, endBoss) {
        if (thrownObject.isColliding(endBoss)) {
            let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
            this.enemyAttacked(indexOfBubble);
            endBoss.hit();
            this.statusBarBoss.setPercentage(endBoss.energy);
        }
    }

    enemyCollision(enemy) {
        if (this.character.isColliding(enemy))
            this.setCharacterStatus(enemy);
        this.Throwable_Object.forEach((thrownObject) => {
            this.enemyIsColliding(thrownObject, enemy);
        });
    }

    enemyIsColliding(thrownObject, enemy) {
        if (thrownObject.isColliding(enemy)) {
            let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
            this.enemyAttacked(indexOfBubble);
            enemy.changeAnimation();
        }
    }

    setCharacterStatus(enemy) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.character.damageType = enemy.damageType;
    }

    setWorld() {
        this.character.world = this;
    }

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

    addAllObjectsToMap() {
        this.addObjectsToMap(this.level.corals);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.boss);
        this.addObjectsToMap(this.Throwable_Object);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    }

    addDrawableObjects() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        if (this.character.x >= 3500) {
            this.addToMap(this.statusBarBoss);
        }
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection)
            this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.otherDirection)
            this.flipImageBack(mo);
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

