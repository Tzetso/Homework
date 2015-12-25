function calculateVol(){
	
	var r = document.getElementById('rad').value;
	var volume = (4 / 3) * 3.14 * r * r * r;
	var answear = document.getElementById('vol');
	answear.value = volume;
	
}

