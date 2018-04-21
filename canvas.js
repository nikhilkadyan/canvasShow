// Defining Variables
var canvas = document.querySelector('canvas');
var c =  canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// // Drawing Rectangles
// c.fillStyle = "crimson";
// c.fillRect(20, 20, 50, 50)

// c.clearRect(30, 30, 30, 30);

// c.fillStyle = "black";
// c.fillRect(35, 35, 20, 20);


// c.fillStyle = "rgba( 255, 255, 0, 0.8)";
// c.fillRect(100, 20, 50, 50);


// c.fillStyle = "rgba(0, 200, 0, 0.8)";
// c.fillRect(180, 20, 50, 50);

// Drawing Circle Randomly

window.requestAnimationFrame(draw);
function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    
    var color = ['#f44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#4CAF50','#FF5722'];

    var colorStyle = color[Math.round(Math.random() * 6)];

    this.draw = function(){

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
        c.strokeStyle = colorStyle;
        c.stroke();
        c.fillStyle = colorStyle;
        c.fill();
    };

    this.update = function(){

        if(this.x + this.radius > innerWidth){
            this.x = 0;
        }
        if(this.y + this.radius < 0){
            this.y = innerHeight;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 120; i++){
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;    
    var dx =  0.7;
    var dy = -(Math.random() + 0.5 ) * 2.5;
    var radius =   (Math.random() + 0.3 ) * 5;



    var circle = new Circle(x, y, radius, dx, dy);
    circleArray.push(circle);
}
console.log(circleArray);
console.log(Math.round(Math.random() * 20));

function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var i = 0; i < circleArray.length;i++){
        circleArray[i].update();
    }
};