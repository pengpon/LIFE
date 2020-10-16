


function close () {
document.getElementById("ham").style.display='none';
	 
}


function open (){



	document.getElementById("ham").style.display="";
	// alert("123");
}


function ini() {
	document.getElementById("ham").style.display='none';
	// document.getElementById("ham").style.display="none";
	window.onscroll=whitebar;
	var btn2= document.getElementById("span2");
	btn2.onclick = open;

	var btn1= document.getElementById("close");
	btn1.onclick = close;
	// document.getElementById("ham_button").style.backgroundColor="white";

}

function whitebar() {
	document.getElementById("ham_button").style.backgroundColor="white";
	
}

// document.getElementById("ham").style.visibility="visible";

window.onload=ini;

// window.scroll=whitebar;