var mouseEvent= "empty";
var lastPositionX,lastPositionY;


var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");


var color= "red";
var wl= 1;
var width=screen.width;
newwidth=screen.width-70;
newheigth=screen.height-300;
if (width<992) {
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheigth
    document.body.style.overflow="hidden"
}

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
     mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wl;
    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(PositionMouseX, PositionMouseY);
    ctx.stroke();
    }

    lastPositionX = PositionMouseX; 
    lastPositionY = PositionMouseY;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e){
    lastPositionofX=e.touches[0].clientX-canvas.offsetLeft
    lastPositionofY=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e){
    PositionMouseXt=e.touches[0].clientX-canvas.offsetLeft;
    PositionMouseYt=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wl;
    ctx.moveTo(lastPositionofX, lastPositionofY);
    ctx.lineTo(PositionMouseXt, PositionMouseYt);
    ctx.stroke();
    lastPositionofX=PositionMouseXt;
    lastPositionofY=PositionMouseYt;
}
