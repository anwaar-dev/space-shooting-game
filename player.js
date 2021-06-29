class Player {
	constructor(){
		this.x = 150;
		this.y = 200;
		this.vy = 0;
		this.width = 20;
		this.height = 20;
		this.weight = 1;
	}
	update(){
		let curve = Math.sin(angle) * 20;
		if (this.y>canvas.height-(this.height*3)+curve){
			this.y = canvas.height-(this.height*3)+curve;
			this.vy = 0;
		}else{
		this.vy += this.weight;
		this.y += this.vy;
		this.vy*=0.9;
		}
		if (this.y<0+this.height){
			this.y=this.height;
			this.vy =0;
		}
		if (spacePressed&&this.y>this.height*3) this.flap();
	}
	draw(){
		ctx.fillStyle = 'hsl('+hue+',100%,50%)';
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	flap(){
		this.vy -= 2;
	}
}

const player = new Player();