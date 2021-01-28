


# Project's name
no name game

## Description
In this game there's a pelican swimming in the lake. The player should move this pelican horizontally from one side to another. Above the pelican there's a sky full of twinkling stars. The stars are falling down one by one. The pelican must cath all the falling stars. The scoreboard shows how many stars the pelican managed to cath. One missed star, is end of game.


## MVP (DOM - CANVAS)
1) stars twinkling
2) stars fall down randomly one by one
3) pelican moves from left to right to cath the stars
5) score registration during the game

(OPTIONAL) - obstacle ––> bird appears from right to left and poops ––> pelican must avoid it
(OPTIONAL) - 1 missed star, than moon falls down which means end of game
(OPTIONAL) - increasing spead of the falling stars after some time
(OPTIONAL) - pelican's beak open and closes to catch the stars


## Backlog


## Data structure
main.js() {}
buildCanvas
buildStartScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}

starsJS.js
star () {}
fall () {}
twinkle () {}
missed () {}

pelicanJS.js
pelican() {}
move() {}
beak () {}

scoreJS.js
score.() {}


## States y States Transitions
startScreen
gameScreen
gameOverScreen

## Task
(startScreen)
1] set canvas and add background color
2] timeOut() {} for intro game (first)
3] timeOut() {} for button game (second)
4] addEventListner() {} to switch to the gameScreen

(gameScreen)
A]
1] draw dots for stars
2] make class star and create instances 
3] put the instances (of class star) in an array and make a function so that the stars can change between two colors (twinnkle) ––> (function inside class)
4] make function this instances (of class star) move down the y randomly ––> (function inside class)

B]
1] make class pelican and create an instance 
2] function for moving pelican from right to left ––> (function inside class)

C]
1] function that calculates the score whenever star reaches the pelican beak, when star dont reaches the pelican beak  ––> message end of game or moon falls down and redirected to the gameOverScreen

(gameOverScreen)
A]
1]  gameOverScreen shows the end score


<!-- 
main - add pictures in images
main - build startScreen html & css
main - build GameScreen html & css
main - build GameOverScreen html & css
main - DOM js
main - add EventListener

stars - draw or images
stars - twinkle
stars - fall

pelican - draw or images
pelican - move
pelicanbeak - move

score - update
 -->

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)