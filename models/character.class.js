class Character extends MoveableObject {
    width = 210;
    speed = 10;
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ]

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    world;

    constructor() { // wenn irgendwo wird aufgerufen new character dann der constructor wird ausgeführt
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {

        setInterval( () => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                
                //swimm animaion
                let i = this.currentImage % this.IMAGES_IDLE.length; // modulu % let i = 0 % 18; = > 0, rest 18 
                // i = 0, 1, 2, => 17 , dann wieder von 0, 1, 2, unendliche reinfolge
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            }, 250);
    
}

// idle(){
//     let i = this.currentImage % this.IMAGES_IDLE.length; // modulu % let i = 0 % 18; = > 0, rest 18 
//                 // i = 0, 1, 2, => 17 , dann wieder von 0, 1, 2, unendliche reinfolge
//                 let path = this.IMAGES_IDLE[i];
//                 this.img = this.imageCache[path];
//                 this.currentImage++;
// }

jump() {

}
}