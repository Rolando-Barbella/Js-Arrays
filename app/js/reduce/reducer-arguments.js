function	reducer(accumulator,value,index,array){
	var intermediaryValue = accumulator + value;
	if(index === array.length -1){
		return intermediaryValue / array.length;
	}
	return accumulator + value;
}

var data = [1,2,3,3,4,5,3];
var mean = data.reduce(reducer,0);//3

