function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Results = " + num);
}
printResult(add(10, 15));
var combineValue;
function withCallback(n1, n2, cbFunction) {
    var returnV = n1 + n2;
    cbFunction(returnV);
}
combineValue = add;
console.log(combineValue(8, 8));
withCallback(10, 12, function (returnV) {
    console.log(returnV);
});
