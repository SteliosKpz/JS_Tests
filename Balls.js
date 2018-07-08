/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var  height = canvas.height = window.innerHeight;
var balls = [];
var i;

function random(min,max){
    var num = Math.floor(Math.random()*(max-min + 1))+min;
    return num;
    
    
}
//Object ball constructor
function Ball(x,y,velX,velY,color,size){
    this.x=x;
    this.y=y;
    this.velX=velX;
    this.velY=velY;
    this.color=color;
    this.size=size;
    
    
}
//Ball draw
Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
    
};
//Ball position
Ball.prototype.update = function(){
    if((this.x+this.size)>=width){
        this.velX = -(this.velX);
            }
    if((this.x-this.size)<=0){
        this.velX = -(this.velX);
            }
    if((this.y+this.size)>=height){
        this.velY = -(this.velY);
            }
    if((this.y-this.size)<=0){
        this.velY = -(this.velY);
    }
    
  this.x += this.velX;
  this.y += this.velY;
    
};
function loop(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    while(balls.length < 25){
        var size = random(10,20);
        var ball = new Ball(
                 random(0 + size,width - size),
                 random(0 + size,height - size),
                 random(-7,7),
                 random(-7,7),
                 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',size
                 );
          balls.push(ball);
         
       
    }
     for(i=0;i<balls.length;i++){
        balls[i].draw();
        balls[i].update();
        
    }
   
    
      requestAnimationFrame(loop);

    
};
loop();

  
