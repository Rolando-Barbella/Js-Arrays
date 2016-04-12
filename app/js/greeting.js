module.exports = function (name) {
    console.log('Hello ' + name);
};

///Concat examples
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
///Array join() examples
//1
var names = ['rolando','lucy']
var printNames = names.join(' ');
console.log(printNames);
var name = 'rolando barbella'
//2
var upper = name.split(' ')
	.map(x => x.charAt(0).toUpperCase()+ x.slice(1))
	.join(' ');

console.log(upper)