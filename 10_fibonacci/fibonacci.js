const fibonacci = function(n) {
    if (n<0) return "OOPS"
    n = parseInt(n)
    let fib = [...Array(n+1)].reduce((acc, _, i) => {
        if (i < 2) {
            return acc.concat(i);
        } else {
            return acc.concat(acc[i-1] + acc[i-2])
        }
    }, []) 
    return fib[n]
}

// Do not edit below this line
module.exports = fibonacci;
