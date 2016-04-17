//IndexOf Examples//

//Example 1 - basic
var brothers = ['Rolando','Eduardo','Alejandro'];
var eduardoExists = brothers.indexOf('Eduardo')>-1;//true

brothers.indexOf('Eduardo');//1
brothers.indexOf('Eduardo',1);//1

if(!eduardoExists){
	brothers.push('Eduardo');
}

//Example 2 - more advance
var rolando = {name:'Rolando'};
var shane = {name:'Shane'};
var jhon = {name:'Jhon'};

var coders = [rolando,shane,jhon]
coders.indexOf(jhon);//2

//Example 3 - In depth
var mates = [{name:'Richard'},{name:'Delmar'},{name:'Anthony'}];
var age = ['28','40'];

var paths = ['.css', '.js'];
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
	return paths.indexOf(ext) >-1;
}); //[{file: 'css/core.css'},{file: 'js/app.js'},]

