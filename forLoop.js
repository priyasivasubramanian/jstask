// range of numbers
function range() {
  var start = Number(document.getElementById("range1").value);
  var end = Number(document.getElementById("range2").value);
  var ans = 0;

  for (let i = start; i <= end; i++) {
    ans = i;
    console.log(ans);
  }
}

// print 5 multiplication table
function product() {
  var number = Number(document.getElementById("mul").value);
  var table = 1;
  let result = 1;

  while (table <= 10) {
    result = table * number;
    table++;
    console.log(result);
  }
}

// print table from 1 to 10

function tables() {
  var a = Number(document.getElementById("products").value);
  var b = 1;
  var final = "";

  for (var j = b; j <= 10; j++) {
    final = a * j;
  }

  console.log(a + "*" + j + "=" + final);
}

// sum of range
function sumOfRange() {
  let startpoint = Number(document.getElementById("sum1").value);
  let endpoint = Number(document.getElementById("sum2").value);
  let result = 0;
  let counter = 1;

  for (let num = startpoint; num <= endpoint; num++) {
    counter++;
    result = result + num;
  }
  console.log(result);
}
//  average of the number
function avg() {
  var start = Number(document.getElementById("avgNum1").value);
  var end = Number(document.getElementById("avgNum2").value);
  var result = 0;
  var counter = 1;

  for (let num = start; num <= end; num++) {
    counter++;
    result = result + num;
    result = result / counter;
  }
  console.log(result);
}

// // even number in a range
function evenNumber() {
  let num1 = Number(document.getElementById("oddNum1").value);
  let num2 = Number(document.getElementById("oddNum2").value);
  let answer;

  for (let val = num1; val <= num2; val++) {
    answer = val;
    if (val % 2 == 0) {
      console.log("the even number are:" + answer);
    }
  }
}

//palindrome or not

function checkPalindromeNumber(number) {
  var number = Number(document.getElementById("palindrome").value);
  var remainder,
    temp,
    reversedNumber = 0;
  temp = number;

  while (number > 0) {
    remainder = number % 10;
    number = parseInt(number / 10);
    reversedNumber = reversedNumber * 10 + remainder;
  }
  if (reversedNumber == temp) {
    console.log("The given number is Palindrome");
  } else {
    console.log("The given number is not palindrome");
  }
}

//Armstrong or not
function armstrongNum() {
  var sum = 0;
  var arm = Number(document.getElementById("Armstrong").value);

  var temp = arm;
  while (temp > 0) {
    var remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }

  if (sum == arm) {
    console.log(arm + "" + "is an Armstrong number");
  } else {
    console.log(arm + "" + "is not an Armstrong number");
  }
}

//prime or not
function primeNumberChecker() {
  var num = Number(document.getElementById("primeNum").value);
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("the given number is not a prime number");
      break;
    } else {
      console.log("the given number is prime number");
    }
  }
}

// //sum of even and odd number seperately
function sumOfEvenOdd() {
  var input = Number(document.getElementById("evenOdd").value); //123456
  var oddNum = 0;
  var evenNum = 0;
  let result = "";

  while (input > 0) {
    var remainder = input % 10; //6
    if (remainder % 2 == 0) {
      evenNum = evenNum + remainder;
      console.log("it is even number" + remainder);
    } else {
      oddNum = oddNum + remainder;
      console.log("it's an odd number" + remainder);
    }
    input = Math.floor(input / 10);
  }
  document.getElementById("evenNum").innerHTML =
    "sum of even numbers" + evenNum;
  document.getElementById("oddNum").innerHTML = "sum of odd numbers" + oddNum;
}

//Number of odd number present in the range
function oddRange() {
  let num1 = Number(document.getElementById("oddNum1").value);
  let num2 = Number(document.getElementById("oddNum2").value);
  let answer;

  for (let val = num1; val <= num2; val++) {
    answer = val;
    if (val % 2 !== 0) {
      console.log("the odd number are:" + answer);
    }
  }
}

// skip the particular value
function skip() {
  let num1 = Number(document.getElementById("rangeOfNumber1").value);
  let num2 = Number(document.getElementById("rangeOfNumber2").value);
  let results;

  for (let i = num1; i <= num2; i++) {
    results = i;
    if (i % 10 !== 5) {
      console.log(i);
    }
  }
}

// print odd numbers in descending order
function oddNum() {
  let startpoint = Number(document.getElementById("descendingNum1").value);
  let endpoint = Number(document.getElementById("descendingNum2").value);
  let results;

  for (let value = startpoint; value >= endpoint; value--) {
    results = value;
    if (value % 2 !== 0) {
      console.log("the odd number are:" + results);
    }
  }
}

//print the number from the mid of the number
function median() {
  let startpt = Number(document.getElementById("num1").value);
  let endpt = Number(document.getElementById("num2").value);
  let mid = "";

  mid = (startpt + endpt) / 2;
  for (let answer = startpt; answer <= endpt; answer++) {
    if (answer === mid) {
      console.log("Number from the middle of the range:", answer);
    }
    while (mid == answer) {
      mid++;
    }
  }
}
