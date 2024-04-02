function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var ages = combine(12, 12);
console.log(ages);
var namess = combine('Alex', 'Sam');
console.log(namess);
