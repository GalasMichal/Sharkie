class StatusBarCoin extends DrawableObject {

    IMAGES = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png',
    ];

    
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 35;
        this.height = 40;
        this.setPercentage(0);
    };

    /**
    * Sets the percentage value and updates the image accordingly.
    * @param {number} percentage - The percentage value to set.
    */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    /**
    * Resolves the index of the image based on the percentage value.
    * @returns {number} The index of the image in the IMAGES array.
    */
    resolveImageIndex() {
        if (this.percentage > 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    };
};
