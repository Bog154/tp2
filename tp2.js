let pag;
let fondo = [];
let fuente
let dialogos;
let animacion;
let puerta, llave, libro, velas;
let color1, color2;

function preload(){

  fuente = loadFont('assets/Creepster-Regular.ttf');
  dialogos = loadStrings('assets/Cinematica.txt');
  fondo.push( loadImage('assets/inicio.png'));
  for(i = 0; i < 7; i++){
    fondo.push(loadImage('assets/anim0' + i + '.jpg'));
  }
  for(i = 0; i < 4; i++){
    fondo.push(loadImage('assets/mansion0' + i + '.jpg'));
  }
}

function setup() {
  createCanvas(640, 480);
  colorMode( HSB, 360, 100, 100);
  textFont(fuente);
  pag =0;
  color1 = color(94, 100, 78);
  color2 = color(65, 78, 93);
  animacion = 0;

}

function draw() {
  botonInicio = (mouseX >= 250 && mouseX < 410 && mouseY >= 302 && mouseY < 332);
  botonCreditos = (mouseX >= 270 && mouseX < 380 && mouseY >= 352 && mouseY < 382);
  console.log(mouseY, mouseX);
  if(pag==0){
    background(220, 15, 50);
    image(fondo[pag], 0, 0);
  
    fill(color1);
    textSize(70);
    text("MISTERIOS",135, 122);
    textSize(60);
    text("EN LA", 250, 175);
    textSize(70);
    text("MANSION", 210, 232);
    textSize(30);

    if(botonInicio){
        fill(color2);
    }else{
        fill(color1);
    }
    circle(mouseX, mouseY, 10);
    stroke(0);
    strokeWeight(6);
    text("INICIAR JUEGO", 250, 330);
    if(botonCreditos){
        fill(color2);
    }else{
        fill(color1);
    }
    text("CREDITOS", 275, 380);


  } else if (pag==1){
    background(100, 12, 80);
    image(fondo[pag], 0, -140);
    text(dialogos[0], 50, 380);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 2;
      animacion = 0;
    }

  } else if (pag == 2){
    background(20);
    image(fondo[pag], 0, 0);
    text(dialogos[1], 50, 380);

    
    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 3;
      animacion = 0;
    }

  } else if (pag == 3){
    background(20);
    image(fondo[pag], 0, 0);
    text(dialogos[2], 10, 430, 300);
    text(dialogos[3], 350, 350, 300);
    
    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 4;
      animacion = 0;
    }
  }else if (pag == 4){
    background(20);
    image(fondo[pag], 0, 0);
    text(dialogos[4],150, 400);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 5;
      animacion = 0;
    }
  }else if (pag == 5){
    background(20);
    image(fondo[pag], 0, 0);
    text(dialogos[5],180, 400);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 6;
      animacion = 0;
    }
  }else if (pag == 6){
    background(20);
    image(fondo[pag], 0, 0);
    text(dialogos[6],20, 400, 300);
    text(dialogos[7],400, 400);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      pag = 7;
      animacion = 0;
    }
  }else if (pag == 7){
    background(20);
    image(fondo[pag], 0, -100);
    text(dialogos[8],30, 400, 300);
    text(dialogos[9],370, 300, 230);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 150) {
      animacion = 0;
    }
  }
}

function mouseClicked(){
  if(pag == 0){
    if(botonInicio){
      pag=1;
    }
    if(botonCreditos){
      pag = 7;
    }
  }
  if(fondo == fondo.length){
    pag=0;
  }
}