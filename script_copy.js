
    canvas.style.background = 'url("./images/nacht-illustratie-met-volle-maan-en-sterren_104785-352.jpg") no-repeat';
    canvas.style.backgroundSize = "cover"; 



// function to make your game screen ready
function startGame(){
    canvas.style.background.display = 'block';
    buttonStart.style.display = 'none';
    introGame.style.display = 'none';
    titleGame.style.display = 'none';

// start animation after 0.5 sec
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 500)
}
// while loading page, hide background image
window.addEventListener('load', () => {
    canvas.style.background.display = 'none'

// start click event listener
startBtn.addEventListener('click', () => {
        startGame()
    })

})

let canvas = document.querySelector('canvas');
canvas.style.backgroundColor = '#16193b';
let ctx = canvas.getContext('2d')

let titleGame = document.querySelector('h1');
let introGame = document.querySelector('p');
let buttonStart = document.querySelector('.btn');

let pelicanImg = document.createElement('img')
pelicanImg.src = 'images/kisspng-pelican-bird-5b1e562e75a129.2236168915287147984818.png';


// clear StartScreen
function clearElem(elem) {
    let invisible = elem.style.display = 'none';
    return invisible;
};

// go ToGameScreen function
function switchScreen() {
    canvas.style.background = 'url("./images/nacht-illustratie-met-volle-maan-en-sterren_104785-352.jpg") no-repeat';
    canvas.style.backgroundSize = "cover";  
    }

//handle arrow key click events here
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

//draw pelican function  =============================================> TO DO
let incrementPelican = 3;  

function movePelican() {
    ctx.drawImage(pelicanImg, 350, 300, 170, 170);

// pelican moves horizontally within the canvas stays
if (isRightArrow && (pelicanX + pelican.width < canvas.width)) {
    pelicanX += incrementPelican;
    if (isRightArrow && (pelicanX + pelican.width === canvas.width)) {
        ctx.drawImage.rotate(degrees * Math.PI/180);
    }
}
if (isLeftArrow && pelicanX > 0) {
    pelicanX -= incrementPelican;
    if (isLeftArrow && pelicanX === 0) {
        ctx.drawImage.rotate(degrees * Math.PI/180);
    }
}
};

// draw stars function
let allStars = []; 

function multiplyAndDrawStar() {
    for (let i = 0; i < 40; i++) {

        let r = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        let x = Math.floor(Math.random() * (670 - 30 + 1) + 2);
        let y = Math.floor(Math.random() * (175 - 30 + 1) + 2);

        let star = new Star(x, y, r, "whitesmoke");
        allStars.push(star);
    }
        allStars.forEach(function(elem) {
        elem.drawStar(elem);   
    })
};


// loop over a allStars array and put them in an empty array
// make stars move down along the y one step
let gameOver = false;

function starsMoving(arr) {

    if (arr.length === 0) {
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].positionY)
        arr[i].positionY ++
        console.log(arr[i].positionY)
        // check if randomly picked star has reached a certain position
        if (arr[i].y == 425) {
            return true;
        }
        arr[i].drawStar(arr[i]);   
    }
    return false;
};

let intervalID= 0; 
let incrementY = 3;
let incrementX = 3;
let score = 0;

function messageWin() {
    console.log("pelican has had enough snacks for now!");
    console.log("thank you!");
};

// loop animation star clear after every step
// check for bottom

setInterval((arr) => {      //=================================> CHECK: score, stars falling, catched, missed
    // show the score
    ctx.font = '17px sans-serif';
    ctx.fillText(score + ' stars', 50, 450);

    for (let i = 0; i < arr.length; i++) {
        
         // condition for star moving down
         if (positionY + starRadius < canvas.height) {
           incrementY ++;
         // condition for star is catched by the pelican ––> score goes up by 1
         if (positionX > pelicanX && positionX < pelicanX + pelican.width) {
           score++;
          }
        // condition for missed star
        else if (!(positionX > pelicanX && positionX < pelicanX + pelican.width)) {
            clearInterval(intervalID)
            gameOver();
          }
         // condition if all stars are catched
         else {
            messageWin();
         }
    }    
}
return false;
}, 500);

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

function multiplyAndDrawStar() {
    // 1 star falling only from the coordinates set randomly below
    
        for (let i = 0; i < 1; i++) {
    
            let r = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            let x = Math.floor(Math.random() * (670 - 30 + 1) + 2);
            let y = Math.floor(Math.random() * (175 - 30 + 1) + 2);
    
            let star = new Star(x, y, r, "whitesmoke");
            allStars.push(star);
        }
    // function for all set stars to fall down
        animate();
        /*
            allStars.forEach(function(elem) {
            elem.drawStar(elem);   
        })
        */ 
       // TODO: Cannot loop over and print the stars here : Manish 
    };






 
        // ctx.beginPath()
        // ctx.arc(signX, signY, signRadius, 0, 2 * Math.PI)
        // ctx.strokeStyle = "whitesmoke"
        // ctx.stroke()
        // ctx.fillStyle = "whitesmoke"
        // ctx.fill()
        // ctx.shadowOffsetY = 40;
        // ctx.shadowBlur = 50;
        // ctx.shadowBlur = 20;
        // ctx.closePath()
    