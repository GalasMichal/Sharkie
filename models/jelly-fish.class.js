class JellyFish extends MoveableObject {
    height = 80;
    width = 80;
    start_attack = false;
    maxY = this.y + 100;
    minY = this.y - 100;
    speed = 0.5;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    IMAGES_DANGER = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ]

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_DANGER);
        this.x = this.randomX; // random pos x
        this.y = this.randomY;  // random pos y
        this.speed = 6; // Geschwindigkeit der Bewegung
        this.maxY = this.y + 100; // Obergrenze für die Bewegung nach oben
        this.minY = this.y - 100; // Untergrenze für die Bewegung nach unten
        this.direction = 1; // Richtung der Bewegung: 1 für nach unten, -1 für nach oben
        this.animate();
    };

    animate() {
       let moveIntervall = setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
            if (this.y >= this.maxY) {
                this.direction = -1; // Ändere die Richtung zu nach oben, wenn die Obergrenze erreicht ist
                setTimeout(() => {
                    this.moveLeft();
                        
            }, 200);
                
            } else if (this.y <= this.minY) {
                this.direction = 1; // Ändere die Richtung zu nach unten, wenn die Untergrenze erreicht ist
            }
            this.y += this.speed * this.direction; // Bewege die Jellyfish entsprechend der Richtung und Geschwindigkeit
        }, 200);
    }

        if () {
            
        }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 800);  
    }
}




