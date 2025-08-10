const contador = (function() {
    let count = 0;
    
    return function() {
        return count++;
    };
})();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());