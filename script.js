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

function sumDigPow(a, b) {
    // create an array of numbers from a to b, inclusively
    let arrayOfNumbersInRange = [];
    for (let i = a; i <= b; i++) {
        arrayOfNumbersInRange.push(i);
    };
    // iterate over the array of numbers
    return arrayOfNumbersInRange.filter(function(number) {
        // compare the number to the sum of its digits exponentiated incrementally
        // if equal, add to the array being returned
        return number === number.toString().split('').reduce((sum, digit, index) => {
            // exponent is index + 1 because arrays are 0 based
            return sum + Number(digit) ** (index + 1);
        }, 0);
    });
};

function filter_list(l) {
    return l.filter(element => Number.isInteger(element));
};

function sortArray(array) {
    // iterate over the array, creating a new array indicating even and odd positions
    let positionsArray = array.map(number => number % 2 === 0 ? 'even' : 'odd');
    // create an array of the even numbers
    let evenNumbersArray = array.filter(number => number % 2 === 0);
    // create an array of the odd numbers
    let oddNumbersArray = array.filter(number => number % 2 !== 0);
    // sort the array of odd numbers, ascending
    oddNumbersArray.sort((a, b) => a - b);
    // return an array with even and odd numbers inserted in their positions

    // assign indexes of the even and odd arrays to variables
    let evenIndex = 0;
    let oddIndex = 0;
    // declare a variable for the number to map to our returning array each iteration
    let numberToAdd;
    // iterate over the array of positions, returning the mapped array
    return positionsArray.map(function(type) {
        // if the position is even, set the next even number to be mapped
        if (type === 'even') {
            numberToAdd = evenNumbersArray[evenIndex];
            // increment the even index so the next even number is next
            evenIndex++;
        } else {
            // if the position is odd, set the next odd number to be mapped
            numberToAdd = oddNumbersArray[oddIndex];
            // increment the odd index so the next odd number is next
            oddIndex++;
        };
        // map the set number to the returning array
        return numberToAdd;
    });
};


//return the total number of smiling faces in the array
function countSmileys(arr) {
    // iterate over the array
    return arr.reduce(function(count, face) {
        // if length isn't 2 or 3, return count
        if (face.length !== 2 && face.length !== 3) {
            return count;
        }
        // if length is 2, the first character is eyes, and the last is smile, increase count
        if ((face[0] === ':' || face[0] === ';') && (face.length === 2) &&
                (face[face.length - 1] === ')' || face[face.length - 1] === 'D')) {
                    console.log(face)
            return count + 1;
        // if length is 3, the first character is eyes, the second is nose,
        // and the last is smile, increase count
        } else if ((face[0] === ':' || face[0] === ';') && (face[1] === '-' || face[1] === '~') &&
                (face[face.length - 1] === ')' || face[face.length - 1] === 'D')) {
                    console.log(face)
            return count + 1}
        else {
            return count;
        };
    }, 0);
};

function dirReduc(arr) {
    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
        // check if an element is opposite to the next element. if so, remove both
        if ((arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') ||
                (arr[i] === 'SOUTH' && arr[i+1] === 'NORTH') ||
                        (arr[i] === 'EAST' && arr[i+1] === 'WEST') ||
                                (arr[i] === 'WEST' && arr[i+1] === 'EAST')) {
                                    arr.splice(i, 2);
                                    // reset i in case we brought opposites next to eachother
                                    i = -1;
                                };
    };
    return arr;
};

function points(games) {
    // iterate over the array
    return games.reduce(function(points, match) {
        // assign variables to our team's score, and the other team's score
        let x = Number(match[0]);
        let y = Number(match[2]);
        console.log(x, y);
        // compare the scores
        if (x > y) {
            return points + 3;
        } else if (x === y) {
            return points + 1;
        } else {
            return points;
        };
    }, 0);
};

function squareDigits(num) {
    // create an array of digits
    let arrayOfDigits = num.toString().split('');
    // map the squares to a new array
    let arrayOfSquares = arrayOfDigits.map(function(digit) {
        return digit ** 2;
    });
    // concatenate the array and make it a number
    return Number(arrayOfSquares.join(''));
}

let squareDigits = num => Number(num.toString().split('').map(digit => digit ** 2).join(''));


function count(string) {
    // create an object to return
    let returnObject = {};
    // iterate over each character of the string
    string.split('').forEach(function(character) {
        // if the character has been counted, increase count. otherwise, set it to 1
        returnObject[character] ? returnObject[character]++ : returnObject[character] = 1;
    });
    return returnObject;
};

function solution(number) {
    // return 0 if the number is negative
    if(number < 0) {
        return 0;
    };
    // set a variable for our sum
    let sum = 0;
    // iterate over all numbers below the number, adding mulitples of 3 or 5
    for (let i = 1; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        };
    };
    // return the sum
    return sum;
};

function persistence(num) {
    // assign a variable for the number of times we will iterate
    let count = 0;
    // iterate until the number is only 1 digit
    while (num.toString().length !== 1) {
        // multiply each digit by eachother
        num = num.toString().split('').reduce((product, digit) => Number(digit)*product, 1)
        // increase the count by 1
        count++;
    };
    return count;
};

function descendingOrder(n) {
    // convert the number to a string, array, sort descending,
    //back to a string, and back to a number
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
};

function sumTwoSmallestNumbers(numbers) {
    // iterate over the array to find the lowest positive integer
    let lowestInt = numbers.reduce((lowest, current) => lowest < current ? lowest : current, Infinity);
    // remove the lowest int from the array
    numbers.splice(numbers.indexOf(lowestInt), 1);
    // iterate over the array to find the second lowest positive integer
    let secondLowestInt = numbers.reduce((lowest, current) => lowest < current ? lowest : current, Infinity);
    return lowestInt + secondLowestInt;
};

function runLengthEncoding(str) {
    // create an object to hold our arrays
    let objectOfArrays = {};
    // assign a variable to track how many consecutive characters you are at
    let streak = 0;
    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        // if the first character, or different from previous character
        if (i === 0 || str[i] !== str[i - 1]) {
            // make a new property and set the count of  the character to 1
            objectOfArrays[i] = [1, str[i]];
            // set streak to 0
            streak = 0;
        } else {
            // increment streak
            streak++;
            // increase the matching array's count by 1
            objectOfArrays[i - streak][0]++;
        };
    };
    // iterate over the objects arrays, pushing to an array that is returned
    let arrayToReturn = [];
    for (key in objectOfArrays) {
        arrayToReturn.push(objectOfArrays[key]);
    };
    return arrayToReturn;
};

function minSum(arr) {
    // sort the array from smallest to largest
    arr.sort((a, b) => a - b);
    // create an array of products of integers that are as far apart as possible
    let arrayOfProducts = [];
    for (let i = 0; i < arr.length/2; i++) {
        arrayOfProducts.push(arr[i]*arr[arr.length-i-1]);
    };
    // sum the products
    return arrayOfProducts.reduce((sum, product) => sum + product, 0);
};

function missingNo(nums) {
    // assign a variable to hold the missing number
    let numberToReturn;
    for (let i = 0; i <= 100; i++) {
        if (!nums.includes(i)) {
            numberToReturn = i;
        };
    };
    return numberToReturn;
};

function incrementer(nums) {
    if (nums.length === 0) {
        return [];
    };
    console.log(nums);
    // increment numbers
    let incrementedNumbers = nums.map((number, index) => number+index+1);
    console.log(incrementedNumbers);
    // if number is one digit, map it to next array. otherwise, map the last digit
    return incrementedNumbers.map((number) => number.toString().length > 1 ? Number(number.toString()[number.toString().length - 1]) : number);
};

function duplicates(array) {
    // assign a variable for the count of pairs
    let count = 0;
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // assign a variable for the current value
        let value = array[i];
        // remove the value from the array
        array.splice(i, 1);
        // decrement i to not skip elements
        i--;
        // check if there is another element with that value
        if (array.indexOf(value) > -1) {
            // increment count
            count++;
            // remove the element so it isn't checked
            array.splice(array.indexOf(value), 1);
        };
    };
    return count;
};

function mygcd(x, y) {
    // determine which number is lesser
    let lesserNumber = x < y ? x : y;
    // iterate over positive numbers equal to or less than the lesser number
    for (let i = lesserNumber; i > 0; i--) {
        // check if i is a common denominator
        if (x % i == 0 && y % i == 0) {
            return i;
        };
    };
};

function movie(card, ticket, perc) {
    // define the starting price for each payment method
    let systemA = 0;
    let systemB = card;
    // assign a variable for the previous price paid for a ticket through systemB
    let previousPrice = ticket;
    // assign a variable to count how many iterations have occurred
    let count = 0;
    // iterate until systemB is cheaper than systemA
    while (systemA <= Math.ceil(systemB)) {
        systemA += ticket;
        systemB += previousPrice * perc;
        count++;
        previousPrice *= perc;
    };
    return count;
};

function domainName(url) {
    console.log(url);
    // assign a variable for each string to remove
    let obj = {};
    obj.https = /https:/g;
    obj.http = /http:/g;
    obj.www = /www\./g;
    obj.com = /\.com/g;
    obj.org = /\.org/g;
    obj.ca = /\.ca/g;
    obj.co = /\.co/g;
    obj.jp = /\.jp/g;
    obj.ru = /\.ru/g;
    obj.net = /\.net/g;
    obj.biz = /\.biz/g;
    obj.it = /\.it/g;
    obj.tv = /\.tv/g;
    obj.php = /\.php/g;
    obj.index = /index/g;
    obj.img = /img/g;
    obj.users = /users/g;
    obj.info = /\.info/g;
    obj.html = /\.html/g;
    obj.edu = /\.edu/g;
    obj.default = /default/g;
    obj.slash = /\//g;
    obj.br = /\.br/g;
    obj.de = /\.de/g;
    obj.pro = /\.pro/g;
    obj.za = /\.za/g;
    obj.fr = /\.fr/g;
    obj.io = /\.io/g;
    obj.archive = /archive/g;
    obj.error = /error/g;
    obj.us = /\.us/g;
    obj.name = /\.name/g;
    obj.warez = /warez/g;
    obj.kata = /kata/g;
    obj.uk = /\.uk/g;

    // assign a variable for the string to return
    let stringToReturn = url;
    //iterate over the variables, replacing each with a blank string
    for (let key in obj) {
        stringToReturn = stringToReturn.replace(obj[key], '')
    };
    return stringToReturn;
};

function uniqueInOrder(iterable) {
    let array;
    if (!Array.isArray(iterable)) {
        // convert the string to an array of characters
        array = iterable.split('');
    } else {
        array = iterable;
    };
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // if the current element is a duplicate of the previous element
        if (array[i] === array[i - 1]) {
            // remove the current element
            array.splice(i, 1);
            // decrement to avoid skipping elements
            i--;
        };
    };
    return array;
};

function stray(numbers) {
    // sort the array
    numbers.sort((a, b) => a - b);
    // return either the first or last element, whichever doesn't match the second element
    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
};

function enough(cap, on, wait) {
    return cap >= on + wait ? 0 : (on + wait) - cap;
};

function areaOrPerimeter(l, w) {
    return l === w ? l * w : l * 2 + w * 2;
};

function isPangram(string) {
    // assign an array for all letters
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // check if all letters are used
    return array.every((letter) => string.toLowerCase().includes(letter));
};

function duplicateCount(text) {
    // assign a variable for the count of letters with duplicates
    let count = 0;
    // convert the string to a lower case array and iterate over it
    let array = text.toLowerCase().split('');
    for (let i = 0; i < array.length; i++) {
        // check if the there are duplicates
        if (array.lastIndexOf(array[i]) !== i) {
             // increment count of characters with duplicates
            count++;
            // remove all instances of the character
            let character = array[i];
            while (array.indexOf(character) !== -1) {
                array.splice(array.indexOf(character), 1);
            };
            // decrement to avoid skipping
            i--;
        };
    };
    return count;
};

function getGrade (s1, s2, s3) {
    let averageScore = (s1 + s2 + s3) / 3;
    if (90 <= averageScore) {
        return 'A';
    } else if (80 <= averageScore) {
        return 'B';
    } else if (70 <= averageScore) {
        return 'C';
    } else if (60 <= averageScore) {
        return 'D';
    } else {
        return 'F';
    };
};

let cockroachSpeed = (s) => Math.floor(s * 100000 / 3600);

function abbrevName(name) {
    return name.split(' ').map((name) => name[0].toUpperCase()).join('.');
};

function isValidWalk(walk) {
    // create an object with a count of each direction as a property
    let directionsCount = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };
    // iterate over the array, incrementing each count when the direction appears
    walk.forEach(walk => directionsCount[walk] += 1);
    // return true if corresponding counts are equal, and the sum of counts is 10
    directionsCount.total = directionsCount.n + directionsCount.s + directionsCount.w + directionsCount.e;
    if (directionsCount.n === directionsCount.s && directionsCount.w === directionsCount.e && directionsCount.total === 10) {
        return true;
    } else {
        return false;
    };
};

function getCount(str) {
    // create a string of vowels
    let vowels = 'aeiou';
    // iterate over the string, counting vowels and returning the vowel count
    return str.split('').reduce((count, letter) => vowels.includes(letter) ? count + 1 : count, 0);
};

function greet(language) {
    // create an object of translations
    let translationObject = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
    };
    // check if language is in the object, returning the appropriate string
    return language in translationObject ? translationObject[language] : 'Welcome';
};

function countSheeps(arrayOfSheep) {
    // iterate over the array, counting each value of true
    return arrayOfSheep.reduce((count, element) => element === true ? count + 1 : count, 0);
};

function past(h, m, s) {
    // convert each unit to milliseconds and sum them
    return h * 3600000 + m * 60000 + s * 1000;
};

function removeEveryOther(arr) {
    // iterate over the array, keeping only elements with an even index
    return arr.filter((element, index) => index % 2 === 0);
};

function solution(string) {
    // create a capital letter regex to search for
    let capitalRegex = /[A-Z]/g;
    // create an array of matches
    let matches = [...string.matchAll(capitalRegex)];
    // create an array of the match indexes
    let indexes = matches.map((match) => match.index);
    // sort the indexes from last to first
    indexes.sort((a, b) => b - a);
    // create an array of the string's characters
    let arrayOfCharacters = string.split('');
    // iterate over the indexes, inserting a space before them
    indexes.forEach((index) => arrayOfCharacters.splice(index, 0, ' '));
    // rejoin the characters
    return arrayOfCharacters.join('');
};

function comp(a, b) {
    // check if arguments are null
    if (a == null || b == null) {
        return false;
    };
    // sort both arrays from smallest to largest
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    // create a boolean to return
    let booleanToReturn = true;
    // iterate over the arrays
    for (let i = 0; i < a.length; i++) {
        // check if the element in b is the square of the element in a
        if (b[i] !== a[i] * a[i]) {
            // if not, boolean to return becomes false
            booleanToReturn = false;
        };
    };
    return booleanToReturn;
};

function incrementString(string) {
    // convert the string to an array
    let arrayOfCharacters = string.split('');
    // iterate over the array, counting how many characters on the end are numbers
    let digitCount = arrayOfCharacters.reduce((count, character) => 
            Number.isInteger(Number(character)) ? count + 1 : count, 0);
    // if there is no number, add a 0 to the end
    if (digitCount === 0) {
        arrayOfCharacters.push('0');
    };
    // separate the string into the word portion and the number portion
    let wordPortion = arrayOfCharacters.join('').slice(0, string.length - digitCount);
    let numberPortion = arrayOfCharacters.join('').slice(string.length - digitCount);
    // increment the last number portion
    numberPortion = Number(numberPortion) + 1
    // check if 0s were lost
    let differenceInNumberOfDigits = digitCount - numberPortion.toString().length;
    console.log(differenceInNumberOfDigits)
    // concatenate lost 0s back on to the number portion
    if (differenceInNumberOfDigits > 0) {
        numberPortion = '0'.repeat(differenceInNumberOfDigits) + numberPortion;
    };
    // concatenate the two portions
    return `${wordPortion}${numberPortion}`;
};

function checkForFactor (base, factor) {
  return base % factor === 0;
};

function powersOfTwo(n){
  let arrayToReturn = [];
  for (let i = 0; i <= n; i++) {
    arrayToReturn.push(2 ** i);
  };
  return arrayToReturn;
};

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((bird) => !geese.includes(bird));
};

function wave(str){
  // create an array to return
  let arrayToReturn = [];
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    // skip spaces
    if (str[i] !== ' ') {
      // create an array from the str
      let stringArray = str.split('');
      // capitalize the letter at i index
      stringArray[i] = stringArray[i].toUpperCase();
      // rejoin the string and add it to the array
      arrayToReturn.push(stringArray.join(''));
      };
    };
  return arrayToReturn;
};

function testEven(n) {
    return n % 2 === 0;
};

function strCount(str, letter){  
  // create an array from the first string
  let arrayOfCharacters = str.split('');
  // iterate over the array, counting how many times the character matches the letter given
  return arrayOfCharacters.reduce((count, character) => character === letter ? count + 1 : count, 0);
};

const sequenceSum = (begin, end, step) => {
  // create a variable to return
  let sum = 0;
  // iterate until all appropriate values have been summed
  for (let i = begin; i <= end; i += step) {
    sum += i;
  };
  return sum;
};

function accum(s) {
    // convert the string to an array
    let arrayOfCharacters = s.split('');
    // iterate over the array
    for (let i = 0; i < arrayOfCharacters.length; i++) {
        // convert each character to a string of characters: the first uppercase, followed by i lowercase characters
        arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase() + arrayOfCharacters[i].toLowerCase().repeat(i);
    };
    // rejoin and return the string
    return arrayOfCharacters.join('-');
};

function noSpace(x) {
    // create an array for non-whitespace characters
    let arrayOfCharacters = [];
    // iterate over the string
    for (let i = 0; i < x.length; i++) {
        // if the character is not a space, push it to the array
        if (x[i] !== ' ') {
            arrayOfCharacters.push(x[i]);
        };
    };
    // join and return the array
    return arrayOfCharacters.join('');
};

function square(number) {
  return number ** 2;
};

function repeatStr (n, s) {
  return s.repeat(n);
};

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;   
};

const reverseSeq = n => {
    let array = [];
    for (let i = n; i >= 1; i--) {
        array.push(i); 
    };
    return array;
};

function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
};

function greet(name){
    return `Hello, ${name} how are you doing today?`;
};

function alphabetPosition(text) {
  // create an object to convert letters to numbers
  let alphabetKey = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  // create an array of the characters in the string
  let arrayOfCharacters = text.split('');
  // filter the array to only have letters
  let arrayOfLetters = arrayOfCharacters.filter((character) => alphabetKey[character.toLowerCase()]);
  // map the letters to their corresponding numbers
  let arrayOfNumbers = arrayOfLetters.map((letter) => alphabetKey[letter.toLowerCase()])
  // return the numbers in a string
  return arrayOfNumbers.join(' ');
};

function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) {
        array.push(i);
    };
    return array;
};

function getRealFloor(n) {
    if (n <= 0) {
      return n;
    } else if (n <= 12) {
      return n - 1;
    } else {
      return n - 2;
    };
};

function arithmetic(a, b, operator){
  switch (operator) {
      case 'add' : return a + b;
      case 'subtract' : return a - b;
      case 'multiply' : return a * b;
      case 'divide' : return a / b;
  };
};

function doubleInteger(i) {
  i *= 2;
  return i;
};

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  };
};

var min = function(list){
    // iterate over the array
    let lowToHighSort = list.sort((a, b) => a - b);
    return lowToHighSort[0];
};

var max = function(list){
    let highToLowSort = list.sort((a, b) => b - a);
    return highToLowSort[0];
};

function sumStr(a,b) {
    return (Number(a) + Number(b)).toString();
};

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
};

function nbDig(n, d) {
    // create an array of squares
    let arrayOfSquares = [];
    for (let i = 0; i <= n; i++) {
        arrayOfSquares.push(i ** 2);
    };
    // count each instance of d in the array of squares
    return arrayOfSquares.reduce((count, square) => {
        let occurencesOfDigitInSquare = 0;
        for (let i = 0; i < square.toString().length; i++) {
            if (square.toString()[i] == d) {
                occurencesOfDigitInSquare++;
            };
        };
        return count + occurencesOfDigitInSquare;
    }, 0);
};

function grow(x){
    return x.reduce((product, integer) => product * integer, 1);
};

function high(x){
    // create an array of words
    let arrayOfWords = x.split(' ');
    // create an object of letter scores
    let letterScores = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26,
    };
    // iterate over the array
    let highestScore = arrayOfWords.reduce((currentScore, word) => {
  
        let wordScore = { word: word, score: 0};
        let arrayOfLetters = word.split('');
        arrayOfNumbers = arrayOfLetters.map((letter) => {
            return letterScores[letter];
        });
        wordScore.score = arrayOfNumbers.reduce((totalScore, letterScore) => {
            return totalScore + letterScore;
        }, 0);
        return wordScore.score > currentScore.score ? wordScore : currentScore;
    }, { word: 'a', score: 1});
    return highestScore.word;
};

function gimme(triplet) {
    // iterate over the array, creating an object of values and indexes
    let indexesByValue = triplet.reduce((object, value, index) => {
        object[value] = index;
        return object;
    }, {});
    // sort the array from smallest to largest
    triplet.sort((a, b) => a - b);
    // return the index of the second value
    return indexesByValue[triplet[1]];
};

function longest(s1, s2) {
    let combinedString = s1 + s2;
    let arrayOfSortedCharacters = combinedString.split('').sort((a, b) => a.localeCompare(b));
    return arrayOfSortedCharacters.reduce((string, character) => string.includes(character) ? string : string + character);
};

function Automoton() {
    this.states = ['q1', 'q2', 'q3'];
};

Automoton.prototype.readCommands = function(commands) {
    // set currentState in case of subsequent tests
    this.currentState = 'q1';
    // iterate over the commands
    commands.forEach((command) => {
        if (this.currentState === 'q1' && command === '1') {
            this.currentState = 'q2';
        } else if (this.currentState === 'q2' && command === '0') {
            this.currentState = 'q3';
        } else if (this.currentState === 'q3') {
            this.currentState = 'q2';
        };
    });
    return this.currentState === 'q2';
};

let myAutomaton = new Automoton();

function spinWords(string) {
    let arrayOfWords = string.split(' ');
    return arrayOfWords.reduce((newArray, word, index, array) => {
        return (word.length < 5) ? newArray.concat(word) : newArray.concat(word.split('').reverse().join(''));
    }, []).join(' ');
};

function digital_root(n) {
    let x = n;
    while (x.toString().length > 1) {
        x = x.toString().split('').reduce((sum, digit) => {
            return sum + Number(digit);
        }, 0);
    };
    return x;
};

function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
};

function rot13(message){
    const cipherKey = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm',
    };
    let arrayOfCodedCharacters = message.split('');
    let arrayOfDecodedCharacters = arrayOfCodedCharacters.map((character) => {
        // check if not letter
        if (!(character.toLowerCase() in cipherKey)) {
            console.log('not a leter')
            return character;
        };
        // check if capital letter
        if (!(character in cipherKey)) {
            return cipherKey[character.toLowerCase()].toUpperCase();
        };
        // otherwise, lowercase letter
        return cipherKey[character];
    });
    return arrayOfDecodedCharacters.join('');
};

function towerBuilder(nFloors) {
    let towerWidth = nFloors * 2 - 1;
    let towerArray = [];
    let block = '*'
    for (let i = 1; i <= nFloors; i++) {
        let blockLine = '*'.repeat(i * 2 - 1);
        let spaceLength = (towerWidth - (i * 2 - 1)) / 2;
        let space = ' '.repeat(spaceLength);
        let floor = `${space}${blockLine}${space}`;
        towerArray.push(floor);
    };
    return towerArray;
};

function check(a, x) {
    return a.includes(x);
};

function duplicateEncode(word) {
    let arrayOfCharacters = word.toLowerCase().split('');
    let stringToUpdate = word.toLowerCase();
    console.log(word)
    arrayOfCharacters.forEach((letter) => {
        let count = arrayOfCharacters.reduce((total, character) => {
            if (character === letter) {
                return total + 1;
            };
            return total;
        }, 0);
        console.log(letter)
        console.log(count)
        if (count > 1) {
            stringToUpdate = stringToUpdate.replace(letter, ')');
        } else {
            stringToUpdate = stringToUpdate.replace(letter, '(');
        };
    });
    return stringToUpdate;
};

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
};

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
};

function bouncingBall(h, bounce, window) {
    if ((h <= 0) || (bounce >= 1) || (bounce <= 0) || (window >= h)) {
        return -1;
    };
    let currentHeight = h;
    let timesSeen = 0;
    while (currentHeight > window) {
        timesSeen++;
        currentHeight *= bounce;
        if (currentHeight > window) {
            timesSeen++;
        };
    };
    return timesSeen;
};

function sumDigits(number) {
    if (number < 0) {
        number *= -1;    
    };
    let arrayOfDigits = number.toString().split('');
    return arrayOfDigits.reduce((sum, digit) => sum + Number(digit), 0);
};

function pipeFix(numbers){
    let min = numbers.reduce((lowest, number) => {
        return number < lowest ? number : lowest; 
    }, Infinity);
    let max = numbers.reduce((highest, number) => {
        return number > highest ? number : highest;
    }, -Infinity);
    let arrayToReturn = [];
    for (let i = min; i <= max; i++) {
        arrayToReturn.push(i);
    };   
    return arrayToReturn;
};

function isPalindrome(x) {
    let lowerCaseString = x.toLowerCase();
    let palindrome = true;
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] !== lowerCaseString[lowerCaseString.length - i - 1]) {
            palindrome = false;
        };
    };
    return palindrome;
};

var number=function(array){
    return array.map((string, index) => `${index + 1}: ${string}`);
};

function makeUpperCase(str) {
    return str.toUpperCase();
};

function smash (words) {
   return words.join(' ');
};

function getMiddle(s) {
    return s.length % 2 === 0 ? s.substring(s.length / 2 - 1, s.length / 2 + 1) : s.substring((s.length + 1) / 2 - 1, (s.length + 1) / 2);
};

function getAge(inputString){
    return Number(inputString[0]);
};

function hoopCount (n) {
    return n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it";    
};

function warnTheSheep(queue) {
    let wolfIndex = queue.indexOf('wolf');
    return wolfIndex === queue.length - 1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`
};

function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        };
    };
  return sum;
};

function findOutlier(integers) {
    let arrayOfOddIntegers = [];
    let arrayOfEvenIntegers = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            arrayOfEvenIntegers.push(integers[i]);
        } else {
            arrayOfOddIntegers.push(integers[i]);
        };
    };
    return arrayOfEvenIntegers.length === 1 ? arrayOfEvenIntegers[0] : arrayOfOddIntegers[0];
};

function toCamelCase(str){
    let arrayOfCharacters = str.split('');
    for (let i = 0; i < arrayOfCharacters.length; i++) {
        if (arrayOfCharacters[i] === '_' || arrayOfCharacters[i] === '-') {
            arrayOfCharacters.splice(i, 1);
            arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();
        };
    };
    return arrayOfCharacters.join('');
};

function disemvowel(str) {
    let vowels = {
      a: 'a',
      e: 'e',
      i: 'i',
      o: 'o',
      u: 'u',
      A: 'A',
      E: 'E',
      I: 'I',
      O: 'O',
      U: 'U',
    };
    let stringToReturn = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] in vowels) {
            continue;
        };
        stringToReturn += str[i];
    };
    return stringToReturn;
};

function combat(health, damage) {
  return health - damage >= 0 ? health - damage : 0;
};

const quarterOf = (month) => {
    switch(month) {
        case 1: 
            return 1;
        case 2:
            return 1;
        case 3:
            return 1;
        case 4: 
            return 2;
        case 5:
            return 2;
        case 6:
            return 2;
        case 7: 
            return 3;
        case 8:
            return 3;
        case 9:
            return 3;
        case 10: 
            return 4;
        case 11:
            return 4;
        case 12:
            return 4;
    };
};

String.prototype.toAlternatingCase = function () {
    let arrayOfCharacters = this.split('');
    let correctCaseArray = arrayOfCharacters.map((character) => {
        if (character === character.toLowerCase()) {
            return character.toUpperCase();
        } else {
          return character.toLowerCase();
        };
    });
    return correctCaseArray.join('');
};

function howMuchILoveYou(nbPetals) {
    while(nbPetals > 6) {
        nbPetals -= 6;
    };
    switch (nbPetals) {
        case 1:
            return "I love you";
            break;
        case 2:
            return "a little";
            break;
        case 3:
            return "a lot";
            break;
        case 4:
            return "passionately";
            break;
        case 5:
            return "madly";
            break;
        case 6:
            return "not at all";
            break;
    };
};

function stockList(listOfArt, listOfCat){
    // return empty string if either list is empty
    if (listOfArt[0] === undefined || listOfCat[0] === undefined) {
        return "";
    };
    // iterate over the list of categories
    let arrayOfCategorySums = listOfCat.map(category => {
        // iterate over list of books that match category
        let categorySum = listOfArt.filter(art => art[0] === category).reduce((acc, art) => {
            return acc + Number(art.split(' ')[1]);
        }, 0);
        return `(${category} : ${categorySum})`;
    });
    return arrayOfCategorySums.join(' - ');
};

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1;
    };
    for (let i = sq + 1; i < Infinity; i++) {
      if (Math.sqrt(i) % 1 === 0) {
          return i;
      };
    };
};

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
};

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let ageDifference = dadYearsOld - sonYearsOld;
    let sonAgeWhenHalf = 0;
    for (let i = 0; i < 1000; i++) {
        if (ageDifference === i * 2) {
            sonAgeWhenHalf = i;
        };
        ageDifference++;
    };
    if (sonAgeWhenHalf > sonYearsOld) {
        return sonAgeWhenHalf - sonYearsOld;
    } else {
        return sonYearsOld - sonAgeWhenHalf;
    };
};

function greet() {
    return 'hello world!';
};

function longestConsec(strarr, k) {
    // iterate over the array, returning the longest string of k concatenated strings
    return strarr.reduce((concatenation, string, index) => {
        // assign a variable to the set of concatenated strings
        let newConcatenation = '';
        // concatenate k strings
        for (let i = 0; i < k; i++) {
            newConcatenation += strarr[index + i];
        };
        // if your concatenation exceeded the length of the array, set it to an empty string
        if (newConcatenation.includes('undefined')) {
            newConcatenation = '';
        };
        // if the concatenation is longer than the previous one, it is the current longest
        return newConcatenation.length > concatenation.length ? newConcatenation : concatenation;
    }, '');
};

function listSquared(m, n) {
    let arrayToReturn = [];
    for (let i = m; i <= n; i++) {
        let arrayOfDivisors = [];
        for (let x = 1; x <= i; x++) {
            if (i % x === 0) {
                arrayOfDivisors.push(x);
            };
        };
        let arrayOfSquaredDivisors = arrayOfDivisors.map((divisor) => divisor ** 2);
        let sum = arrayOfSquaredDivisors.reduce((total, square) => total + square, 0);
        if (Math.sqrt(sum) % 1 === 0) {
            arrayToReturn.push([i, sum]);
        };
    };
    return arrayToReturn;
};

function titleCase(title, minorWords) {
    // if empty string, return empty string
    if (title === '' || undefined) {
        return '';
    };

    // set minorWords to lowercase if it exists. otherwise, set it to an empty string
    if (minorWords) {
        minorWords = minorWords.toLowerCase();
    } else {
        minorWords = '';
    };

    // split words into an array and convert the entire string to lowercase
    let arrayOfWords = title.toLowerCase().split(' ');

    // convert subsequent words to title case unless listed in minorWords
    for (let i = 0; i < arrayOfWords.length; i++) {
        let currentWord = arrayOfWords[i];
        // always convert the first letter of the first word to uppercase
        // convert the first letter of subsequent words if not in minorWords
        if ((i === 0) || !minorWords.split(' ').includes(currentWord)) {
            let currentWordFirstCharacter = currentWord[0].toUpperCase();
            let titleCaseCurrentWord = currentWordFirstCharacter + currentWord.substr(1, currentWord.length - 1);
            arrayOfWords[i] = titleCaseCurrentWord;
        };
    };
    return arrayOfWords.join(' ');
};

function encrypt(text, n) {
    if (text === '' || text === null || n < 0) {
        return text;
    };
    let currentText = text;
    for (let i = 0; i < n; i++) {
        let oddString = '';
        let evenString = '';
        for (let x = 0; x < currentText.length; x++) {
            if (x % 2 === 0) {
                evenString += currentText[x];
            } else {
                oddString += currentText[x];
            };
        };
        currentText = oddString + evenString;
    };
    return currentText;
};

function decrypt(encryptedText, n) {
    if (encryptedText === '' || encryptedText === null || n < 0) {
        return encryptedText;
    };
    let currentText = encryptedText;
    for (let i = 0; i < n; i++) {
        let oddString = '';
        let evenString = '';
        if (currentText.length % 2 === 0) {
            oddString = currentText.substr(0, currentText.length / 2);
            evenString = currentText.substr(currentText.length / 2, currentText.length);
        } else {
            oddString = currentText.substr(0, (currentText.length - 1) / 2);
            evenString = currentText.substr((currentText.length - 1) / 2, currentText.length);
        };
        let craftedString = '';
        for (let x = 0; x < currentText.length; x++) {
            if (x === 0) {
                craftedString += evenString[x]; 
            } else if (x % 2 === 0) {
                craftedString += evenString[x / 2];
            } else {
                craftedString += oddString[(x - 1) / 2];
            };
        };
        currentText = craftedString;
    };
    return currentText;
};

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    };
    let positiveCount = input.reduce((count, integer) => integer > 0 ? count + 1 : count, 0);
    let negativeSum = input.reduce((sum, integer) => integer < 0 ? sum + integer : sum, 0);
    return [positiveCount, negativeSum];
};

function totalGoalsCalculator() {
    let laLigaGoals = 43;
    let championsLeagueGoals = 10;
    let copaDelReyGoals = 5;
    let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
};

function capitals(word) {
    let arrayOfCapitalIndexes = [];
	  for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arrayOfCapitalIndexes.push(i);
        };
    };
    return arrayOfCapitalIndexes;
};

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy';
    } else if (old < 18) {
        return 'drink coke';
    } else if (old < 21) {
        return 'drink beer';
    } else {
        return 'drink whisky';
    };
};

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    };
    return sum;
};

function betterThanAverage(classPoints, yourPoints) {
    let average = (classPoints.reduce((sum, score) => sum + score, 0) + yourPoints) / (classPoints.length + 1);
    return yourPoints > average;
};

function reverse(string){
    let arrayOfWords = string.split(' ');
    arrayOfWords.reverse();
    return arrayOfWords.join(' ');
};

function dutyFree(normPrice, discount, hol){
    let currencyDiscount = normPrice * discount / 100;
    for (let i = 1; i < 1000000; i++) {
        if (i * currencyDiscount > hol) {
            return i - 1;
        };
    };
};

function updateLight(current) {
    switch (current) {
        case 'green' :
            return 'yellow';
        case 'yellow' :
            return 'red';
        case 'red':
            return 'green';
    };
};

function shortcut (string) {
    let lowerCaseVowels = 'aeiou';
    let stringToReturn = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (!lowerCaseVowels.includes(letter)) {
            stringToReturn += letter;  
        };
    };
    return stringToReturn;
};

function xor(a, b) {
    return (a === true && b === false) || (a === false && b === true);
};

function order(words){
    let arrayOfWords = words.split(' ');
    let arrayOfKeyedWords = arrayOfWords.map((string) => {
        return {
            word: string,
            number: string.split('').reduce((currentNumber, letter) => Number(letter) > 0 ? Number(letter) : currentNumber, 0)
        };
    });
    arrayOfKeyedWords.sort((objectOne, objectTwo) => objectOne.number - objectTwo.number);
    return arrayOfKeyedWords.map((object) => object.word).join(' ');
};

function shapeArea(n) {
    return n ** 2 + (n - 1) ** 2;  
};

function zeroPlentiful(arr){
    let sequenceCount = 0;
    let currentSequenceLength = 0;
    for (let i = 0; i < arr.length + 1; i++) {
        if (arr[i] === 0) {
            currentSequenceLength += 1;
        } else if (currentSequenceLength > 3) {
            sequenceCount += 1;
            currentSequenceLength = 0;
        } else if (currentSequenceLength > 0) {
            return 0;
        };
    };
    return sequenceCount;
};

function noBoringZeros(n) {
    if (n === 0) {
        return n;
    };
    while (n.toString()[n.toString().length - 1] === '0') {
        n = n / 10;
    };
    return n;
};

function narcissistic(value) {
    let total = 0;
    let numberOfDigits = value.toString().length;
    let digitsRemaining = numberOfDigits;
    while (digitsRemaining > 0) {
        let digit = Number(value.toString()[digitsRemaining - 1]);
        total += digit ** numberOfDigits;
        digitsRemaining -= 1;
    };
    return total === value;
};

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
};

function findNb(m) {
    let n = 0;
    while (m > 0) {
        n += 1;
        m -= n ** 3;
    };
    return m === 0 ? n : -1;
};

function getParticipants(handshakes){
    if (handshakes === 0) {
        return 0;
    };
    let participants = 1;
    let handshakesPossible = 0;
    while (true) {
        handshakesPossible += participants - 1;
        if (handshakesPossible >= handshakes) {
            break;
        };
        participants += 1;
    };
    return participants;
};

function maxSum(arr, range) {
    // iterate over the ranges, returning the highest sum
    return range.reduce((max, range) => {
        let arrayInRange = arr.slice(range[0], range[1] + 1);
        let arraySum = arrayInRange.reduce((sum, integer) => sum += integer, 0);
        return arraySum > max ? arraySum : max;
    }, -Infinity);
};

function findMissingLetter(array) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    if (array[0] === array[0].toUpperCase()) {
        arrayOfLetters = letters.split('');
        for (let i = 0; i < arrayOfLetters.length; i++) {
            arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
        };
        letters = arrayOfLetters.join('');
    };
    let indexOfMissingLetter;
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === undefined) {
            ;
        } else if (letters.indexOf(array[i]) !== (letters.indexOf(array[i + 1]) - 1)) {
            indexOfMissingLetter = letters.indexOf(array[i]) + 1;
        };
    };
    return letters[indexOfMissingLetter];
};

function solution(s, t) {
    let currentSpeed = s;
    let timeRemaining = t;
    let distanceCovered = 0;
    let numberOfSprints = 0;
    while (currentSpeed > s * 2 / 3 && timeRemaining > 0) {
        // sprint
        distanceCovered += currentSpeed * 2;
        timeRemaining -= 1;
        currentSpeed -= 1;
        numberOfSprints += 1;
        // recovery if we can sprint again
        if (currentSpeed > s * 2 / 3 && timeRemaining > 1) {
            distanceCovered += currentSpeed;
            timeRemaining -= 1;
        } else {
            break;
        };
    };
    // remaining
    distanceCovered += s * timeRemaining;
    return distanceCovered;
};

function pyramidHeight(n) {
    let cubesRemaining = n;
    let height = 0;
    for (let i = 1; i <= cubesRemaining; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            height += 1;
            cubesRemaining -= i;
        };
    };
    return height;
};

function computeDepth (x) {
    // define variables for digits and depth
    let digits = [];
    let depth = 0;
    // iterate until all digits have shown up
    while (!digits.includes(0) || !digits.includes(1) || !digits.includes(2) || !digits.includes(3) ||
                  !digits.includes(4) || !digits.includes(5) || !digits.includes(6) || !digits.includes(7) ||
                          !digits.includes(8) || !digits.includes(9)) {
        depth++;
        let currentValue = (x * depth).toString();
        for (let i = 0; i < currentValue.length; i++) {
            digits.push(Number(currentValue[i]));
        };
    };
    return depth;
};

function permuteAPalindrome (input) { 
    let letters = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    };
    for (let i = 0; i < input.length; i++) {
        letters[input[i]] ++;
    };
    let countOfOddCounts = 0;
    for (let letter in letters) {
        if (letters[letter] % 2 !== 0) {
            countOfOddCounts++;
        };
    };
    if (countOfOddCounts > 1) {
        return false;
    } else {
        return true;
    };
};

function grabscrab(anagram, dictionary) {
    // create an array to hold matching words
    let matchedWordsArray = [];
    // alphabetize the anagram
    let alphabetizedKey = Array.from(anagram).sort().join('');
    // iterate over the passed array of words
    for (let i = 0; i < dictionary.length; i++) {
        let currentWord = dictionary[i];
        let alphabetizedWord = Array.from(currentWord).sort().join('');
        if (alphabetizedWord === alphabetizedKey) {
            matchedWordsArray.push(currentWord);
        };
    };
    return matchedWordsArray;
};

function comparePowers(n1,n2) {
    console.log(n1, n2);
    let firstValue = n1[0] ** n1[1];
    let secondValue = n2[0] ** n2[1];
    console.log(firstValue, secondValue);
    if (firstValue > secondValue) {
        return -1;
    } else if (firstValue === secondValue) {
        return 0;
    } else {
        return 1;
    };
};

function mirror(text){
    let arrayOfWords = text.split(' ');
    let longestWordLength = arrayOfWords.reduce((length, word) => word.length > length ? word.length : length, 0);
    let mirrorLength = longestWordLength + 4;
    let arrayOfMirroredWords = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        let mirroredWord = '';
        for (let x = 0; x < arrayOfWords[i].length; x++) {
            mirroredWord = arrayOfWords[i][x] + mirroredWord;
        };
        mirroredWord = '* ' + mirroredWord;
        let numberOfRightSpaces = mirrorLength - mirroredWord.length - 1;
        let rightSpaces = ' '.repeat(numberOfRightSpaces);
        mirroredWord = mirroredWord + rightSpaces + '*';
        arrayOfMirroredWords.push(mirroredWord);
    };
    arrayOfMirroredWords.unshift('*'.repeat(mirrorLength));
    arrayOfMirroredWords.push('*'.repeat(mirrorLength));
    return arrayOfMirroredWords.join('\n');
};

multiplicationTable = function(size) {
    let tableArray = [];
    for (let x = 1; x <= size; x++) {
        let currentRow = [];
        for (let y = 1; y <= size; y++) {
            currentRow = [...currentRow, x * y];
        };
        tableArray = [...tableArray, currentRow];
    };
    return tableArray;
};

function fixTheMeerkat(arr) {
    return arr.reverse();
};

function findMultiples(integer, limit) {
    let arrayOfIntegers = [];
    for (let i = 1; i <= limit; i++) {
        if (i % integer === 0) {
            arrayOfIntegers.push(i);
        };
    };
    return arrayOfIntegers;
};

function solution(str){
    // declare an array to hold character pairs
    let characterPairsArray = [];
    // declare an string for the current character pair
    let currentCharacterPair = '';
    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        // add the character to the current pair
        currentCharacterPair += str[i];
        // if currentCharacterPair has 2 characters, add it to the array and reset it
        if (currentCharacterPair.length > 1) {
            characterPairsArray.push(currentCharacterPair);
            currentCharacterPair = '';
        };
    };
    // if there is a lone character in the current character pair string, add and underscore and add it to the array
    if (currentCharacterPair.length === 1) {
        currentCharacterPair += '_';
        characterPairsArray.push(currentCharacterPair);
    };
    return characterPairsArray;
};

function estSubsets(arr) {
    let uniqueSet = new Set(arr);
    let numberOfUniqueElements = uniqueSet.size;
    return 2 ** numberOfUniqueElements - 1
};

function solve(s) {
    // create an object with letter values
    let letterValues = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };
  
    // replace all vowels in the string with hyphens
    let vowelRegexp = /[aeiou]/g
    let hyphenatedString = s.replace(vowelRegexp, '-');
    
    // split the hyphenated string into an array of consonant substrings
    let substringArray = hyphenatedString.split('-').filter(substring => substring !== '');
    // iterate over the array, returning the highest substring value
    return substringArray.reduce((highest, substring) => {
        // iterate over the consonants in the substring, returning their value if it is higher than the current
        let substringValue = 0;
        for (let i = 0; i < substring.length; i++) {
            substringValue += letterValues[substring[i]];
        };
        return substringValue > highest ? substringValue : highest;
    }, 0)
};

function duplicateEncode(word) {
    let stringToEncode = word.toLowerCase();
    let arrayOfCharacters = stringToEncode.split('');
    let encodedArray = arrayOfCharacters.map(character => arrayOfCharacters.indexOf(character) === arrayOfCharacters.lastIndexOf(character) ? '(' : ')');
    return encodedArray.join('');
};

function multipleOfIndex(array) {
    let arrayToReturn = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            arrayToReturn.push(array[i]);
        };
    };
    return arrayToReturn;
};

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length -1] ? true : false;
};

function dataReverse(data) {
    if (data.length === 0) {
        return [];
    };
    let dataString = data.join('');
    let dataSegmentArray = dataString.match(/.{1,8}/g);
    let reversedDataSegmentArray = dataSegmentArray.reverse();
    let reversedDataString = reversedDataSegmentArray.join('');
    let reversedData = reversedDataString.split('');
    return reversedData.map((digit) => Number(digit));
};

function palindrome(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let filteredString = '';
    for (let i = 0; i < string.length; i++) {
        if (alphabet.indexOf(string[i].toLowerCase()) >= 0) {
            filteredString += string[i].toLowerCase();
        };
    };
    let isPalindrome = true;
    for (let i = 0; i < filteredString.length; i++) {
        let currentCharacter = filteredString[i];
        let oppositeIndex = (filteredString.length - 1) - i;
        let oppositeCharacter = filteredString[oppositeIndex];
        if (currentCharacter !== oppositeCharacter) {
            isPalindrome = false;
        };
    };
    return isPalindrome;
};

function reverse(str){
    let trimmedString = str.trim();
    let arrayOfWords = trimmedString.split(' ');
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (i % 2 !== 0) {
            let reversedWord = '';
            for (let x = arrayOfWords[i].length - 1; x >= 0; x--) {
                reversedWord += arrayOfWords[i][x];
            };
            arrayOfWords[i] = reversedWord;
        };
    };
    return arrayOfWords.join(' ');
};

function menStillStanding(cards) {
    let players = {
        A1: {
            card: '',
            in: true,
            team: 'A',
        },
        A2: {
            card: '',
            in: true,
            team: 'A',
        },
        A3: {
            card: '',
            in: true,
            team: 'A',
        },
        A4: {
            card: '',
            in: true,
            team: 'A',
        },
        A5: {
            card: '',
            in: true,
            team: 'A',
        },
        A6: {
            card: '',
            in: true,
            team: 'A',
        },
        A7: {
            card: '',
            in: true,
            team: 'A',
        },
        A8: {
            card: '',
            in: true,
            team: 'A',
        },
        A9: {
            card: '',
            in: true,
            team: 'A',
        },
        A10: {
            card: '',
            in: true,
            team: 'A',
        },
        A11: {
            card: '',
            in: true,
            team: 'A',
        },
        B1: {
            card: '',
            in: true,
            team: 'B',
        },
        B2: {
            card: '',
            in: true,
            team: 'B',
        },
        B3: {
            card: '',
            in: true,
            team: 'B',
        },
        B4: {
            card: '',
            in: true,
            team: 'B',
        },
        B5: {
            card: '',
            in: true,
            team: 'B',
        },
        B6: {
            card: '',
            in: true,
            team: 'B',
        },
        B7: {
            card: '',
            in: true,
            team: 'B',
        },
        B8: {
            card: '',
            in: true,
            team: 'B',
        },
        B9: {
            card: '',
            in: true,
            team: 'B',
        },
        B10: {
            card: '',
            in: true,
            team: 'B',
        },
        B11: {
            card: '',
            in: true,
            team: 'B',
        },
    };
    let counts = {
        A: 11,
        B: 11,
    };
    for (let refCard of cards) {
        let player = refCard[0] + refCard.substr(1, refCard.length - 2);
        let color = refCard[refCard.length - 1];
        let team = refCard[0];
        if (!players[player].in) {
            continue;
        } else if (color === players[player].card) {
            players[player].in = false;
            counts[team] -= 1;
        } else if (color === 'Y') {
            players[player].card = color;
        } else if (color === 'R') {
            players[player].in = false;
            counts[team] -= 1;
        };
        if (counts.A < 7 || counts.B < 7) {
            break;
        };
    };
    return [counts.A, counts.B];
};

function isPrime(num) {
    if (num < 2) {
        return false;
    };
    let primeBoolean = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            primeBoolean = false;
            break;
        };
    };
    return primeBoolean;
};

function problem(x){
    return typeof x === 'string' ? 'Error' : x * 50 + 6;
};

function move (position, roll) {
    return position + roll * 2;
};

function decrypt(encryption) {
    let alphabetCountTracker = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    };
    for (let i = 0; i < encryption.length; i++) {
        if (encryption[i] in alphabetCountTracker) {
            alphabetCountTracker[encryption[i]] += 1;
        } ; 
    };
    let decryption = '';
    for (let letter in alphabetCountTracker) {
        decryption += alphabetCountTracker[letter];
    };
    return decryption;
};

function ascendDescend(length, minimum, maximum) {
    let string = '';
    let currentNumber = minimum;
    let ascending = true;
    if (maximum < minimum || length === 0) {
        return '';
    };
    while (string.length < length) {
        string += currentNumber;
        if (currentNumber < maximum && ascending) {
            currentNumber++;
        } else if (currentNumber > minimum && !ascending) {
            currentNumber--;
        };

        if (currentNumber === maximum) {
            ascending = false;
        } else if (currentNumber === minimum) {
            ascending = true;
        };
    };
    return string.substring(0, length);
};

function isValidIP(str) {
    let valid = true;
    let octets = str.split('');
    if (octets.length !== 4) {
        valid = false;
    };
    for (let octet of octets) {
        if (!String(Number(octet)) === octet) {
            valid = false;
        } else if (Number(octet) < 0 || Number(octet) > 255) {
            valid = false;
        };
    };
    return valid;
};

String.prototype.camelCase = function() {
    if (this.substr(0, this.length) === '') {
        return '';
    };
    let arrayOfWords = this.trim().split(' ');
    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        let capitalizedWord = word[0].toUpperCase() + word.substr(1, word.length - 1);
        arrayOfWords[i] = capitalizedWord;
    };
    return arrayOfWords.join('');
};

function toWeirdCase(string) {
    let arrayOfWords = string.toLowerCase().split(' ');
    for (let x = 0; x < arrayOfWords.length; x++) {
        let oldWord = arrayOfWords[x];
        let newWord = '';
        for (let y = 0; y < oldWord.length; y++) {
            if (y % 2 === 0) {
                newWord += oldWord[y].toUpperCase();              
            } else {
                newWord += oldWord[y];
            };
        };
        arrayOfWords[x] = newWord;
    };
    return arrayOfWords.join(' ');
};

function inArray(array1,array2){
    let arrayToReturn = [];
   for (let array of array1) {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].includes(array)) {
                arrayToReturn.push(array);
                break;
            };
        };
    };
    return arrayToReturn.sort();
};

function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
};

function goodVsEvil(good, evil){
    let goodArray = good.split(' ');
    let goodWorthObject = {
        0: 1,
        1: 2,
        2: 3,
        3: 3,
        4: 4,
        5: 10,
    };
    let goodWorth = goodArray.reduce((worth, count, race) => {
        return worth + count * goodWorthObject[race];
    }, 0);
    let evilArray = evil.split(' ');
    let evilWorthObject = {
        0: 1,
        1: 2,
        2: 2,
        3: 2,
        4: 3,
        5: 5,
        6: 10,
    };
    let evilWorth = evilArray.reduce((worth, count, race) => {
        return worth + count * evilWorthObject[race];
    }, 0);
    if (goodWorth > evilWorth) {
        return 'Battle Result: Good triumphs over Evil';
    } else if (evilWorth > goodWorth) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else {
        return 'Battle Result: No victor on this battle field';
    };
};

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
};
Ship.prototype.isWorthIt = function() {
    return this.draft - this.crew * 1.5 > 20;
};

function tripledouble(num1, num2) {
    let currentNumber1;
    let previousNumber1;
    let currentNumber2;
    let previousNumber2;
    let streak1 = 1;
    let streak2 = 1;
    let tripleNumbersArray = [];
    let doubleNumbersArray = [];
    let string1 = num1.toString();
    let string2 = num2.toString();
    for (let i = 0; i < string1.length; i++) {
        currentNumber1 = string1[i];
        if (currentNumber1 === previousNumber1) {
            streak1++;
        } else {
            streak1 = 1;
        };
        if (streak1 === 3) {
            tripleNumbersArray.push(string1[i]);
        };
        previousNumber1 = string1[i];
    };
    for (let i = 0; i < string2.length; i++) {
        currentNumber2 = string2[i];
        if (currentNumber2 === previousNumber2) {
            streak2++;
        } else {
            streak2 = 1;
        };
        if (streak2 === 2) {
            doubleNumbersArray.push(string2[i]);
        };
        previousNumber2 = string2[i];
    };
    for (let triple of tripleNumbersArray) {
        if (doubleNumbersArray.includes(triple)) {
            return 1;
        };
    };
    return 0;
};

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let month = 0;
    while (startPriceOld + savingperMonth * month < startPriceNew) {
        month++;
        if (month % 2 === 0) {
            percentLossByMonth += 0.5;
        };
        startPriceOld *= ((100 - percentLossByMonth) / 100);
        startPriceNew *= ((100 - percentLossByMonth) / 100);
    };
    return [month, Math.round(savingperMonth * month + startPriceOld - startPriceNew)];
};

function nbYear(p0, percent, aug, p) {
    let year = 0;
    let percentage = percent / 100;
    while (p0 < p) {
      p0 = p0 + Math.floor(p0 * percentage) + aug;
      year++;
    };
    return year;
};

function twoSum(numbers, target) {
    let indexArray = [];
    for (let x = 0; x < numbers.length; x++) {
        let currentNumber = numbers[x];
        for (let y = 0; y < numbers.length; y++) {
            let testingNumber = numbers[y];
            if (y !== x && currentNumber + testingNumber === target) {
                indexArray = [x, y];
            };
        };
        if (indexArray[0]) {
            break;
        };
    };
    return indexArray;
};

function beggars(values, n) {
    if (n === 0) {
        return [];
    };
    let beggarSums = {};
    for (let i = 1; i <= n; i++) {
        beggarSums[i] = 0;
    };
    let currentBeggar = 1;
    for (let i = 0; i < values.length; i++) {
        beggarSums[currentBeggar] += values[i];
        if (currentBeggar === n) {
            currentBeggar = 0;
        };
        currentBeggar++;
    };
    let beggarArray = [];
    for (let beggar in beggarSums) {
        beggarArray.push(beggarSums[beggar]);
    };
    return beggarArray;
};

function meeting(s) {
    let arrayOfGuests = s.split(';');
    arrayOfGuests = arrayOfGuests.map(guest => guest.toUpperCase().split(':'));
    arrayOfGuests.sort((a, b) => {
        let result = a[1].localeCompare(b[1]);
        return result !== 0 ? result : a[0].localeCompare(b[0]);
    });
    arrayOfGuests = arrayOfGuests.map(guest => guest.reverse().join(', '));
    let stringToReturn = arrayOfGuests.join(')(');
    stringToReturn = '(' + stringToReturn + ')';
    return stringToReturn;
};

function cleanString(s) {
    let arrayOfCharacters = s.split('');
    for (let i = 0; i < arrayOfCharacters.length; i++) {
        // if the current character is a #, remove it and the previous character
        if (arrayOfCharacters[i] === '#' && i !== 0) {
            arrayOfCharacters.splice(i - 1, 2);
            i -= 2;
        } else if (arrayOfCharacters[i] === '#') {
            arrayOfCharacters.splice(i, 1);
            i -= 1;
        };
    };
    let cleanedString = arrayOfCharacters.join('')
    return cleanedString;
};

function validate(n){
    let arrayOfDigits = n.toString().split('');
    let lengthIsEven = arrayOfDigits.length % 2 === 0;
    let arrayOfDoubles = arrayOfDigits.map((digit, index) => {
        if ((lengthIsEven && index % 2 === 0) || (!lengthIsEven && index % 2 !== 0)) {
            return Number(digit) * 2;
        } else {
            return Number(digit);
        };
    });
    let singleDigitsArray = arrayOfDoubles.map(number => number > 9 ? number - 9 : number);
    let sum = singleDigitsArray.reduce((total, digit) => total + digit, 0);
    return sum % 10 === 0;
};

function vowelOne(s){
    let vowels = 'aeiouAEIOU';
    return s.split('').map(letter => vowels.includes(letter) ? 1 : 0).join('');
};

function isPrime(num) { 
    if (num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    };
    let primeBoolean = true;
    let i = 3;
    let limit = Math.sqrt(num);
    while (i <= limit) {
        if (num % i === 0) {
            primeBoolean = false;
            break;
        };
        i += 2;
    };
    return primeBoolean;
};

function squares(x, n) {
    let arrayToReturn = [];
    for (let i = 1; i <= n; i++) {
        if (arrayToReturn.length === 0) {
            arrayToReturn.push(x);
        } else {
            arrayToReturn.push(arrayToReturn[arrayToReturn.length - 1] ** 2);
        };
    };
    return arrayToReturn;
};

var maxSequence = function(arr) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        current += arr[i];
        if (current >= max) {
            max = current;
        } else if (current < 0) {
            current = 0;
        };
    };
    return max;
};

function swap (string) {
    let vowels = 'aeiou';
    let stringToReturn = '';
    for (let i = 0; i < string.length; i++) {
        stringToReturn += vowels.includes(string[i]) ? string[i].toUpperCase() : string[i];
    };
    return stringToReturn;
};

function findMaxProduct(arr) {
    return arr.reduce((max, integer, index) => {
        let gap = index + 1;
        let currentProduct = 1;
        for (let i = index; i < arr.length; i += gap) {
            currentProduct *= arr[i];
        };
        return currentProduct > max ? currentProduct : max;
    }, -Infinity);
};

function buildString(...template){
    return `I like ${template.join(', ')}!`;
};

*/