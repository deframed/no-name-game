// background starScreen
let canvas = document.querySelector('canvas');
canvas.style.backgroundColor =  '#16193b';

// elements gameScreen
let pelicanImg = document.createElement('img');
pelicanImg.src = 'images/imageedit_3_2691217019.gif';

let grassImg = document.createElement('img');
grassImg.src = 'images/pnghut_silhouette-royalty-free-photography-clip-art-royaltyfree-disorderly-grass.png';

// audio background
let audio = new Audio('images/0105. Be Like a Child - AShamaluevMusic.mp3');
audio.volume = 0.4;

// elements draw 
let ctx = canvas.getContext('2d')

// elements startScreen
let titleGame = document.querySelector('h1');
let introGame = document.querySelector('p');
let buttonStart = document.querySelector('.btn');
let buttonAgain = document.querySelector('.btn-again');

// elements movement
let intervalID= 0; 
let incrementY = 30; 
let incrementX = 3;
let score = 0;

// defined pelican coordinates at beginning of the game (startScreen)
let pelicanX = 305;
let pelicanY = 340; 
let incrementPelican = 5; 

// defined keys for movement
let isRightArrow = false;
let isLeftArrow = false;

// pelican measurements
let pelicanWidth = 130;
let pelicanHeight = 130;

// clear elements from screen
function clearElem(elem) {
    let invisible = elem.style.display = 'none';
    return invisible;
};
// go to GameScreen background 
function switchScreen() {
    canvas.style.backgroundColor = 'transparent';
    canvas.style.opacity = 1
    canvas.style.background = 'url("./images/nacht-illustratie-met-volle-maan-en-sterren_104785-352.jpg") no-repeat';
    canvas.style.backgroundSize = "cover";     
};

// DEFINITION GAME CONTROL KEYS
// handle arrow key click events left to right
document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.key == "ArrowRight") { 
       isRightArrow = true;
       isLeftArrow = false;
    }
    else if (event.keyCode == 37 || event.key == "ArrowLeft") {
       isRightArrow = false;
       isLeftArrow = true;
    }
});
// when you release the keys, disable movement
document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
});

// draw pelican function  
function movePelican() {
// draw pelican - make pelican visible 
    ctx.drawImage(pelicanImg, pelicanX, pelicanY, pelicanWidth, pelicanHeight); // image width and height is 170 , 170
    ctx.drawImage(grassImg, 0, 0, 700, 575);    // image width and height is 170 , 170

// pelican moves horizontally within the canvas 
    if (isRightArrow && (pelicanX + 170 < canvas.width)) {  // pelicanX = left upper point img & 170 is total width img
       pelicanX += incrementPelican;                       // position pelican incremented with defined value above (1 step = 13 px)  
    }

    else if (isLeftArrow && pelicanX > 0) {
        pelicanX -= incrementPelican;
    }
};

// create a random coordinate for star and put in an empty array
let allStars = []; 

function multiplyAndDrawStar() {
// 1 star falling only from the coordinates set randomly below

    for (let i = 0; i < 1; i++) {

        let r = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        let x = Math.floor(Math.random() * (670 - 30 + 1) + 2);
        let y = Math.floor(Math.random() * (175 - 30 + 1) + 2);

        let star = new Star(x, y, r, "whitesmoke");
        allStars.push(star);
    }
// function for this set star to fall down
    animate();
};

function starsMoving(arr) {

    if (arr.length === 0) {
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].positionY ++
       
// check if randomly picked star has reached a certain position
        if (arr[i].y == 4500) {
            gameOver(); 
        }
        arr[i].drawStar(arr[i]);   
    }
};

function animate() {
   let intervalID =  setInterval(() => {     

        audio.play();
       
        ctx.clearRect(0, 0, canvas.width, canvas.height)    // clears the whole canvas
        switchScreen();
        movePelican();

// show the score
    ctx.font = 'lighter 20px Raleway'; 
    ctx.fillText('\u2726  ' + score, 40, 450);


        for (let i = 0; i < allStars.length; i++) {
            // star from array is beeing created
              allStars[i].drawStar()

             // condition for star moving down i step
             if (allStars[i].positionY + allStars[i].starRadius <= canvas.height) {
               allStars[i].positionY++; 

             // condition for star is catched by the pelican ––> score goes up by 1
                    if ((allStars[i].positionX > pelicanX 
                        && allStars[i].positionX + allStars[i].starRadius < pelicanX + pelicanWidth) && 
                        (allStars[i].positionY + allStars[i].starRadius > pelicanY)) {
                        
                        score++;
                        

                        // place the star at some random position outside the canvas
                        allStars[i].positionY = 2000
                    }     
             }
            
              // condition for missed star
            else if (allStars[i].positionY + allStars[i].starRadius >= canvas.height && 
                (allStars[i].positionY + allStars[i].starRadius < 2000 ) ) {
                clearInterval(intervalID);

                audio.pause();
                audio.currentTime = 0;
                
                gameOver();  
                
            }
            
            // add new stars below
            // check if the previus star has reached certain y co-ordinate
            if (allStars[i].positionY == 200) {
                let r = Math.floor(Math.random() * (4 - 2 + 1) + 2);
                let x = Math.floor(Math.random() * (670 - 30 + 1) + 2);
                let y = Math.floor(Math.random() * (175 - 30 + 1) + 2);
    
                let star = new Star(x, y, r, "whitesmoke");
                allStars.push(star);
            }
        }
    }, 15);
}

function gameOver() {
        ctx.font = 'lighter 25px Raleway'; 
        ctx.fillText('game over', 370, 210);


        setTimeout(function() {
            GameOverScreen();

        }, 2000)       
};   

function GameOverScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#16193b'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    buttonAgain.style.visibility = 'visible';
    buttonAgain.style.display = 'block';
};

// visibility ON function
function showElem(elem) {
    let visible = elem.style.visibility = 'visible';
    return visible;
};

// setTimeout for title 
setTimeout(function() {
    showElem(titleGame);
}, 500);

// setTimeout for intro text
setTimeout(function() {
    showElem(introGame);
}, 1000);

// setTimeout for the start button
setTimeout(function() {
    showElem(buttonStart);
}, 2000);

// addEventListener to switch from startScreen to gameScreen
buttonStart.addEventListener('click', () => {
    clearElem(titleGame);
    clearElem(introGame);
    clearElem(buttonStart);
    switchScreen();
    multiplyAndDrawStar();   
});

buttonAgain.addEventListener('click', () => {      
    clearElem(buttonAgain);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    score = 0;
    allStars = []; 
    pelicanX = 305;
    switchScreen(); 
    multiplyAndDrawStar();   
}); 



