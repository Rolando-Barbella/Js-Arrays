module.exports = function (name) {
    console.log('Hello ' + name);
};

///Concat Exemples
//1
var items = [1,2];

var newItems = items.concat(3,4,5,'hello',[1,2],[3,4]);

console.log(newItems);
//2
var people = [{name:'Shane'},{name:'Sally'}];

var people2 = [{name:'Rolando'},{name:'Pedro'}];

people
	.concat(people2)
	.forEach(function(person){
		console.log(person.name)
	})
///Array Join()
var names = ['Rolando','Lucy']
console.log(names.join(' '));

