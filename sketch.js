let sprite
let backG;
let camino;
let sound;
const size=128
let spriteX=0
let spriteY=0
let stepX=0
let stepY=0
let fondo;
let escala=1
let tp=0
let jala= false
function preload(){
	sprite= loadImage("img/sprite.jpg")
	backG= loadImage("img/background2.jpg")
	camino= loadImage("img/camino2.jpg")
	sound = loadSound('song/lalala.mp3');

}
function setup() {
	frameRate(100)
	
	createCanvas(windowWidth, windowHeight);
	
	sound.setVolume(0.3);
  	sound.play();

}

function draw() {
	frameRate(30);
	background(backG);
	image(camino,0,90,width,50);
	image(camino,0,240,width,50);
	image(camino,0,390,width,50);
	image(camino,0,540,width,50);
	translate(tp,0);

	scale(escala,1);

	copy(sprite,spriteX,spriteY,128,128,stepX,stepY,128,120);

	
	spriteX+=size;
	if (spriteX==512) {
		spriteX=0;
		spriteY+=size;
	}
	if(spriteY==512){
		spriteX=0
		spriteY=0
		
	}
	if (stepX>windowWidth) {
		stepY+=150
		stepX=0
		if (!jala) {
		escala=-1
		tp=windowWidth
		jala=true
		}else{
			escala=1
			tp=128
			jala=false
		}	
	}
	stepX+=5
	if(stepY>=540){
		spriteX=0
		spriteY=0
		stepX=0
		stepY=0
		fondo;
		escala=1
		tp=0
		jala= false
	}
}