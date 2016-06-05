var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

var initialValue = {};

var reducer = function(tally,vote){
	if(!tally[vote]){
		tally[vote] = 1;
	}else{
		tally[vote] = tally[vote] +1;
	}
	return tally;
}

var result = votes.reduce(reducer,initialValue); //{ angular: 3, react: 4, ember: 1, vanilla: 1 }
