/*
 * Total time: 15min
 */

// var 1, clean, time: 5min
let functions = [];
for (let i = 0; i < 10; i++) {
    let fn = () => i;
    functions.push(fn);
}
functions.forEach(function(fn) {console.log(fn())}); // Эту строку кода нельзя изменять


// var 2, ES5, time: 10min, not sure what exactly you expected
/*var functions = [];
var nums = [];
for (var i = 0; i < 10; i++) {

    nums.push(i);
    var fn = function() {
        var num = nums[0];
        nums.splice(0, 1);
        return num;
    };
    functions.push(fn);
}
functions.forEach(function(fn) {console.log(fn())}); // Эту строку кода нельзя изменять*/

