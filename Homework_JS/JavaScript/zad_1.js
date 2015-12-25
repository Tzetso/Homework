var array = [1, 'a', 2, 5, 3, 4, 'a', 's', 'd', 4, 8, 11, 15, 3, 3];

dupli(array);
function dupli(array){
	
	var arrayTwo = [];
	var maxElement = array[0];
	var maxCount = 1;
	
	for(var i = 0;i < array.length;i++){
		
		var element = array[i];
		if(arrayTwo[element] == undefined){
			
			arrayTwo[element] = 1;
			
		}else{
			
			arrayTwo[element]++;

		}
		
		if(arrayTwo[element] > maxCount){
			
			maxElement = element;
			maxCount = arrayTwo[element];
			
		}
	}
	
	console.log(maxElement, '(', maxCount,' times)');
}