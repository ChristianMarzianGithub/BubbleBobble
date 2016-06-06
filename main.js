function init(event){

	document.getElementById("yMouse").innerHTML = event.clientY;
    document.getElementById("xMouse").innerHTML = event.clientX;

	
    ab = document.getElementById("leinwand");
	circ = ab.getContext("2d");
	circ.clearRect(0,0,1000,1000);
	circ.beginPath();
	circ.moveTo(500,500);
	circ.lineTo(event.clientX,400);	
	circ.stroke();
}