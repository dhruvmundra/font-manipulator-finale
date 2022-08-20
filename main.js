difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(560,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    background('orange');
    document.getElementById('font_size').innerHTML="fontsize of the text= "+difference+"px";
    textSize(difference);
    fill("wheat");
    text("cool",50,400);
}
function gotPoses(results){
    console.log(results);
    if(results.length>0){
        console.log("inside the got poses")
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        console.log("leftwristX"+leftwristX+" rightwristX"+rightwristX)
        difference=floor(leftwristX-rightwristX)
        console.log("diffeence=",difference)
    }
}