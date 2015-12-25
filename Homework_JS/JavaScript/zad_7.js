function calc(){
	var sel = document.getElementById('sel');
	var value = document.getElementById('val').value;
	var result = document.getElementById('res');

	if(sel.options[sel.selectedIndex].text == 'kg'){
		
		result.innerHTML = value * 2.20462262 + ' lb';
		
	}else{
		
		result.innerHTML = value / 2.20462262 + ' kg';
		
	}
}
