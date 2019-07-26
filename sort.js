function bubbleSort(a){
	let temp = 0;
	
	for(let i = a.length-1; i > 0; i--){
		for(let j = 0; j < i; j++){
				if(a[j] > a[j+1]){
					temp = a[j];
					a[j] = a[j+1];
					a[j+1] = temp;
				}
		}	
		console.log(a);
	}
	return a;
}