// typed functions (specify type of return value)
// functions as types (specify parameters types and return type)
// Returns a number
function add(num1, num2) {
    return num1 + num2;
}
// Returns nothing
function log(text) {
    console.log(text);
}
// let combineValues: Function; // Generic type "Function"
var combineValues;
combineValues = add;
console.log(combineValues(5, 10));
// Callback functions
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(10, 10, function (result) {
    console.log(result);
});
