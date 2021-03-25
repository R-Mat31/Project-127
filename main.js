function preload(){
 song1 = loadSound("Harry Potter Theme.mp3");
 song2 = loadSound("Pirates of the Caribbean Theme.mp3");
}
function setup(){
 canvas = createCanvas(350, 350);
 canvas.position(450, 200);
 video = createCapture(VIDEO);
 video.hide();
}
function draw(){
 webcam = image(video, 0, 0, 350, 350);
}