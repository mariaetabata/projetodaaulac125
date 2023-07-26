var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

//função que constroi, por exemplo, um canvas, um video, etc..
function setup(){
 video = createCapture(VIDEO);
 video.size(550, 500);
 
 canvas = createCanvas(600, 500);
 canvas.position(560, 70);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("pose Net foi iniciado");
}
function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX)
}
}
//função desenho, desenha os elementos na tela
function draw(){
    background("#0000ff");
    fill("white");
    stroke("white");
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference + "px";
}

