//Array join() examples//

//Example 1 - basic
var names = ['Rolando','Lucy']
var printNames = names.join(' ');//Rolando Lucy

//Example 2 - more advance
var name = 'rolando barbella'
var upper = name.split(' ')//["rolando", "barbella"]
	.map(x => x.charAt(0).toUpperCase()+ x.slice(1))//["Rolando", "Barbella"]
	.join(' ');//Rolando Barbella
