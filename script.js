
function areYouPlayingBanjo(name) {
    // assign a variable to the first letter of name input, but always in lower case
    let firstLetterOfName = name[0].toLowerCase();
    // if first letter is r, plays banjo. otherwise, doesn't play banjo
    if (firstLetterOfName === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}


function countBy(x, n) {
    // assign an empty array for the results
    let result = [];
    // iterate over a loop from 1 to n*x (the first n multiples of x must be within n*x)
    for(let i = 1; i <= n*x; i++) {
        // if number is divisible by x, it is a multiple of x
        if (i % x === 0) {
            result.push(i);
        }
    }
    // return result
    return result;
}
