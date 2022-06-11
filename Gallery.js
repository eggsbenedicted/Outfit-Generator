class Gallery {
    constructor(position, isTop){
        this.isTop = isTop; // Connect the declaring value to a class variable
        this.index = 0;
        this.position = createVector(position.x, position.y);

        this.buttonSize = 100;
        this.buttonOffset = 250;
    }

    swap(isPositive){
        // Change gallery pieces based on if user presses left or right arrow
        if (isPositive) {
            this.index++;
        }
        else {
            this.index--;
        }

        // Clamp
        if (this.index > 2) {
            this.index = 0;
        }
        else if (this.index < 0) {
            this.index = 2;
        }
    }

    display(){
        // Move the cursor into position
        push();
        translate(this.position.x, this.position.y); 

        // Make images align with the position from the centre of the image
        imageMode(CENTER);

        // Stamp an image at the (hidden) cursor location
        if (this.isTop) {
            image(imgLib.topImages[this.index], 0, 0);
        }
        else {
            image(imgLib.bottomImages[this.index], 0, 0);
        }

        pop();

        // Also display buttons on both sides of the gallery
        this.displayButtons();
    }

    putInMousePressed() {
        // Tell the program where the arrows are to know when they are clicked
        if (int(dist(mouseX,mouseY, this.position.x - this.buttonOffset, this.position.y)) < this.buttonSize) {
            // console.log("Swap left");
            this.swap(false);
        }
        else if (int(dist(mouseX,mouseY, this.position.x + this.buttonOffset, this.position.y)) < this.buttonSize) {
            // console.log("Swap right");
            this.swap(true);
        }
        else {
            console.log((this.isTop ? "Top gallery" : "Bottom gallery") + ": Click missed");
        }
    }

    displayButtons(){
        // Move into position
        push();
        translate(this.position.x, this.position.y);

        // Make buttons align with the position from their centre point
        imageMode(CENTER);

        // Left
        image(imgLib.arrowLeft, -this.buttonOffset, 0, this.buttonSize, this.buttonSize);

        // Right
        image(imgLib.arrowRight, this.buttonOffset, 0, this.buttonSize, this.buttonSize);
        pop();
    }
}
