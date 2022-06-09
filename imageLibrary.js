
class imageLibrary {
    constructor() {
        this.topImageNames = ["data/tops/top1.png", "data/tops/top2.png", "data/tops/top3.png"];
        this.bottomImageNames = ["data/bottoms/bottom1.png", "data/bottoms/bottom2.png", "data/bottoms/bottom3.png"];

        this.topImages = [];
        this.bottomImages = [];

        for (var i = 0; i < this.topImageNames.length; i++) {
            this.topImages[i] = loadImage(this.topImageNames[i]);
        }
    }
}