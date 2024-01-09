class Coral extends MoveableObject {
    height = 50;
    width = 50;
    y = 100;
    x = 650;
    


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');

        this.x = 220 + Math.random() * 500;
        this.animate();
    }
    animate() {
        this.moveLeft();
    }

   
}
