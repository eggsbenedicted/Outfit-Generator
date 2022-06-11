var photoNames = []
var tGallery;
var bGallery;
var galleries = [];
var imgLib;

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
  imgLib = new imageLibrary();
}

function setup() {
  createCanvas(720, 720); // Create a fixed size canvas 
  
  // photoNames = ['data/tops/top1.png', 'data/tops/top2.png', 'data/tops/top3.png']
  // tGallery = new Gallery(photoNames)
  // tGallery.create()

  // Find on screen positions for top and bottom galleries 
  //  and replaces 0,0 with them
  tGallery = new Gallery(createVector(0,0), true);
  bGallery = new Gallery(createVector(0,0), false);

  galleries = [tGallery, bGallery];
}

function draw() {
  background(220);

  // Display both galleries
  for (let i = 0; i < galleries.length; i++) {
    galleries[i].display();
  }

  // tGallery.displayButtons();
  // bGallery.displayButtons();
  // tGallery.updatetopGallery()
  // tGallery.displaytopGallery()
}

function mousePressed(){
  // Send mouse pressed to both galleries
  //  Invididual gallery checks for their own mouse pressed
  for (let i ; i < galleries.length; i++) {
    galleries[i].putInMousePressed();
  }

  //tGallery.putInMousePressed();
  //bGallery.putInMousePressed();
  // if right arrow is clicked
  //tGallery.swap(true);
}
