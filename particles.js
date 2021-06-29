let particleArray = [];

class Particles{
	constructor(){
		this.x = player.x;
		this.y = player.y+player.height/2;
		this.size = Math.random() * 7 +3;
		this.speedY = (Math.random() * 1)-0.5;
		this.color = 'hsl('+hue+',100%,50%)';
	}
	update(){
		this.x -= gameSpeed;
		this.y += this.speedY;
	}
	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
		ctx.fill();
	}
}

function handleParticles() {
	if (spacePressed) {
	particleArray.unshift(new Particles);
	for (var i=0;i<particleArray.length; i++) {
		particleArray[i].update();
		particleArray[i].draw();
	}
	if (particleArray.length>200) {
		for (var i = 0; i < particleArray.length; i++) {
			particleArray.pop(particleArray[i]);
		}
	}}
}