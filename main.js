x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speakData="";
ToNumber=0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple=loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    ToNumber= Number(content);
    if(Number.isInteger(ToNumber)){
      document.getElementById("status").innerHTML="Speech has been recognised as  " + content;
      draw_apple="set";
    }
    else{
      document.getElementById("status"),innerHTML= " The speech hoasn't been recognised as a number";
    }

}

function setup() {
screen_width=window.innerWidth;
acreen_height=window.innerHeight; 
canvas=createCanvas(800,500);
canvas.position(0,150)                              
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1; i<=ToNumber; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
