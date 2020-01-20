  
function findInArray(ar, val) {
    for (var i = 0, len = ar.length; i < len; i++) {
        if (ar[i] === val) {
            return i;
        }
    }
    return -1;
}
var ar = [1,2,3, 25]
console.log(findInArray(ar, 5));
console.log(findInArray(ar,25));