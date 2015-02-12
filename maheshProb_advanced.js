/*7w+5x+3y+2z=num*/
factors = {7:0,5:0,3:0,2:0};
var count;
checkFor(13);
function checkFor(n){
	count = 0;
	factors = {7:0,5:0,3:0,2:0};
	if(n>=7)less(n,7);
	if(n>=5 && n<7)less(n,5);
	if(n>=3 && n<5)less(n,3);
	if(n>=2 && n<3)less(n,2);
	if(count) console.log(count+"\n",factors[7],factors[5],factors[3],factors[2]);
	else console.log(-1);
}

function less(number,prime){
	if(number == 0) {return true;}	
	if(number<2){return false;}
	switch(prime){
			case 7:
				if(less(number - 7,7)) break;
				prime = 5;
			case 5:
				if(less(number - 5,5)) break;
				prime = 3;
			case 3:
				if(less(number - 3,3)) break;
				prime = 2;
			case 2:
				if(less(number - 2,2)) break;
				return false;
		}
	factors[prime]++;++count;return true;
}


/*http://jsfiddle.net/kdesai/u11xj8tu/*/
