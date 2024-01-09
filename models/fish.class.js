class Fish extends MoveableObject{
    height = 80;
    width = 80;
    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
        
    ];
    
    constructor(){
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.x = 220 + Math.random() * 500; // zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25; // es gibt uns zuffälige zahl zwischen 0.15 bis 0.25, es heisst für jeden enemy wird unterschiedliche geschwindigkeit ausgegeben
        this.animate();
    }


    animate() {
        this.moveLeft();
        setInterval( () => {
            let i = this.currentImage % this.IMAGES_IDLE.length; // modulu % let i = 0 % 18; = > 0, rest 18 
            // i = 0, 1, 2, => 17 , dann wieder von 0, 1, 2, unendliche reinfolge
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}