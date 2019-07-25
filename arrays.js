/*Arrays*/

	/*Min value in array*/
	function minValueArray(a){
		let temp = a[0];

			for(let i = 0; i < a.length; i++){
				if(temp >= a[i]){
				temp = a[i];
				}
			}
		
		return temp;
	}
	/*Max value in array */
	function maxValueArray(a){
		let temp = a[0];

		for(let i = 0; i < a.length; i++){
			if(temp <= a[i]){
			temp = a[i];
			}
		}
		return temp;	
	}
	/*Max index value in array */
	function maxIndexValue(a){
		let value = a[0];
		let temp = 0;

		for(let i = 0; i < a.length; i++){
			if(value <= a[i]){
			value = a[i];
			temp = i;
			}
		}
		return temp;
	}
	/*Min index value in array*/
	function minIndexValue(a){
		let value = a[0];
		let temp = 0;

		for(let i = 0; i < a.length; i++){
			if(value >= a[i]){
				value = a[i];
				temp = i;
			}
		}
		return temp;
	}
	/*Sum odd values*/
	function sumOddValues(a){
		let sum = 0;
		
		for(let i = 0; i < a.length; i++)
		{
			if(i%2 !== 0){
				sum += a[i];
			}
		}
		return sum;
	}
	/*Count odd values*/
	function countOddValues(a){
		let count = 0;
		
		for(let i = 0; i < a.length; i++)
		{
			if(a[i]%2 !== 0){
				count++;
			}
		}
		return count;
	}
	/*Reverse array*/
	function reverseArray(a){
		let temp = 0;
		
		for(let i = 0; i < a.length-i-1; i++){
				temp = a[i];
				a[i] = a[a.length-i-1];
				a[a.length-i-1] = temp;
		}
		return a;
	}
	/*Change place array*/
	function changePlaceArray(){
		let a = [1, 2, 3, 4, 5];
		let temp = 0;
		let med = parseInt(a.length/2);
		
		for(let i = 0; i < med; i++){
			if(a.length%2 === 0){
				temp = a[i];
				a[i] = a[med+i];
				a[med+i] = temp;
			}else{
				temp = a[i];
				a[i] = a[med+i+1];
				a[med+i+1] = temp;
			}
		}
		
		return a;
		
	}