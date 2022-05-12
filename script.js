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

function number(busStops) {
    // iterate over the array, returning the resulting accumulator
    return busStops.reduce(function(passengers, stop) {
        // add number of passengers getting on. subtract number of passengers getting off
        return passengers + stop[0] - stop[1];
    // start at 0 passengers
    }, 0)
};

function getEvenNumbers(numbersArray) {
    // iterate over the array
    return numbersArray.filter(function(number) {
        // if the number is even, pass it to the array we will return
        return number % 2 === 0;
    })
}

function barista(coffees) {
    // sort the times to brew from smallest to largest
    // the wait time is cumulative, so this will minimize wait times
    coffees.sort(function(a, b) {
        return a - b;
    });

    // create an array to store the wait time for each customer
    let waitTimes = [];

    // iterate over the orders
    coffees.reduce(function(waitTime, brewTime, index) {
        // if first customer, no cleaning time
        if (index === 0) {
            // wait time is just brew time
            waitTime = waitTime + brewTime;
            // if not first customer, add cleaning time
        } else {
            // wait time is brew time and cleaning time
            waitTime = waitTime + brewTime + 2;
        }
        // store the wait time in the object
        waitTimes.push(waitTime);
        // return the accumulator
        return waitTime;
    // initial wait time is 0 minutes
    }, 0);

    // sum the wait times and return
    return waitTimes.reduce(function(totalWaitTime, waitTime) {
        return totalWaitTime += waitTime;
    // initial wait time is 0 minutes
    }, 0)
}

function reverseWords(str) {
    // create an array of words from the string
    let array = str.split(' ');
    // iterate over the array, reversing the words
    array.forEach(function(word, index) {
        // split the word into an array
        wordArray = word.split('');
        // reverse the array
        wordArray.reverse();
        // rejoin the array into a string, and assign it back to the word
        array[index] = wordArray.join('');
    })
    // create and return a string from the array
    return array.join(' ');
}

function reverseWords(str) {
    // create an array of words from the string
    let array = str.split(' ');
    // iterate over the array, reversing the words
    for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        // create an empty string to house the reversed word
        let reversedWord = '';
        // iterate over each letter in the word
        for(let wordIndex = 0; wordIndex < array[arrayIndex].length; wordIndex++) {
            // add each letter to the beginning of the word
            reversedWord = array[arrayIndex][wordIndex] + reversedWord;
        }
        // assign the reversed word to its place in the array
        array[arrayIndex] = reversedWord;
    }
    // create and return a string from the array
    return array.join(' ');
}

function isSortedAndHow(array) {
    // iterate over the array, comparing each value to the next
    let ascending = array.every(function(value, index) {
        // returns true if value is less than next value
        // also returns true if last value because nothing to compare
        return value <= array[index+1] || index === array.length - 1;
    });
    // if ascending is true, sorted ascending
    if (ascending) {
        return 'yes, ascending';
    };
    // iterate over the array, comparing each value to the next
    let descending = array.every(function(value, index) {
        // returns true if value is greater than next value
        // also returns true if last value because nothing to compare
        return value >= array[index+1] || index === array.length - 1;
    });
    // if descending is true, sorted descending
    if (descending) {
        return 'yes, descending';
    };
    // if neither is true, return 'no'
    return 'no';
};

function arrAdder(arr) {
    // iterate over the length of the inner arrays. this is how many words we have
    return arr[0].reduce(function(string, letter, index) {
        // iterate over the arrays, adding their letter at the outer loop's index to a string
        // not last word, add a space at the end of the word
        if(index < arr[0].length - 1) {
            return string + arr.reduce(function(word, array) {
                return word + array[index];
            }, '') + ' ';
        // last word, don't add a space at the end
        } else {
            return string + arr.reduce(function(word, array) {
                return word + array[index];
            }, '');
        }
    }, '')  
}
    
function mxdiflg(a1, a2) {
    // if both arrays are empty, return -1
    if(a1.length === 0 || a2.length === 0) {
        return -1;
    };
    // find the max length of strings in a1 by iterating over them
    let a1MaxLength = a1.reduce(function(maxLength, string) {
        // if string's length is greater than current max, it becomes max
        // otherwise, current max doesn't change
        return (maxLength < string.length ? maxLength = string.length : maxLength);
    }, 0);
    console.log(`A1 Max: ${a1MaxLength}`);
    // find the min length of strings in a1 by iterating over them
    let a1MinLength = a1.reduce(function(minLength, string) {
        // if string's length is less than current min, it becomes min
        // otherwise, current min doesn't change
        return (minLength > string.length ? minLength = string.length : minLength);
    }, Infinity);
    console.log(`A1 Min: ${a1MinLength}`);
    // find the max length of strings in a2 by iterating over them
    let a2MaxLength = a2.reduce(function(maxLength, string) {
        // if string's length is greater than current max, it becomes max
        // otherwise, current max doesn't change
        return (maxLength < string.length ? maxLength = string.length : maxLength);
    }, 0);
    console.log(`A2 Max: ${a2MaxLength}`);
    // find the min length of strings in a1 by iterating over them
    let a2MinLength = a2.reduce(function(minLength, string) {
        // if string's length is less than current min, it becomes min
        // otherwise, current min doesn't change
        return (minLength > string.length ? minLength = string.length : minLength);
    }, Infinity);
    console.log(`A2 Min: ${a2MinLength}`);
    // find the differences between a1Max and a2Min, and a2Max and a1Min
    if(a1MaxLength - a2MinLength > a2MaxLength - a1MinLength) {
    // return the greater difference
        return a1MaxLength - a2MinLength;
    } else {
        return a2MaxLength - a1MinLength;
    };
};

function xMarksTheSpot(input) {
    // assign variables for coordinate output
    let x;
    let y;
    // iterate over the array, looking for 'x' in the inner arrays
    totalCount = input.reduce(function(count, array, index) {
        // if 'x' is found multiple times
        if (array.indexOf('x') !== array.lastIndexOf('x')) {
            return count += 2;
        // if x is found once
        } else if (array.includes('x')) {
            // note the current index (x coord)
            x = index;
            console.log(x)
            // note the index of 'x' in the inner array (y coord)
            y = array.indexOf('x');
            console.log(y);
            // increment count
            return count += 1;
        // if x isn't found
        } else {
            return count;
        };
    // count initial value of 0
    }, 0)
    console.log(`total count is ${totalCount}`);
    // if total count isn't 1, return empty array
    if (totalCount !== 1) {
        return [];
        // if total is 1, return [x, y]
    } else {
        return [x, y];
    };
};

function longest(words) {
    // iterate over the array, returning the longest length
    return words.reduce(function(length, word) {
        // if the word is longer than current longest, it becomes longest
        if (word.length > length) {
            return length = word.length;
        } else {
            // otherwise, current longest doesn't change
            return length;
        };
        // initial length set to 0
    }, 0);
};

function unusedDigits(...numbers) {
    // assign a string of all digits to a variable
    console.log(numbers)
    let digits = '0123456789';
    // iterate over the array of numbers
    numbers.forEach(function(number) {
        // convert the number to a string
        let string = number.toString();
        // iterate over the digits in the number
        for (let i = 0; i < string.length; i++) {
            // for each digit, replace its occurence in the string with ''
            digits = digits.replace(string[i], '');
        }
    })
    // return string of remaining digits
    return digits;
};

function oddOrEven(n) {
    console.log(n)
    // if divisible by 4, even
    if (n % 4 === 0) {
        return 'Even';
    // if divisible by 2 but not 4, odd
    } else if (n % 2 === 0) {
        return 'Odd';
    // if divisible by neither, either
    } else {
        return 'Either';
    };
};

function stringMerge(string1, string2, letter) {
    // find first index of letter in each word
    let index1 = string1.indexOf(letter);
    let index2 = string2.indexOf(letter);
    // create a string from beginning of string1 to the index
    let substring1 = string1.substring(0, index1);
    // create a string from the index to the end of string2
    // this includes the letter
    let substring2 = string2.substring(index2);
    // concatenate the strings together and return
    return `${substring1}${substring2}`;
};

function giveChange(amount) {
    // assign variables for the number of each bill
    let numberOf1Bills = 0;
    let numberOf5Bills = 0;
    let numberOf10Bills = 0;
    let numberOf20Bills = 0;
    let numberOf50Bills = 0;
    let numberOf100Bills = 0;
    // check if amount >= 100
    if (amount >= 100) {
        // subtract amount % 100 from amount. divide by 100
        // this is how many $100 we have
        numberOf100Bills = (amount - (amount % 100)) / 100
        // set amount to the remainder once the $100 bills are removed
        amount = amount % 100;
    };
    // check if amount >= 50
    if (amount >= 50) {
        // subtract amount % 50 from amount. divide by 50
        // this is how many $50 we have
        numberOf50Bills = (amount - (amount % 50)) / 50
        // set amount to the remainder once the $50 bills are removed
        amount = amount % 50;
    };
    // check if amount >= 20
    if (amount >= 20) {
        // subtract amount % 20 from amount. divide by 20
        // this is how many $20 we have
        numberOf20Bills = (amount - (amount % 20)) / 20
        // set amount to the remainder once the $20 bills are removed
        amount = amount % 20;
    };
    // check if amount >= 10
    if (amount >= 10) {
        // subtract amount % 10 from amount. divide by 10
        // this is how many $10 we have
        numberOf10Bills = (amount - (amount % 10)) / 10
        // set amount to the remainder once the $10 bills are removed
        amount = amount % 10;
    };
    // check if amount >= 5
    if (amount >= 5) {
        // subtract amount % 5 from amount. divide by 5
        // this is how many $5 we have
        numberOf5Bills = (amount - (amount % 5)) / 5
        // set amount to the remainder once the $5 bills are removed
        amount = amount % 5;
    };
    // check if amount >= 1
    if (amount >= 1) {
        // subtract amount % 1 from amount. divide by 1
        // this is how many $1 we have
        numberOf1Bills = (amount - (amount % 1)) / 1
        // set amount to the remainder once the $1 bills are removed
        amount = amount % 1;
    };
    // return array of the numbers of bills
    return [numberOf1Bills, numberOf5Bills, numberOf10Bills, numberOf20Bills, numberOf50Bills, numberOf100Bills];
};

function solution(nums) {
    if (nums === null) {
        return [];
    } else {
        return nums.sort(function(a, b) {
            return a - b;
        });
    };
};

function chain(input, fs) {
    // iterate over the fs array
    return fs.reduce(function(currentInput, element) {
        // output of the function becomes the input for the next one
        return element(currentInput);
    }, input);
};

function zeroAndOne(s) {
    // split the string into an array of characters
    let array = s.split('');
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // check if current character is different from next character
        if (array[i] !== array[i+1] && array[i+1] < array.length) {
            // remove the two characters
            array.splice(i, 2);
            // decrement i to avoid skipping subsequent characters
            i--;
        };
    };
    // return length of the array
    return array.length;
};

function openOrSenior(data) {
    // iterate over the list and return an array
    return data.map(function(member) {
        // if age > 54 and handicap > 7, senior
        if (member[0] > 54 && member[1] > 7) {
            return 'Senior';
        // otherwise, open
        } else {
            return 'Open';
        };
    });    
};

function root(x, n) {
    return x ** (1/n);
}

function squareSum(numbers) {
    // iterate over the array, squaring the numbers
    let squares = numbers.map(function(number) {
        return number ** 2;
    });
    // iterate over the array of squares, summing them
    return squares.reduce(function(sum, square) {
        return sum + square;
    }, 0);
};

function likes(names) {
    // flow control based on the value of names.length
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    };
};

function isNarcissistic(n) {
    // create an array of the digits
    let arrayOfDigits = [];
    // add each digit to the array
    for (let i = 0; i < n.toString().length; i++) {
        arrayOfDigits.push(Number(n.toString()[i]));
    };
    // iterate over the array, exponentiating and summing
    let sumOfExponentiations = arrayOfDigits.reduce(function(sum, digit) {
        return sum + digit ** arrayOfDigits.length;
    }, 0);
    // return boolean
    return sumOfExponentiations === n;
};

function positiveSum(arr) {
  // iterate over the array, returning the sum
  return arr.reduce(function(sum, number) {
    // if positive, add to the sum
    if (number > 0) {
      return sum + number;
    } else {
      return sum;
    };
  }, 0);
};

function expandedForm(num) {
  // create an array of digits
  let arrayOfDigits = num.toString().split('');
  // if one digit, return num
  if (arrayOfDigits.length === 1) {
    return num.toString();
  };
  // iterate over the array
  return arrayOfDigits.reduce(function(expanded, digit, index) {
    // if digit is 0, skip
    if (digit == 0) {
      return expanded;
    };
    // determine how many 0s the digit needs
    let numberOfZeros = arrayOfDigits.length - index - 1;
    let zeros = '0'.repeat(numberOfZeros);
    if (index === 0) {
      return `${digit}${zeros}`;
    } else {
      return `${expanded} + ${digit}${zeros}`;
    };
  }, '');
};

String.prototype.toJadenCase = function() {
    // split the string that this method is called on
    let arrayOfWords = this.split(' ');
    // capitalize each word
    let capitalizedArrayOfWords = arrayOfWords.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    // reconnect the words
    return capitalizedArrayOfWords.join(' ');
};

function booleanToString(b) {
    if (b === true) {
        return 'true';
    } else {
        return 'false';
    };
};

function findEvenIndex(arr) {
    // assign a variable for the index to return
    let evenIndex;
    // iterate over the array
    let boolean = arr.some(function(number, index, array) {
        // sum the integers on the left side of the index
        let leftSideSum = 0;
        for (let i = 0; i < index; i++) {
            leftSideSum += array[i];
        };
        // sum the integers on the right side of the index
        let rightSideSum = 0;
        for (let i = index + 1; i < array.length; i++) {
            rightSideSum += array[i];
        };
        if (leftSideSum === rightSideSum) {
            evenIndex = index;
        };
        return leftSideSum === rightSideSum;
    });
    // if boolean is false, no such index. return -1
    if (!boolean) {
        return -1;
        // otherwise, return the evenIndex
    } else {
        return evenIndex;
    };
};

function digitize(n) {
  // convert to string, and then split into an array
  let array = n.toString().split('');
  // reverse the array
  array.reverse();
  // convert the strings to numbers
  return array.map(function(string) {
    return Number(string);
  });
};

function direction(facing, turn) {
    // determine how many degrees to turn
    let degreesToTurn = turn % 360;
    // determine how many directions to shift by
    let directionsToShift = degreesToTurn / 45;
    // convert current direction to a number
    let startingPosition;
    switch (facing) {
        case 'N':
            startingPosition = 0;
            break;
        case 'NE':
            startingPosition = 1;
            break;
        case 'E':
            startingPosition = 2;
            break;
        case 'SE':
            startingPosition = 3;
            break;
        case 'S':
            startingPosition = 4;
            break;
        case 'SW':
            startingPosition = 5;
            break;
        case 'W':
            startingPosition = 6;
            break;
        case 'NW':
            startingPosition = 7;
            break;
    }
    // determine current position
    let currentPosition = startingPosition + directionsToShift;
    // if current position is negative, add 8 to get it between 0 and 7
    if (currentPosition < 0) {
        currentPosition += 8;
    };
    // if current position is above 7, subtract 8 to get it between 0 and 7
    if (currentPosition > 7) {
        currentPosition -= 8;
    };
    // determine new direction
    let newDirection;
    switch (currentPosition) {
        case 0:
            newDirection = 'N';
            break;
        case 1:
            newDirection = 'NE';
            break;
        case 2:
            newDirection = 'E';
            break;
        case 3:
            newDirection = 'SE';
            break;
        case 4:
            newDirection = 'S';
            break;
        case 5:
            newDirection = 'SW';
            break;
        case 6:
            newDirection = 'W';
            break;
        case 7:
            newDirection = 'NW';
            break;
    };
    return newDirection;
};

function lastManStanding(n) {
    // create an array of positive integers, up to and including n
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    };
    // remove every other number, alternating starting from left and right

    // set the side to remove from
    let side = 'left';
    // remove until only one number remains
    while (array.length !== 1) {
        if (side === 'left') {
            // remove every other number
            // splicing and incrementing will cause every other number to be skipped
            for (let i = 0; i < array.length; i++) {
                array.splice(i, 1);
            };
            // the other side will be removed from next
            side = 'right';
        } else {
            // remove every other number
            // splicing and decrementing will remove all numbers due to the -
            // index of the last element decreasing evenly with a decrement
            // reduce i by 2 to skip the next element
            for (let i = array.length - 1; i >= 0; i -= 2) {
                array.splice(i, 1);
            };
            // the other side will be removed from next
            side = 'left';
        };
    };
    return array[0];
};

function findOdd(A) {
    // iterate over the array, adding each unique number to a new array
    let uniqueNumbersArray = [];
    A.forEach(function(number) {
        if (!uniqueNumbersArray.includes(number)) {
            uniqueNumbersArray.push(number);
        };
    });
    
    // count how many times each unique number appears in the original array
    let count;
    let oddNumber;
    uniqueNumbersArray.forEach(function(number) {
        count = A.reduce(function(total, currentNumber) {
            if (number === currentNumber) {
                return total += 1;
            } else {
                return total;
            };
        }, 0);
        // if count is odd, that is the number we want
        if (count % 2 !== 0) {
            oddNumber = number;
        };
    });
    return oddNumber;
};

function maskify(cc) {
    // convert the string into an array
    let array = cc.split('');
    // iterate over the array, changing all but the last four characters
    for (let i = 0; i < array.length; i++) {
        // if not last 4 characters, change to #
        if (i < array.length - 4) {
            array[i] = '#';
        };
    };
    return array.join('');
};

function arrayDiff(a, b) {
    // iterate over array B
    b.forEach(function(number) {
        // as long as the number is present in array A, remove it
        while (a.indexOf(number) !== -1) {
            a.splice(a.indexOf(number), 1);
        };
    });
    // return array A
    return a;
};

function DNAtoRNA(dna) {
    while (dna.includes('T')) {
        dna = dna.replace('T', 'U');
    };
    return dna;
};

function getSum( a,b ) {
   // check if A and B are equal, and if not, which is greater
  let greaterNumber;
  let lesserNumber;
  if (a === b) {
    return a;
  // check which is greater
  } else if (a > b) {
    greaterNumber = a;
    lesserNumber = b;
  } else {
    greaterNumber = b;
    lesserNumber = a;
  };
  // iterate over the integers and sum them
  let sum = 0;
  for (let i = lesserNumber; i <= greaterNumber; i++) {
    sum += i;
  };
  return sum;
  
}

function findShort(s) {
    // create an array of the words
    let arrayOfWords = s.split(' ');
    // iterate over the array
    return arrayOfWords.reduce(function(length, word) {
        console.log(word)
        // if word's length is less than length, it becomes the length
        return word.length < length ? word.length : length;
    }, Infinity);
};

function bingo(a) {
    // check if the array includes b(2), i(9), n(14), g(7), and o(15)
    if (a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15)) {
        return 'WIN';
    } else {
        return 'LOSE';
    };
};

function findChildren(dancingBrigade) {
    // convert the string to an array
    let arrayOfLetters = dancingBrigade.split('');
    // sort the array (all uppercase then all lowercase)
    arrayOfLetters.sort();
    // sort the array (ignoring case)
    arrayOfLetters.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    // convert the array to a string, and return
    return arrayOfLetters.join('');
}

function dontGiveMeFive(start, end) {
    // create an array of numbers from start to end
    let arrayOfNumbers = [];
    for (let i = start; i <= end; i++) {
        arrayOfNumbers.push(i);
    };
    // check the array for numbers with 5 in them, and remove such numbers
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().includes('5')) {
            arrayOfNumbers.splice(i, 1);
            i--
        };
    };
    return arrayOfNumbers.length;
};

function solve(arr) {
    // create an array of letters in the alphabet to compare to
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // iterate over each word, returning an array of numbers based on each word
    return arr.map(function(word) {
        // convert the word to an array of characters
        let arrayOfCharacters = word.split('');
        // iterate over the characters, counting how many are in their alphabet positions
        return arrayOfCharacters.reduce(function(count, letter, index) {
            if (letter.toLowerCase() === alphabetArray[index]) {
                return count += 1;
            } else {
                return count;
            }
        }, 0);
    });
};

function deleteNth(arr, n) {
    // create an object to hold an array of unique numbers,
            //the current count of each, and the array to return
    let obj = {
        arrayOfUniqueNumbers: [],
        count: {},
        arrayToReturn: [],
    };
    // add each number to the array once
    arr.forEach(function(number) {
        if (!obj.arrayOfUniqueNumbers.includes(number)) {
            obj.arrayOfUniqueNumbers.push(number);
            obj.count[number] = 0;
        };
    });
    // add each number to arrayToReturn until it is at count n
    arr.forEach(function(number) {
        if (obj.count[number] < n) {
            obj.arrayToReturn.push(number);
            obj.count[number] += 1;
        };
    });
    // return arrayToReturn
    return obj.arrayToReturn;
};

function isSquare(n) {
    // if the remainder of the root / 1 is 0, it is an integer
    return Math.sqrt(n) % 1 === 0;  
};

function setAlarm(employed, vacation) {
    return employed && !vacation;
};

*/