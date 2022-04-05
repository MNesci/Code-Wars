/*

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

function sumArray(array) {
    // assign a variable to the sum we will add each number to
    let sum = 0;
    // set the beginning highest value to -Infinity because all numbers will be above it
    let highestValue = -Infinity;
    // set the beginning lowest value to Infinity because all numbers will be below it
    let lowestValue = Infinity;
    // if the argument passed is null, an array with one value, or an empty array, return 0
    if (array == null || array.length == 1 || array.length == 0) {
        return 0;
        // otherwise, iterate over the array
    } else {
        array.forEach(function(number) {
            // if the number is above the current highest value, the highest value becomes that number. the first number will always be above -Infinity
            if (number > highestValue) {
                highestValue = number;
            }
            // if the number is below the current lowest value, the lowest value becomes that number. the first number will always be below Infinity
            if (number < lowestValue) {
                lowestValue = number;
            }
            // add the number to the sum regardlessly. we don't know what will end up being the highest and lowest values to omit until the iteration is over
            sum += number;
        });
    };
    // remove the highest and lowest values from the sum
    sum = sum - highestValue - lowestValue;
    // return the sum
    return sum;
};

function stringToNumber(string) {
    return parseInt(string);
}

function rentalCarCost(d) {
    // Assign a variable for the cost
    let cost
    // if rented for under 3 days, cost is $40 per day
    if (d < 3) {
        cost = d * 40;
        // if rented for 3-6 days, cost is $40 per day -$20
    } else if (3 <= d && d < 7) {
        cost = d * 40 - 20;
        // if rented for 7+ days, cost is $40 per day -$50
    } else if (7 <= d) {
        cost = d * 40 - 50;
    };
    // return the calculated cost
    return cost;
  }

  function find_average(array) {
    // iterate over the array, adding each element to a sum (initially set to 0)
    let total = array.reduce(function(sum, number) {
        return sum + number;
    }, 0)
    // if empty array, return 0. otherwise return total sum / the length of the array
    return total == [] ? 0 : total / array.length;
  }

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

function getDivisorsCnt(n){
    // assign a variable to count numbers that are divisors
    let count = 0;
    // iterate over all positive integers equal to and less than n
    for (let i = 1; i <= n; i++) {
        // if integer is a divisor, increase count by 1
        if (n % i === 0) {
            count++;
        }
    }
    // return count
    return count;
}

function isIsogram(str) {
    // convert string to array
    let array = str.split('');
    // iterate over the array
    let result = array.every(function(character) {
        // iterate again for each character, counting instances (not case sensitive)
        let count = array.reduce(function(numberOfInstances, letterToCheck) {
            if (letterToCheck.toLowerCase() === character.toLowerCase()) {
                // increment with ++i so that increment occurs before return
                return ++numberOfInstances;
            } else {
                return numberOfInstances;
            }
        }, 0)
        // for each iteration of the every loop, returns true if character appeared exactly once
        return count === 1;
    })
    // returns the result of our every loop
    return result;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    // declare variable for winner
    let winner;
    // while loop runs until a fighter has 0 or lower hp
    while (fighter1.health > 0 && fighter2.health > 0) {
        // fighter that goes first attacks
        if (firstAttacker === fighter1.name) {
            // if fighter 1 is first, reduce fighter 2's health
            fighter2.health -= fighter1.damagePerAttack;
            // if fighter 2 is down, fighter 1 wins
            if (fighter2.health <= 0) {
                winner = fighter1.name;
                break;
            }
        } else {
            // if fighter 2 is first, reduce fighter 1's health
            fighter1.health -= fighter2.damagePerAttack;
            // if fighter 1 is down, fighter 2 wins
            if (fighter1.health <= 0) {
                winner = fighter2.name;
                break;
            }
        }
        // fighter that goes second attacks
        if (firstAttacker === fighter2.name) {
            // if fighter 2 was first, reduce fighter 2's health
            fighter2.health -= fighter1.damagePerAttack;
            // if fighter 2 is down, fighter 1 wins
            if (fighter2.health <= 0) {
                winner = fighter1.name;
                break;
            }
        } else {
            // if fighter 1 was first, reduce fighter 1's health
            fighter1.health -= fighter2.damagePerAttack;
            // if fighter 1 is down, fighter 2 wins
            if (fighter1.health <= 0) {
                winner = fighter2.name;
                break;
            }
        }
    }
    // return winner once loop has ended
    return winner;
}


function solution(str, ending) {
    let lengthOfStr = str.length;
    let lengthOfEnding = ending.length;
    let sliceOfStr = str.slice(str.length - ending.length);
    return sliceOfStr === ending;
}

function friend(friends){
    // iterate over the array, returning a new array
    return friends.filter(function(person) {
        // new array includes strings with a length of 4 characters
        return person.length === 4;
    })
}

function removeSmallest(numbers) {
    // iterate over array to find lowest value
    let lowest = numbers.reduce(function(min, number) {
        if (number < min) {
            return min = number;
        } else {
            return min;
        }
    }, Infinity);
    // create a copy array
    let newNumbers = numbers.slice();
    // remove lowest value from the new array
    newNumbers.splice(newNumbers.indexOf(lowest), 1);
    // return the array
    return newNumbers;
}

function roundToNext5(n) {
    // check if n is divisible by 5
    if (n % 5 === 0) {
        // n is already divisible by 5, so return n
        return n;
    // if positive
    } else if (n > 0) {
        // find the remainer
        let remainder = n % 5;
        // find the difference between 5 and the remainder
        amountToRoundUp = 5 - remainder;
        // round up by the difference
        n += amountToRoundUp;
        // return n
        return n;
    // if negative
    } else {
        // find remainder
        let remainder = n % 5;
        // subtract from n. remainder is -ive, so this rounds up
        n -= remainder;
        // return n
        return n;
    }
}


function smallEnough(a, limit) {
    return a.every(function(value) {
        return value <= limit;
    })
}

function checkExam(array1, array2) {
    // use .reduce() to tally up the totalScore, iterating over each answer
    let totalScore = array1.reduce(function(score, answer, index) {
        // if answer is right, increase score by 4
        if (answer === array2[index]) {
            return score + 4;
        // if answer is black, don't change score
        } else if (array2[index] === '') {
            return score + 0;
        } else {
        // if answer is neither right nor blank, it is wrong. decrease score by 1
            return score - 1;
        }
    }, 0);
    // if totalScore is less than 0, return 0 instead of totalScore
    if (totalScore < 0) {
        return 0;
    // otherwise, return the totalScore
    } else {
        return totalScore;
    }
}

function highAndLow(numbers) {
    // create an array of numbers
    let arrayOfNumbers = numbers.split(' ');
    console.log(arrayOfNumbers)
    // find the highest number in the array by iterating over the array
    let highestNumber = arrayOfNumbers.reduce(function(highest, number) {
        // if number is higher than the current highest, it becomes the current highest
        if (parseInt(number) > highest) {
            return highest = number;
        } else {
            return highest;
        }
    }, -Infinity);
    // find the lowest number in the array by iterating over the array
    let lowestNumber = arrayOfNumbers.reduce(function(lowest, number) {
        // if number is lower than the current lowest, it becomes the current lowest
        if (parseInt(number) < lowest) {
            return lowest = number;
        } else {
            return lowest;
        }
    }, Infinity);
    // return the highest and lowest
    return `${highestNumber} ${lowestNumber}`
}

function sortByLength(array) {
    array.sort(function(a, b) {
        return a.length - b.length;
    })
    return array;
}

function flattenAndSort(array) {
    // create a new array set to the first element in the original array
    let newArray = array[0];
    // for each element after the first, concatenate it into the new array
    for(let i = 1; i < array.length; i++) {
        newArray = newArray.concat(array[i]);
    }
    console.log(newArray)
    // sort the new array in integer order
    newArray.sort(function(a, b) {
        return a - b;
    })
    // return the array
    return newArray;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // if the codes don't match, return false
    if (enteredCode !== correctCode) {
        return false;
    };
    // create date objects for each date
    let currentDateObject = new Date(currentDate);
    let expirationDateObject = new Date(expirationDate)
    // if the current date is after the expiration date, return false
    if (currentDateObject.getTime() > expirationDateObject.getTime()) {
        return false
    };
    // otherwise, return true
    return true;
}

*/

function validatePIN(pin) {
    // if the length of the string isn't 4 or 6, return false
    if (pin.length !== 4 && pin.length !== 6) {
        console.log(pin.length)
        return false;
    };
    // create an array of characters
    let pinArray = pin.split('');
    console.log(pinArray)
    // if any character in the array isn't an integer, return false. otherwise, return true
    // check if something is an integer by converting to an int, and checking if the output is NaN
    return pinArray.every(function(character) {
        console.log(!isNaN(parseInt(character)));
        return !isNaN(parseInt(character));
    })
}