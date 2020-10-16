


function close () {
document.getElementById("ham").style.display='none';
	 
}


function open (){



	document.getElementById("ham").style.display="";
	
}


// function lookopen(e){
// 	window.open("https://www.w3schools.com");
// }


function ini() {
	document.getElementById("ham").style.display='none';
	
	window.onscroll=whitebar;
	var btn2= document.getElementById("span2");
	btn2.onclick = open;

	var btn1= document.getElementById("close");
	btn1.onclick = close;

	var look=document.getElmentsByClassName("hotspots_trigger");
	look.onclick = lookopen;
	

}

function whitebar() {
	document.getElementById("ham_button").style.backgroundColor="white";
	
}



window.onload=ini;

