noseX = 0;
noseY = 0;

function preload(){
   moustache = loadImage("moustache.png");
}

function draw(){
    image(video, 0, 0, 350, 300);
    image(moustache, noseX, noseY, 30, 30);
}

function setup(){
 canvas = createCanvas(350,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300 , 300);
 video.hide();

 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on("pose", gotPoses);
}

function take_snapshot(){
    save("my_funny_pic");
}

function modelLoaded(){
    console.log("poseNet is working!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x+15;
        noseY = results[0].pose.nose.y;
    }
}
