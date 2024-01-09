class BackgroundObject extends MoveableObject{
    height = 480;
    width = 720;
    
    

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // hier wird die y achse automatisch berechnet von die canvas grösse
        
    }

}