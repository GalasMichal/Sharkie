class StatusText extends DrawableObject {

    height = 60;
    width =  100;
    

    IMAGES = [
        'img/7.Backgrounds/bottle.png'
    ]
    
    constructor(){
        super().loadImage('img/7.Backgrounds/bottle.png');
        this.x = 300;
        this.y = 50;
        this.height = 40;
        this.width = 260;
    }

}