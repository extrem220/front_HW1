function evenOrOddValue(a, b){
	return (a%2 === 0) ? a * b : a + b;
}

function valueCoordinates(x, y){
	if(x > 0 && y >0){
        return 1;
    }else if(x < 0 && y > 0){
        return 2;
    }else if(x < 0 && y < 0){
        return 3;
    }else if(x > 0 && y < 0){
        return 4;
    }else if(x === 0 && y === 0){
        return 0;
    }else{
        return null;
    }
}

function summPositiveValues(a, b, c){
	let sum = 0;
	
	if(a > 0){
		sum += a;
	}
	
	if(b > 0){
		sum += b;
	}
	
	if(c > 0){
		sum += c;
	}
	
	return sum;
}

function searchMax(a, b, c){
	let mult = (a * b * c) + 3;
    let sum = a + b + c + 3;

    if(a === 0 && b === 0 && c === 0){
		return 3;
	}
	
	return mult > sum ? mult : sum;
}

function ballOfStudent(mark){
	if(mark <= 19){
       return 'F';
    }else if(mark <= 39){
        return 'E';
    }else if(mark <= 59){
        return 'D';
    }else if (mark <= 74){
       return 'C';
    }else if (mark <= 89){
        return 'B';
    }else{
        return 'A';
    }
}

