///Array join() examples

//Example 1 - Simple
var names = ['rolando','lucy']
var printNames = names.join(' ');
console.log(printNames);

//Example 2 - More advance
var name = 'rolando barbella'
var upper = name.split(' ')//["rolando", "barbella"]
	.map(x => x.charAt(0).toUpperCase()+ x.slice(1))//["Rolando", "Barbella"]
	.join(' ');//Rolando Barbella
