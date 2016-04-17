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




/*//Array some()
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
