const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var rope3;

var bg_img;
var food;
var rabbit;

var button,button2,button3;
var bunny;
var blink,eat,sad;
var mute_btn;

var fr;

var bk_song;
var cut_sound;
var sad_sound;
var eating_sound;
var air;

//Aula 34 - Criando as variáveis da estrela


function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');

  //Aula 34 - ler a imagem da estrela
  
  
  bk_song = loadSound('sound1.mp3');
  sad_sound = loadSound("sad.wav")
  cut_sound = loadSound('rope_cut.mp3');
  eating_sound = loadSound('eating_sound.mp3');
  air = loadSound('air.wav');

  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

  //Aula 34 - lendo animação vazia das estrelas
  
  
  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  eat.looping = false; 
}

function setup() 
{
  //Aula 34 - Modificar a posição x da tela para aumentar
  createCanvas(,700);
  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;

  //botão 1
  button = createImg('cut_btn.png');
  //Aula 34 - inserir novas posições
  button.position(,90);
  button.size(50,50);
  button.mouseClicked(drop);

   //botão 2
   button2 = createImg('cut_btn.png');
   //Aula 34 - inserir novas posições
   button2.position(,90);
   button2.size(50,50);
   button2.mouseClicked(drop2);
 
  //Aula 34 - inserir as quantidades de retangulos-cordas 
  rope = new Rope(,{x:120,y:90});
  rope2 = new Rope(,{x:490,y:90});


  mute_btn = createImg('mute.png');
  //Aula 34 - definir nova posição do botao mudo
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);
  
  //Aula 34 - ajustando a posição do chao
  ground = new Ground(300, , ,20);
  blink.frameDelay = 20;
  eat.frameDelay = 20;

  //Aula 34 - ajustando a posição do coelho
  bunny = createSprite(200,height-50,100,100);
  bunny.scale = 0.2;

  bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');

  //Aula 34 - criando animação com o star_display, pois terá uma animação vazia
  

  //Aula 34 - criando sprite de estrela1
  

  //Aula 34 - criando sprite de estrela2
 
  //Aula 34 - criando sprite do balão
  
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();

  Engine.update(engine);
  ground.show();

  drawSprites();

  if(collide(fruit,bunny,80)==true)
  {
    World.remove(engine.world,fruit);
    fruit = null;
    bunny.changeAnimation('eating');
    eating_sound.play();
  }

  if(fruit!=null && fruit.position.y>=650)
  {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit=null;
   }

   //Aula 34 - condições para verificar se houve colisão da fruta com a estrela1
   if()
   {
         //Aula 34 - detectada a colisão é trocada a animação da estrela1
     star_display.changeAnimation('one');
   }

   //Aula 34 - condições para verificar se houve colisão da fruta com a estrela2
   if()
   {
     //Aula 34 - detectada a colisão é trocada a animação da estrela2
     
   }   
   
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

//Aula 34 - Função de colisão - relembrar



function mute()
{
  if(bk_song.isPlaying())
     {
      bk_song.stop();
     }
     else{
      bk_song.play();
     }
}

//Aula 34 - Função do balão - relembrar
function airblow()
{
 
  air.play();
}


