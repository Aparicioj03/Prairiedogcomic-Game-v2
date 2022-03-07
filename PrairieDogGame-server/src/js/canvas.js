import platform from './Desktop/PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/platform.png'
import hills from './Desktop/PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/hills.png'
import background from './Desktop/PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/background.png'
import platformSmallTall from './Desktop/PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/platformSmallTall.png'
import PDSprite from './Desktop/PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/PDSprite.png'

const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

const gravity = 1.5

class Player {
	constructor({x, y, image}) {
	this.speed = 10
	this.position {
	x: 100,
	y: 100
	}
	this.velocity = {
		x: 0,
		y: 0
	}

	this.width = 144,
	this.height = 144
	
	this.image = createImage(PDSprite)
	this.frames = 0
	}
draw() {
	C.drawImage(
	this.Image, 
	0,
	0,
	288px,
	288px,
	this.position.x, 
	this.position.y, 
	this.width, 
	this.height)
	
	}
update (){
	this.draw()
	this.position.x += this.velocity.x
	this.position.y += this.velocity.y
	
	if (this.position.y +this.height +this.velocity.y <= canvas.height)
	this.velocity.y += gravity
	else this.velocity.y = -10
	}
}
class Platforms{
	constructor ({x, y, Image}){
	this.position = {
		x,
		y}

	this.image = image
	this.width = image.width
	this.height = image.height

	}
draw(){
	C.drawImage(this.Image, this.position.x, this.position.y)
	}
}
class GenericObjects{
	constructor ({x, y, Image}){
	this.position = {
		x,
		y}

	this.image = image
	this.width = image.width
	this.height = image.height

	}

function createImage(imageSrc){
const image = new Image ()
imge.src = imageSrc
return image
}

let platformImage = createImage(platform)
let platformSmallTallImage = create(platformSmallTall)

let player = new Player()
let platforms = [
]

let GenericObjects = [
	
]

const keys = {
	right key: {pressed: false}
	left key: {pressed: false}
	up key: {pressed: false}
	down key: {pressed: false}
}

let scrollOffset = 0

function init(){

platformImage = createImage(platform)
player = new Player()
platforms = [
	new Platform({
		x: platformImage.width *4 + 300 - 2 + platformImage.width - platformSmallTallImage,.width 
		y: 270, image: createImage(platformSmallTall)
}),
	new Platform({
		x: -1, 
		y: 470
		image: platformImage
}),
	new Platform({x: platformImage.width - 3, y: 470, image: platformImage}),
	new Platform({x: platformImage.width *2 + 100, y: 470, image: platformImage}),
	new Platform({x: platformImage.width *3 + 300, y: 470, image: platformImage}),
	new Platform({x: platformImage.width *4 + 300 - 2, y: 470, image: platformImage}),
	new Platform({x: platformImage.width *5 + 700 - 2, y: 470, image: platformImage})

]

GenericObjects = [
	new Generic Object({
		x: -1,
		y: -1,
		image: createImage(background)
	})
GenericObjects = [
	new Generic Object({
		x: -1,
		y: -1,
		image: createImage(hills)
	})
]

scrollOffset = 0
}

function animate() {
	requestAnimationFrame(animate)
	C.fillStyle: white
	c.fillReact(0, 0, canvas.width, canvas.height)

genericObjects.forEach(genericObject =>{
	genericObject.draw()
})

	platforms.forEach(platform =>{plateform.draw()
})
	player.update()	

	if (keys.right.pressed && player.position.x < 400){
	player.velocity.x = player.speed}
	else if ((keys.left.pressed && player.position.x > 100)
	|| keys.left.pressed && srollOffset === 0 && player.position.x > 0) {

	player.velocity.x = -player.speed}
	else {player.velocity.x = 0
	if (keys.right.pressed){
	scrollOffset += player.speed
	platforms.forEach(platform =>{platform.position.x -= player.speed})
	genericObject.forEach (genericObject => {
	genericObject.position.x -= player.speed * 0.66})
	
	else if (keys.left.pressed && scrollOffset > 0) {
	scrollOffset -= player.speed
	platforms.forEach(platform => {
	platform.position.x += player.speed})
	genericObject.forEach (genericObject => {
	genericObject.position.x += player.speed * 0.66})
	
}
//platform collision detect
	platforms.forEach(platform =>{
	if (player.position.y + player.height <= platform.position.y 
	&& player.position.y + player.height + player.velocity.y >= platform.position.y && 
	player.position.x + player.width >= platform.position.x &&
	player.position.x <= platform.position.x + platform.width){
	player.velocity.y = 0}
	})

// win condition
	if (scrollOffset > platformImage.width *5 + 300 - 2){console.log ("You Win")}

// lose condition
	if (player.position.y > canvas.height){
	init()}
}

init()
animate()
add eventListener('keydown', ({keycode}) =>{
}

//console.log(keycode)
switch (keycode){
	case 65:
	console.log("left")
	keys.left.pressed = true	
	break;
	case 83:
	console.log("down")
	break;
	case 68:
	console.log("right")
	keys.right.pressed = true
	break;
	case 87:
	console.log("up")
	player.velocity.y -= 25
	break;
}}
add eventListener('keyup', ({keycode}) =>{
}

//console.log(keycode)
switch (keycode){
	case 65:
	console.log("left")
	keys.left.pressed = false
	break;
	case 83:
	console.log("down")
	break;
	case 68:
	console.log("right")
	keys.right.pressed = false
	break;
	case 87:
	console.log("up")
	break;
}}