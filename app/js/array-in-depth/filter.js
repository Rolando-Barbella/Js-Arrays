//Array filter()

//Example 1 - basic
var task = [1,2,3,4,5,6];
var filtered = task.filter(x=>x>3);//[4, 5, 6]

//Example 2 - more advance
var petLovers = [{name:'Rolando',pets:['cat','dog']},{name:'Pedro',pets:['horse']},{name:'Luis'}];
var filterPets = petLovers.filter(x=>x.pets);//[{name:'Rolando',pets:['cat','dog']},{name:'Pedro',pets:['horse']}]

//Example 3 - In depth
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