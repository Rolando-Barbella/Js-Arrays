module.exports = function (name) {
    console.log('Hello ' + name);
};

//Concat examples
//Example 1 - Simple
var items = [1,2];
var newItems = items.concat(1,2,3,'concat',[4,5],[6,7]); // [1,2,3,'concat',4,5,6,7]

//Example 2 - More advance
var people = [{name:'Mike'},{name:'Billy'}];
var people2 = [{name:'Rolando'},{name:'Pedro'}];
people
	.concat(people2)
	.forEach(function(person){
		return person.name; //Mike Billy Rolando Pedro
	})
/*//IndexOf
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
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
//1
var person = {name:'rolando-barbella'};
var items = [1,2,3,4,5,person];
var copy = items.slice();
copy[5].name = 'George'

console.log(copy);
console.log(copy.slice(0,1));
console.log(copy.slice(1,-1));
//2
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

//Array sort()
//1
var brothers2 = ['Rolando','Eduardo','Ale']
brothers2.sort();
console.log(brothers2);

var items = [10,30,3,20];
var wrongResult = items.sort();

var rightWay = items.sort((a,b)=>a-b);
console.log(rightWay);
console.log(brothers2.sort((a,b)=>b.length - a.length));
//2
var content = [{name:'Rolando',views:1000},{name:'Eduardo',views:2000},{name:'Alejandro',views:4000}];

var list = content
	.sort((a,b)=>b.views - a.views)
	.map(x=>`<li>${x.name}(${x.views})</li>`)
	.join(`\n`);

	var output = `<ul>\n${list}\n</ul>`;

	var container = document.querySelector('#output');
	container.innerHTML = output;

	console.log(list)

	//Array filter()
	//1
var task = [1,2,3,4,5,6];

var filtered = task.filter(x=>x>3);

console.log(filtered);
//2
var people = [{name:'Rolando',pets:['cat','dog']},{name:'Pedro',pets:['horse']},{name:'Luis',pets:[]}];

var filter2 = people.filter(x=>x.pets);
console.log(filter2)
//3
const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

var minViews = 1000;
var searchTerm = 'array';

var filter = lessons
		.filter(x=>x.tags.indexOf(searchTerm)>-1)
		.filter(x =>x.views>minViews)
		.sort((a,b)=>b.views - a.views)
		.map(x =>`<Li>${x.title}</li>`)
		.join('\n');

		console.log(`<ul>${filter}</ul>`);

//Array some()
//1
var numbers = [1,2,3,4,5,6];
var hasThree = numbers.some(x=>x===3);

console.log(hasThree);
//2
var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

var list = document.querySelector('.task-list');
list.classList.add(
        tasks.some(task => task.completed === false)
        ? 'task-list--uncompleted'
        : 'task-list--completed'
);

list.innerHTML = tasks
   .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
   .map(x => `<li>${x}</li>`)
   .join('');*/
//3
/*function addTask(title){
	if(tasks.some(task=>task.title === title){
		return;
	})
	tasks.push({title:title,completed:false});
} 
addTask('Feed the cata');
console.log(tasks);*/ 
