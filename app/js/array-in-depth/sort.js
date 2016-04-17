//Array sort()

//Example 1 - basic
var skills = ['Javascript','HTML','Css']
skills.sort();//["Css", "HTML", "Javascript"]
skills.sort((a,b)=>b.length - a.length);//["Javascript", "HTML", "Css"]

var items = [10,30,3,20];
var wrongWay = items.sort();//[10, 20, 3, 30]
var rightWay = items.sort((a,b)=>a-b);//[3, 10, 20, 30]

//Example 2 - more advance
var bands = [{name:'Radiohed',views:1000},{name:'Alice in Chains',views:2000},{name:'Massive Attack',views:4000}];
var list = bands
	.sort((a,b)=>b.views - a.views)
	.map(x=>`<li>${x.name}(${x.views})</li>`)
	.join(`\n`);

	var output = `<ul>\n${list}\n</ul>`;

	var container = document.querySelector('#output');
	container.innerHTML = output;
	// * Massive Attack(4000)
	// * Alice in Chains(2000)
	// * Radiohed(1000)
