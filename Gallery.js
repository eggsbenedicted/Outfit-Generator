class Gallery {
    constructor(position, isTop){
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
        imgLib.topImages[0];

        if (isTop) {
            image(imgLib.topImages[this.index]);
        }
        else {
            image(imgLib.bottomImages[this.index]);
        }
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

        console.log("Click missed");
    }

    displayButtons(){
        translate(this.index, 0);

        // move into position
        push();
        translate(-this.index, 0);
        fill(150);
        noStroke();

        // draw main left/right arrows
        // todo change to be dependent on this.position
        triangle(width/4, height/7 * 6, width/4 + 50, height/7 * 6 + 25, width/4 + 50, height/7 * 6 - 25);
        triangle(width/4 * 3, height/7 * 6, width/4 * 3- 50, height/7 * 6 + 25, width/4 * 3 - 50, height/7 * 6 - 25);
        fill(150);
        
        // draw little dots
        
        pop()
    }
}
