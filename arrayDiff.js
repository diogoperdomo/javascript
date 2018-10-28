Array.prototype.diff = function(a){
        return this.filter(function(i) {
            A = a.map(function(val){return JSON.stringify(val)});
            return A.indexOf(JSON.stringify(i))<0})
}

var array_1 = [{a:1,b:2},{a:2,b:3}];
var array_2 = [{a:2,b:3},{a:3,b:4},{a:4,b:5}];
var newarray = array_2.diff(array_1);
console.log(newarray);//--> [ { a: 3, b: 4 }, { a: 4, b: 5 } ]