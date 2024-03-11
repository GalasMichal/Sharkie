
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
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
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.character.damageType = enemy.damageType;
            };

            this.Throwable_Object.forEach((thrownObject) => {
                if (thrownObject.isColliding(enemy)) {
                    let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
                    this.enemyAttacked(indexOfBubble);
                    enemy.changeAnimation();
                }
            });


        });


        this.level.boss.forEach((boss) => {
            if (this.character.isColliding(boss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);

            };
            this.Throwable_Object.forEach((thrownObject) => {
                if (thrownObject.isColliding(boss)) {
                    let indexOfBubble = this.Throwable_Object.indexOf(thrownObject);
                    this.enemyAttacked(indexOfBubble);
                   
                }
            });


        });


        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.isCollected();
                this.statusBarCoin.setPercentage(this.character.collectedCoins);
                let indexOfCoin = this.level.coins.indexOf(coin);
                this.level.coins.splice(indexOfCoin, 1);
                // console.log('coin collected', this.character.collectedCoins, 'index of coin is', indexOfCoin);
            }
        });

        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.isCollectedBottle();
                this.statusBarBottle.setPercentage(this.character.collectedBottles);
                let indexOfBottle = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(indexOfBottle, 1);
                //  console.log('Bottle collected', this.character.collectedBottles, 'index of bottle is', indexOfBottle);
            }
        });


    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.corals);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.boss);
        this.addObjectsToMap(this.Throwable_Object);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx); ENABLE IT IF YOU WANT TO SEE HIT BOX FRAMES

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
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

