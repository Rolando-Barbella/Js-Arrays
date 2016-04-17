module.exports = function (name) {
    console.log('Hello ' + name);
};
//Concat examples//

//Example 1 - basic
var items = [1,2];
var newItems = items.concat(1,2,3,'concat',[4,5],[6,7]); // [1,2,3,'concat',4,5,6,7]

//Example 2 - more advance
var people = [{name:'Mike'},{name:'Billy'}];
var people2 = [{name:'Rolando'},{name:'Pedro'}];
people
	.concat(people2)
	.forEach(function(person){
		return person.name; //Mike Billy Rolando Pedro
	});


/*
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
   .join('');
*///3
/*function addTask(title){
	if(tasks.some(task=>task.title === title){
		return;
	})
	tasks.push({title:title,completed:false});
} 
addTask('Feed the cata');
console.log(tasks);*/ 
