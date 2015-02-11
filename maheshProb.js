/*7w+5x+3y+2z=num*/
factors = {7:0,5:0,3:0,2:0};

checkFor(10);
function checkFor(n){
	factors = {7:0,5:0,3:0,2:0};
	if(n>=7)less(n,7,0);
	if(n>=5 && n<7)less(n,5,0);
	if(n>=3 && n<5)less(n,3,0);
	if(n>=2 && n<3)less(n,2,0);
	if(7*factors[7]+5*factors[5]+3*factors[3]+2*factors[2]==n){console.log(factors[7]+factors[5]+factors[3]+factors[2]);}
	else console.log(-1);
	console.log(factors[7],factors[5],factors[3],factors[2]);
}

function less(number,prime,count){
	if(number == 0) {return true}	
	if(prime>number){return false;}
	else
	factors[prime]++;
	switch(prime){
			case 7:
				if(less(number - prime,7,count)) return true;
				if(less(number - prime,5,count)) return true;
				if(less(number - prime,3,count)) return true;
				if(less(number - prime,2,count)) return true;
				
			case 5:
				if(less(number - prime,5,count)) return true;
				if(less(number - prime,3,count)) return true;
				if(less(number - prime,2,count)) return true;
				
			case 3:
				if(less(number - prime,3,count)) return true;
				if(less(number - prime,2,count)) return true;
			case 2:
				if(less(number-prime,2,count)) return true;
		}
	factors[prime]--;
	
}
