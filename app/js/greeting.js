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
//IndexOf
//1
var brothers = ['rolando','eduardo','alejandro'];
var eduardoExists = brothers.indexOf('eduardo')>-1;

console.log(eduardoExists);
console.log(brothers.indexOf('eduardo'));
console.log(brothers.indexOf('eduardo',1));

if(!eduardoExists){
	brothers.push('eduardo');
}
//2
var rolando = {name:'Rolando'};
var shane = {name:'Shane'};
var jhon = {name:'Jhon'};

var coders = [rolando,shane,jhon]

console.log(coders.indexOf(jhon));
//3
var brothers = [{name:'Rolando'},{name:'Eduardo'},{name:'Alejandro'}];
var age = ['28','40'];
//4
var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event =>{
	var ext = require('path').extname(event.file);
	return whitelist.indexOf(ext) >-1;
});

console.log(filtered);

//Array slice()
var person = {name:'rolando-barbella'};
var items = [1,2,3,4,5,person];
var filters = {
	'deslugfy':x=>x.replace('-',''),
	'uppercase':x=>x.toUpperCase()
}
var input = 'name | deslugfy | uppercase';//ROLANDO BARBELLA
var sections = input.split('|').map(x=>x.trim());//[name,deslugify,uppercase]
var ref = person[sections[0]];//rolando-barbella
var output   = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);


console.log(output);

var copy = items.slice();
copy[5].name = 'George'

console.log(copy);
console.log(copy.slice(0,1));
console.log(copy.slice(1,-1));

