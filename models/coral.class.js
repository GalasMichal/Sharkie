class Coral extends MoveableObject {
    height = 150;
    width = 400;
    y = 350;
    x = 150;
    


    constructor() {
        super().loadImage('img/3. Background/Barrier/2.png');

        this.x = 220 + Math.random() * 3800;
        
    }
   

   
}
