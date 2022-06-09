var photoNames = []
var tGallery;
var bGallery;
var imgLib;

function GalleryDraft(names){
  this.photoNames = names
  this.images = []
  this.indexImage = 0
  
  this.create = function(){
    for(let i = 0; i < this.photoNames.length; i++) {
    this.images[i] = loadImage(this.photoNames[i])
    }
  }
  
  this.updatetopGallery = function(){
    this.indexImage = constrain(this.indexImage, 0, this.photoNames.length) 
    let index = width*-this.indexImage
    if (index == width*-2){
      index = width*-3
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

function preload() {
  imgLib = new imageLibrary();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // photoNames = ['data/tops/top1.png', 'data/tops/top2.png', 'data/tops/top3.png']
  // tGallery = new Gallery(photoNames)
  // tGallery.create()

  tGallery = new Gallery(createVector(0,0), true);
  bGallery = new Gallery(createVector(0,0), false);
}

function draw() {
  background(220);
  tGallery.displayButtons();
  // tGallery.updatetopGallery()
  // tGallery.displaytopGallery()
}

function mousePressed(){
  tGallery.putInMousePressed();
  bGallery.putInMousePressed();
  // if right arrow is clicked
  //tGallery.swap(true);
}
