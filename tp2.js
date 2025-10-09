let pag;
let fondo = [];
let fuente
let animacion;
let puerta, llave, libro, velas;
let color1, color2;

function preload(){
  fuente = loadFont('assets/Creepster-Regular.ttf')
  fondo.push( loadImage('assets/inicio.png'))
  for(i = 0; i < 6; i++){
  fondo.push(loadImage('assets/anim0' + i + '.jpg'));
  }
  fondo.push( loadImage('assets/pandillaAuto.png'));
  fondo.push( loadImage('assets/mansion00.png'));
  fondo.push( loadImage('assets/mansion01.png'));
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

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 2;
      animacion = 0;
    }

  } else if (pag == 2){
    background(20);
    image(fondo[pag], 0, 0);

    
    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 3;
      animacion = 0;
    }

  } else if (pag == 3){
    background(20);
    image(fondo[pag], 0, 0);
    
    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 4;
      animacion = 0;
    }
  }else if (pag == 4){
    background(20);
    image(fondo[pag], 0, 0);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 5;
      animacion = 0;
    }
  }else if (pag == 5){
    background(20);
    image(fondo[pag], 0, 0);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 6;
      animacion = 0;
    }
  }else if (pag == 6){
    background(20);
    image(fondo[pag], 0, 0);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
      pag = 7;
      animacion = 0;
    }
  }else if (pag == 7){
    background(20);
    image(fondo[pag], 0, 0);

    animacion++
    text(int(animacion / 60), 600, 400);
    if (animacion > 600) {
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
      pag = pag.length;
    }
  }
  if(pag > fondo.length){
    pag=0;
  }
}