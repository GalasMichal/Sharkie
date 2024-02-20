class MoveableObject {
    x = 120;
    y = 280;
    img;
    height = 200;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) { // wird hier array geladen der ist z.bs bei character.js definiert
        arr.forEach((path) => {

            let img = new Image(); // variable img bekommt ein neues objekt
            img.src = path; // hie wird zu dem string src dazugegeben
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);  // berechnung 60 mal pro sekunde werden 0.15 piksel abgezogen    
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_IDLE.length; // modulu % let i = 0 % 18; = > 0, rest 18 
        // i = 0, 1, 2, => 17 , dann wieder von 0, 1, 2, unendliche reinfolge
        let path = images[i];
        this.img = this.imageCache[path]; 
        this.currentImage++;
    }
}