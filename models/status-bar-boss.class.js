class StatusBarBoss extends DrawableObject {

    IMAGES = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png',
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 5;
        this.height = 40;
        this.setPercentage(100);
        this.otherDirection = true;
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
        if (this.percentage == 100) {
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
