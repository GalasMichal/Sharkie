class ThrowableObject extends MoveableObject {
    maxY;
    minY;
    direction = 1;
    speed = 10;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();
        this.maxY = this.y + 30;
        this.minY = this.y - 30;
    }


    throw() {
        this.AnimateUpDown();
        setInterval(() => {
            this.x += 10;
        }, 30)
    }

    AnimateUpDown() {
        setInterval(() => {

            if (this.y >= this.maxY) {
                this.direction = -1;
            } else if (this.y <= this.minY) {
                this.direction = 1;
            }
            this.y += this.speed * this.direction;

        }, 50)
    }


}