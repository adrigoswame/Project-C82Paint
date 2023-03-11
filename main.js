var mouseEvent="empty";

canvas = document.getElementById("myCanvas");
var current_position_of_mouse_x;
var current_position_of_mouse_y;
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 7;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    console.log("my_mousedown");
    color = document.getElementById("color").Value;
    width_of_line = document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown"
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    console.log("my_mousemove");
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown")
     { 
         console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI); 
        ctx.stroke();
        
    }

}
canvas.addEventListener("mouseup",my_mouseup);

    function my_mouseup(e){

    mouseEvent="mouseup";


    }

    canvas.addEventListener("mouseleave",my_mouseleave);

    function my_mouseleave(e){

    mouseEvent="mouseleave";
    

    }


        
              

    function clearArea() { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }