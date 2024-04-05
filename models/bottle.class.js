class Bottle extends MoveableObject {
    height = 50;
    width = 50;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
    collectedBottle = 0;

    IMAGES = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        
    ]


    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES);
        this.animate();
        this.y = this.randomY;
        this.x = this.randomX - 250;

    }

    /**
    * Animates the character by continuously playing the animation.
    */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES)
        }, 200);
    }
}
    
    
    


