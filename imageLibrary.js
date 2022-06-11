
class imageLibrary {
    constructor() {
        // Locate the image files and create arrays
        this.topImageNames = ["data/tops/top1.png", "data/tops/top2.png", "data/tops/top3.png"];
        this.bottomImageNames = ["data/bottoms/bottom1.png", "data/bottoms/bottom2.png", "data/bottoms/bottom3.png"];
        this.modelImageNames = [["top1-bottom1", "top1-bottom2", "top1-bottom3"], 
                                ["top2-bottom1", "top2-bottom2", "top2-bottom3"],
                                ["top3-bottom1", "top3-bottom2", "top3-bottom3"]];

        this.topImages = [];
        this.bottomImages = [];
        this.modelImages = [];
        this.arrowLeft = loadImage("data/arrows/arrowleft.png");
        this.arrowRight = loadImage("data/arrows/arrowright.png");

        // Load top images
        for (var i = 0; i < this.topImageNames.length; i++) {
            this.topImages[i] = loadImage(this.topImageNames[i]);
        }

        // Load bottom images
        for (var i = 0; i < this.bottomImageNames.length; i++) {
            this.bottomImages[i] = loadImage(this.bottomImageNames[i]);
        }

        // Load in the modelled outfit that correlates with the gallery pieces selected
        console.log(this.modelImageNames[0][1]);
        this.modelImages.push([loadImage("data/model/" + this.modelImageNames[0][0] + ".png"), 
                               loadImage("data/model/" + this.modelImageNames[0][1] + ".png"),
                               loadImage("data/model/" + this.modelImageNames[0][2] + ".png")]);

        this.modelImages.push([loadImage("data/model/" + this.modelImageNames[1][0] + ".png"), 
                               loadImage("data/model/" + this.modelImageNames[1][1] + ".png"),
                               loadImage("data/model/" + this.modelImageNames[1][2] + ".png")]);

        this.modelImages.push([loadImage("data/model/" + this.modelImageNames[2][0] + ".png"), 
                               loadImage("data/model/" + this.modelImageNames[2][1] + ".png"),
                               loadImage("data/model/" + this.modelImageNames[2][2] + ".png")]);
        // this.modelImages.push(loadImage("data/model/" + this.modelImageNames[0][0] + ".png"));
        // console.log(this.modelImages);
        
        /*
        for (var i = 0; i < this.modelImageNames.length; i++) {
            let temp = [];

            for (var j = 0; i < this.modelImageNames[i].length; j++) {
                temp[j] = loadImage("data/model/" + this.modelImageNames[i][j] + ".png");
            }

            this.modelImages.push(temp);
        }
        */
        
    }
}