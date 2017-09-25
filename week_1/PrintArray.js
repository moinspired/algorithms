import

function swap(arr) {
    //your code here
    var first= arr[0];
    var last = arr[arr.length-1];
    var arrnew = arr
    arrnew[0] = last
    arrnew[arr.length-1] = first
     return arrnew;
}

console.log(swap([0,2,4]))
