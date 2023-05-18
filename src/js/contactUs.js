function loadData(name){
	if(name == "btn1") {
		document.getElementById("about").innerHTML = "Thank You for join with PayBILL..." ;
	}	
	else if(name == "btn2"){
		document.getElementById("about").innerHTML = "Please join with PayBILL... Then you can get more features...";
	}
	else {
		alert("Invalid!!!");
	}
}