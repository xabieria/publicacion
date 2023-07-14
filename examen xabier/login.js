 

var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

var checkbox = document.getElementById("check")
var boton = document.getElementById("btn")

if(checkbox.checked == true){
    boton.disabled = false;
} else {
    boton.disabled = true;
}




