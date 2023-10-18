Array.prototype.even = function() {
    return this.filter(a => a % 2 == 0);
}

Array.prototype.odd = function() {
    return this.filter(a => a % 2 == 1);
}

console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());