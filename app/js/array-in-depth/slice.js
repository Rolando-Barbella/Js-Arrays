//Array slice() - The slice method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument

//Example 1 - basic
var myName = {name:'rolando-barbella',name:'rolando-barbella'};
var items = [1,2,3,4,5,myName];//[1,2,3,4,5,name:rolando-barbella]
var copy = items.slice();
copy[5].name = 'tom-york'; //[1,2,3,4,5,name:tom-york]

copy.slice(0,1);//[1]
copy.slice(1,-1);//[2,3,4,5] 

//Example 2 - more advance
var filters = {
	'deslugfy':x=>x.replace('-',' '),
	'uppercase':x=>x.toUpperCase()
}
var input = 'name | deslugfy | uppercase';//name | deslugfy | uppercase
var sections = input.split('|').map(x=>x.trim());//[name,deslugify,uppercase]
var ref = myName[sections[0]];//tom-york
var output  = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);//TOM YORK

