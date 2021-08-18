const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 100;
let randomTime = Math.random() * 6000;
let Subtotal = Math.random() * 100;
let total = Math.round(Subtotal);

function handleKeyUp(event){
  if (event.keyCode === 32){
    if(!isJumping){
    jump();
    // console.log('Pressionou Espaço')
    contadorLetreiro()
    }
  }
}

function jump(){ 
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 350) {
      //Descendo
      clearInterval(upInterval);
      console.log("PULO "+position);
      
      let downInterval = setInterval(() =>{
       if(position <= 100){
        clearInterval(downInterval);
        isJumping = false;
       }else{
        position -= 20;
        dino.style.bottom = position + 'px' ; 
      }
      },20);
    }else{
    //Subindo
    position += 20;
    dino.style.bottom = position + 'px' ; 
    }    
  },10);
}


function createCactus(){
  const cactus = document.createElement('div');
  let cactusPosition = 1100;  

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval (() => {
    if(cactusPosition < -40 ){
      clearInterval(leftInterval);
      background.removeChild(cactus);
    }else if (cactusPosition > 0 && cactusPosition < 100 && position <= 100){   
      //Game Over
      console.log("GAME OVER "+position);      
       clearInterval(leftInterval);
      position = 1500;          
      // document.body.innerHTML = '<h1 class="game-over" onclick="rePlay()">Fim de Jogo </br> >  Play  <</h1>';      
      // document.body.innerHTML = '<img src="img/background.jpg"  class="game-over"> <div class="game-over-content"><h1 >Fim de Jogo</h1>   <button type = "button"  id="start" class = "rePlay" onclick="rePlay();">RePlay</button></div>';
       document.body.innerHTML = ' <div class="game-over"> <div class="game-over-content"><h1 >Fim de Jogo</h1>   <button type = "button"  id="start" class = "rePlay" onclick="rePlay();">RePlay</button></div>';        
    }else{
    cactusPosition -= 20;
    cactus.style.left = cactusPosition + 'px';    
    }
  },30);

  console.log("PO " + position)
  if(position == 1500){
    
  }else{
    setTimeout(createCactus, randomTime );    
  } 
 
}

createCactus();
console.log(position)
console.log(randomTime)
document.addEventListener('keyup', handleKeyUp);

function rePlay(){  // recarrega pagina ao aperta play
  window.location.reload();
  
}

function contadorLetreiro(){
total = total * 2,1
  document.getElementById("letreiro").innerHTML = total;
}

