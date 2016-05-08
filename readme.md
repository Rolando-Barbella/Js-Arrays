#Javascript Arrays

A series of small arrays examples done with vanilla Javascript, it is always good to study the basic including some new features that ES6 offers now.

##Concat

```javascript
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

```javascript
var rolando = {name:'Rolando'};
var bobby = {name:'Bobby'};
var jhon = {name:'Jhon'};

var coders = [rolando,bobby,jhon]
coders.indexOf(jhon);//2

```
## Join 

```javascript
//Example 1 - basic
var names = ['Rolando','Lucy']
var printNames = names.join(' ');//Rolando Lucy

//Example 2 - more advance
var name = 'rolando barbella'
var upper = name.split(' ')//["rolando", "barbella"]
	.map(x => x.charAt(0).toUpperCase()+ x.slice(1))//["Rolando", "Barbella"]
	.join(' ');//Rolando Barbella

```
##Slice 

```javascript
var skills = ['Javascript','HTML','Css']
skills.sort();//["Css", "HTML", "Javascript"]
skills.sort((a,b)=>b.length - a.length);//["Javascript", "HTML", "Css"]

```

