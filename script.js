function clock(){
let date = new Date();
document.getElementById("time").innerHTML =
date.toLocaleTimeString();
}

setInterval(clock,1000);
