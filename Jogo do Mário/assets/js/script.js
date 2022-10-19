const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const coin = document.querySelector('.coin');
const audio = document.querySelector('audio');
const main = document.querySelector('main');
const gameBoard = document.querySelector('.game_board');
const score = document.querySelector('.score h1');


const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const coinPosition = coin.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        coin.style.animation = 'none';
        coin.style.left = `${coinPosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';
        
        clouds.style.animation = 'none';
        clouds.style.marginLeft = '700px';
        
        audio.src = 'images/audio_gameover.mp3';
        
        clearInterval(loop)
        clearInterval(scoreTime)
    }
}, 10);

const anotherLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (marioPosition > 80 && pipePosition < 130) {
        
        coin.classList.add('display_coin');
        audio.src = 'images/audio_coin.mp3';
        
    }
    setTimeout(() => {
        coin.classList.remove('display_coin')
    }, 500);
}, 10)

function hide() {
    score.innerHTML = 'SCORE: '+pontuation
    main.style.display = 'none';
    gameBoard.style.display = 'block';
}
let pontuation = 0;
const scoreTime = setInterval(()=>{
    pontuation++;
    score.innerHTML = 'SCORE: '+pontuation;
}, 1550)

document.addEventListener('keydown', jump);
main.addEventListener('click', hide);
