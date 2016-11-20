//Array some()

//Example 1 - basic
const numbers = [1,2,3,4,5,6];
const hasThree = numbers.some(x => x===3);
console.log(hasThree);
//Example 2 - more advance
const tasks = [
  {
    title: 'Do laundry',
    completed: true
  },
  {
    title: 'Feed the cat',
    completed: false
  },
  {
    title: 'Watch the array lessons on egghead.io',
    completed: true
  }
];

const list = document.querySelector('.task-list');
list.classList.add(
  tasks.some(task => task.completed === false)
  ? 'task-list--uncompleted'
  : 'task-list--completed'
);

list.innerHTML = tasks
 .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
 .map(x => `<li>${x}</li>`)
 .join('');

//Example 3 - more advance
function addTask(title){
  if(tasks.some(task => task.title === title)){
    return;
  }
  tasks.push({title:title, completed:false});
}

addTask('Feed the cat');

console.log(tasks)