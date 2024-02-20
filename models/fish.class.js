class Fish extends MoveableObject {
    height = 80;
    width = 80;
    start_attack = false;


    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',

    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ]

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.x = this.randomX;
        this.y = this.randomY;
        this.speed = 0.15 + Math.random() * 0.25; // es gibt uns zuffälige zahl zwischen 0.15 bis 0.25, es heisst für jeden enemy wird unterschiedliche geschwindigkeit ausgegeben
        this.animate();
        this.offset = {
            top: 10,
            bottom: 20,
            left: 5,
            right: 5,
        }
    }


    animate() {

        this.moveLeft();
        setInterval(() => {
            if (this.attackDistance()) {
                this.playAnimation(this.IMAGES_TRANSITION);
                if (!this.start_attack){
                    this.speed = 0;
                setTimeout(() => {
                    this.speed = 5;
                    this.start_attack = true;
                }, 1000);
            } else {
                    this.speed = 5;
                }

            } else {
                this.playAnimation(this.IMAGES_SWIM);
                this.speed = 0.15 + Math.random() * 0.25;
            }
        }, 200);


    }


}
