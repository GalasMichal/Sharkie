class ThrowableObject extends MoveableObject {
    speedY = 30;
    speedX = 20;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();

    }


    throw() {
        this.speedY = 30;
        // this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25)
    }

}