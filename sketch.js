var galleries = [];
var imgLib;

let generateButton;
let randomizeButton;
let saveButton;
let isFinished = false;
/*
function GalleryDraft(names){
  this.photoNames = names;
  this.images = [];
  this.indexImage = 0;
  
  this.create = function(){
    for(let i = 0; i < this.photoNames.length; i++) {
    this.images[i] = loadImage(this.photoNames[i]);
    }
  }
  
  this.updatetopGallery = function(){
    this.indexImage = constrain(this.indexImage, 0, this.photoNames.length);
    let index = width*-this.indexImage;
    if (index == width*-2){
      index = width*-3;
    }
  }
  
  this.displaytopGallery = function (){

    
  push()
    imageMode(CENTER)
    for (let i = 0; i < this.images.length; i++){
      let spacing = width * i
      translate(spacing, 0)
      image(this.images[i], width/2, height/2, this.images[i].width / 8, this.images[i].height / 8)
    }
    pop()
  }
}
*/

function preload() {
  // Load Images
  imgLib = new imageLibrary();
}

function setup() {
  createCanvas(720, 900); // Create a fixed size canvas 

  // Find on screen positions for top and bottom galleries 
  //  and replaces 0,0 with them
  let tGallery = new Gallery(createVector(330, 200), true);
  let bGallery = new Gallery(createVector(330, 480), false);

  // Put top and bottom gallery into one
  galleries = [tGallery, bGallery];

  // Create and display button to generate modelled outfit image
  generateButton = createButton('Generate');
  generateButton.position(width / 2 - 120, height - 100);
  generateButton.size(200, 100);
  generateButton.style('font-size', '40px');
  formatButton(generateButton);

  // Create and display button to randomize gallery pieces shown
  randomizeButton = createButton('Randomize');
  randomizeButton.position(width / 2 - 120, height - 200);
  randomizeButton.size(200, 70);
  randomizeButton.style('font-size', '30px');
  formatButton(randomizeButton);

  generateButton.mousePressed(generate);
  randomizeButton.mousePressed(randomize);
}

function draw() {
  // Check if generate button has been pressed
  if (!isFinished){
    // Light pink colour for background
    background('#ffe6e6');

    // Display both galleries
    for (let i = 0; i < galleries.length; i++) {
      galleries[i].display();
    }
  }
}

function mousePressed(){
  if (!isFinished) {
    // Send mouse pressed to both galleries
    //  Invididual gallery checks for their own mouse pressed
    for (let i = 0; i < galleries.length; i++) {
      galleries[i].putInMousePressed();
  }

  // console.log(mouseX);
  // console.log(mouseY);
  }
}

function generate() {
  // Check if generate button has been pressed
  if (isFinished) {
    return;
  }

  isFinished = true;

  // Clear everything
  background('#ffe6e6');
  generateButton.remove();
  randomizeButton.remove();
  // Generate modelled outfit image based on what gallery pieces were selected when pressed
  displayResult();
}

function randomize() {
  // Randomize what gallery pieces are showing
  galleries[0].index = random([0, 1, 2]);
  galleries[1].index = random([0, 1, 2]);
}

function displayResult() {
    // draw
    push();
    imageMode(CENTER);
    image(imgLib.modelImages[galleries[0].index][galleries[1].index], width / 2, height / 2);
    pop();
  
    // Create and display button to save the generated modelled outfit
    saveButton = createButton('Save');
    saveButton.position(width / 2 - 120, height - 100);
    saveButton.size(200, 100);
    saveButton.style('font-size', '40px');
    formatButton(saveButton);
    saveButton.mousePressed(saveImage);
  
    // Clear galleries
    galleries = [];
}

function formatButton(button) {
  // Consistent button style
  button.style('background-color', '#ffb3b3');
  button.style('border', 'none');
  button.style('color', 'white');
}

function saveImage() {
  // User downloads a png of their generated modelled outfit when they press the save button
  let imgToSave = get(0, 0, width, height); 
  imgToSave.save("My outfit", 'png');
}
