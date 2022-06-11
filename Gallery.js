class Gallery {
    constructor(position, isTop){
        this.isTop = isTop; // Connect the declaring value to a class variable
        this.index = 0;
        this.position = createVector(position.x, position.y);
    }

    swap(isPositive){
        if (isPositive) {
            this.indexImage++;
        }
        else {
            this.indexImage--;
        }
    }

    display(){
        // Move the cursor into location
        push();
        translate(this.position.x, this.position.y); 

        // Stamp an image at the (hidden) cursor location
        if (this.isTop) {
            image(imgLib.topImages[this.index], 0, 0);
        }
        else {
            image(imgLib.bottomImages[this.index], 0, 0);
        }

        // Also display buttons on both sides of the gallery
        this.displayButtons();
    }

    putInMousePressed() {
        if (int(dist(mouseX,mouseY, width/4, height/7 * 6)) < 50) {
            console.log("Swap left");
            swap(false);
        }
        else if (int(dist(mouseX,mouseY, width/4 * 3, height/7 * 6)) < 50) {
            console.log("Swap right");
            swap(true);
        }

        console.log(this.isTop ? "Top gallery" : "Bottom gallery" + "Click missed");
    }

    displayButtons(){
        translate(this.index, 0);

        // move into position
        push();
        // translate(-this.index, 0);
        fill(150);
        noStroke();

        // draw main left/right arrows
        //  todo change to be dependent on this.position
        triangle(width/4, height/7 * 6, width/4 + 50, height/7 * 6 + 25, width/4 + 50, height/7 * 6 - 25);
        triangle(width/4 * 3, height/7 * 6, width/4 * 3- 50, height/7 * 6 + 25, width/4 * 3 - 50, height/7 * 6 - 25);
        fill(150);
        
        // draw little dots
        
        pop();
    }
}
