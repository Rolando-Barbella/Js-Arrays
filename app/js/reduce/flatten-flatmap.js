var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var flattenedData = data.reduce(function(acc,value){
	return acc.concat(value);
},[])

console.log(flattenedData);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var starts = input.reduce(function(acc,value){
	value.cast.forEach(function(start){
		if(acc.indexOf(start) === -1){
			acc.push(start);
		}
	})
	return acc;
},[])

/*console.log(starts)
*/
var data2 = [1,2,3,4,'5'];

var sum = data2.reduceRight(function(acc,value,index){
	console.log(index);
	return acc + value;

},0);

console.log(sum)