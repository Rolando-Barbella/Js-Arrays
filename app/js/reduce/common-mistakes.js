var data = ['vote1','vote2','vote1','vote2'];
function	reducer(accumulator,value,index,array){
	if(accumulator[value]){
		accumulator[value] = accumulator[value] +1;
	}else{
		accumulator[value] = 1;
	}
	return accumulator;
}

var tally = data.reduce(reducer,{});//{ vote1: 2, vote2: 2 }

