#Javascript Arrays

Functional programming with Javascript could be quite useful when we are working with arrays, bellow some examples of some build methods that we can take advantage of.

- [Concat](#concat)
- [Filter](#filter)
- [Index off](#index-off)
- [Join](#join)
- [Sort](#sort)
- [Some](#some)
- [Every](#every)
- [Find](#find)
- [FindIndex](#findindex)
- [Slice](#slice)

##Concat

The concat() method is used to join two or more arrays.This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

```javascript
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

```

##Filter

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

> Note: filter() does not execute the function for array elements without values and does not change the original array.

``` javascript
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

    //<ul><Li>Javascript Arrays in Depth - slice</li>
    //<Li>Javascript Arrays in Depth - concat</li></ul>

````
##Index off

The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns -1 if the value to search for never occurs.
>Note: The indexOf() method is case sensitive.

```javascript
var rolando = {name:'Rolando'};
var bobby = {name:'Bobby'};
var jhon = {name:'Jhon'};

var coders = [rolando,bobby,jhon]
coders.indexOf(jhon);//2

```
## Join 

The join() method joins the elements of an array into a string, and returns the string.The elements will be separated by a specified separator. The default separator is comma (,).

```javascript


//Example 1 - basic
var names = ['Rolando','Lucy']
var printNames = names.join(' ');//Rolando Lucy

//Example 2 - more advance
var name = 'rolando barbella'
var upper = name.split(' ')//["rolando", "barbella"]
	.map(x => x.charAt(0).toUpperCase() + x.slice(1))//["Rolando", "Barbella"]
	.join(' ');//Rolando Barbella

```
##Sort 

The sort() method sorts the items of an array.The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.


```javascript
var skills = ['Javascript','HTML','Css']
skills.sort();//["Css", "HTML", "Javascript"]
skills.sort((a,b)=>b.length - a.length);//["Javascript", "HTML", "Css"]

```
##Some

some() returns a boolean value after passing each item in the source array through the test function that you pass in as the first parameter. It is very handy to use it when you just need a Yes or No answer.

```javascript
const numbers = [1,2,3,4,5,6];
const hasThree = numbers.some(x => x===3);
console.log(hasThree); // true
```

```javascript
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

function addTask(title){
  if(tasks.some(task => task.title === title)){
    return;
  }
  tasks.push({title:title, completed:false});
}

addTask('Feed the cat');

console.table(tasks) // Same array ( no changes )
```

## Every

Array every returns a condition depending on all the elements inside the array
```javascript

const num = [ 18, 19, 20, ];

const allEighteen = num.every(x => x>= 18)// true

const allThirty = num.every(x => x>= 30)// false


```

## Find
The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise false is returned

```javascript

const num = [ 18, 19, 20, ];

const isEighteen = num.find(x => x === 18)// 18

const isTen = num.every(x => x=== 10)// false


```

## FindIndex

findIndex() returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

```javascript

[12, 5, 8, 130, 44].findIndex( x => x>= 12); // 0

[12, 5, 8, 130, 44].findIndex( x => x>= 44); // 3

[12, 5, 8, 130, 44].findIndex( x => x>= 130); // 3

[12, 5, 8, 130, 44].findIndex( x => x === 5); // 1

```

## Slice

The slice() method creates a new array where you can use two possible parameters: start and finish, one catch you need to consider is that if you want to select multiple elements, the second parameter has to be + 1 from the range of arguments you would like to select.


```javascript

const letters = [ 'a', 'b', 'c']

letters.slice(0,1) // [ "a" ]

letters.slice(0,2) // [ "a", "b" ]


```

## Reduce

In order to use reduce, you need at least two things: the initial value and the accumulator, the inital value, is the firts one who gets reads as soon as the function fires, the accumulator is the one that gets evaluetas at the end.

There is two extra parameters that you can use with reduce: index and array, 
1 - The index is the one between the parent array.
2 - Array is the arry itself. 

Some examples:

```javascript

 unction reducer(accumulator,value,index,array){
  var intermediaryValue = accumulator + value;
  if(index === array.length -1){
    return intermediaryValue / array.length;
  }
  return accumulator + value;
}

var data = [1,2,3,3,4,5,3];
var mean = data.reduce(reducer,0);//3

```






