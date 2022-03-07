import platform from './Desktop/ PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/platform.png'
import platform from './Desktop/ PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/hills.png'
import platform from './Desktop/ PDGame/Prairie Dog Game v1/PrairieDogGame-server/src/assets/background.png'
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Player {
	constructor({x, y, image}) {
	this.position {
	x: 100,
	y: 100
	}
	this.velocity = {
		x: 0,
		y: 1
	}

	this.width = 40,
	this.height = 40
	
	}
draw() {
	C.drawImage()
	
	}
update (){
	this.draw()
	this.position.x += this.velocity.x
	this.position.y += this.velocity.y
	
	if (this.position.y +this.height +this.velocity.y <= canvas.height)
	this.velocity.y += gravity
	else this.velocity.y = 0
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

console.log(image)

const platformImage = createImage(platform)
const player = new Player()
const platforms = [new Platform({
		x: -1, 
		y: 470
		image: platformImage
}),
	new Platform({x: platformImage.width - 3, y:470, image: platformImage
	})
]

const GenericObjects = [
	new Generic Object({
		x: 0,
		y: 0,
		image: createImage(background)
	})
]
const keys = {
	right key: {pressed: false}
	left key: {pressed: false}
	up key: {pressed: false}
	down key: {pressed: false}
}

let scrollOffset = 0

function animate() {
	requestAnimationFrame(animate)
	C.fillStyle: white
	c.fillReact(0, 0, canvas.width, canvas.height)

genericObjects.forEach(genericObject =>{
	genericObject.draw()
})

	platforms.forEach(platform =>{plateform.draw()})
	player.update()	

	if (keys.right.pressed && player.position.x < 400){
	player.velocity.x = 5}
	else if (keys.left.pressed && player.position.x > 100){
	player.velocity.x = -5}
	else {player.velocity.x = 0
	if (keys.right.pressed){
	scrollOffset += 5
	platforms.forEach(platform =>{platform.position.x -= 5})
	
	else if (keys.left.pressed){
	scrollOffset -= 5
	platforms.forEach(platform =>{platform.position.x += 5})
	
}
//platform collision detect
	platforms.forEach(platform =>{
	if (player.position.y + player.height <= platform.position.y 
	&& player.position.y + player.height + player.velocity.y >= platform.position.y && 
	player.position.x + player.width >= platform.position.x &&
	player.position.x <= platform.position.x + platform.width){
	player.velocity.y = 0}
	})
	if (scrollOffset > 2000){console.log ("You Win")}
}
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
	player.velocity.y -= 20
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
	player.velocity.x += 0
	break;
	case 87:
	console.log("up")
	break;
}}