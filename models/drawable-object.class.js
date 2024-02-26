class DrawableObject {
    x = 120;
    y = 280;
    height = 200;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    }


    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


        // ** HIT BOX FUNCTION ONLY FOR DEV TO CHECK COLLISSIONS
    // drawFrame(ctx) {  
    //         // Blue HitBox Frames Only for DEV
    //     // if (this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Coin) { // instance of ist dafur um die sachen explitzit  wählen welche gezeichnet werden sollen
    //     //     ctx.beginPath();
    //     //     ctx.lineWidth = '5';
    //     //     ctx.strokeStyle = 'blue';
    //     //     ctx.rect(this.x, this.y, this.width, this.height);
    //     //     ctx.stroke();
    //     // };

    //     if (this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Coin || this instanceof Bottle) { // instance of ist dafur um die sachen explitzit  wählen welche gezeichnet werden sollen
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.right, this.height - this.offset.bottom - this.offset.top);
    //         ctx.stroke();
    //     };
    // };

  
    loadImages(arr) { // wird hier array geladen der ist z.bs bei character.js definiert
        arr.forEach((path) => {
            let img = new Image(); // variable img bekommt ein neues objekt
            img.src = path; // hie wird zu dem string src dazugegeben
            this.imageCache[path] = img;
        });
    }
}