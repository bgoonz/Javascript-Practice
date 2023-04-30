//write a function min that takes two arguments and returns the minimum of them.

function min( a, b ) {
    if ( a > b ) {
        return b;
    } else if ( b > a ) {
        return a;
    } else {
        return 'They are equal'
    }
}
console.log(min(5,2))
