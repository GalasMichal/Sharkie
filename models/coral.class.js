class Coral extends MoveableObject {
    height = 100;
    width = 250;
    y = 390;
    x = 150;
    
    constructor() {
        super().loadImage('img/3. Background/Barrier/2.png');

        this.x = 220 + Math.random() * 3800;
        
    }
}
