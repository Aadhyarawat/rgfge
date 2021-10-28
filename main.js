x = 0;
y=0;
draw_ballon="";
screen_width=0;
screen_heigth=0;
ballon="";
speak_data="";
to_number=0;

function preload()
{
    ballon=loadImage("ballon.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recogonize as : "+content;
    to_number=Number(content);
    if(Number.isInteger(to_number))
    {
    
        document.getElementById("status").innerHTML="Started to drawing a ballon";
        draw_ballon="set";
    }
else{
    document.getElementById("status").innerHTML="The speech has not reconized the number";
}
}
function setup()
{
    screen_width=window.innerWidth;
    screen_heigth=window.innerHeight;
    canvas=createCanvas(screen_width,screen_heigth-150);
canvas.position(0,150);
}

function draw()
{
    if(draw_ballon=="set")
    {
        for(var i = 1;i<=to_number;i++)
        {
            x=Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
            image(ballon,x,y,50,50);
        }
       
        document.getElementById("status").innerHTML=to_number+"Ballons drawn";
        speak_data=to_number+"ballons drawn";
        speak();
        draw_ballon="";
    }
   
   
}
function speak()
{var synth=window.SpeechSynthesis;
    var utterThis =new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
speak_data="";
}
